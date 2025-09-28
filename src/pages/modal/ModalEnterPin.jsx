import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { verifyPin } from "../../store/authSlice";
import { toast } from "react-toastify";
import { transferData } from "../../store/transferSlice";

function ModalEnterPin({ setShowModal, receiverData, formData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  // State untuk menyimpan digit PIN
  const [pinValues, setPinValues] = useState(["", "", "", "", "", ""]);
  // State untuk menentukan apakah digit di-mask atau tidak
  const [isMasked, setIsMasked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // menyimpan ID timeout masking per digit PIN
  const maskingTimeouts = useRef([]);

  // validasi PIN
  const handleNext = async (e) => {
    e.preventDefault();
    // const pin = inputRefs.current.map((input) => input.value).join("");
        const pin = pinValues.join("");

    if (pin.length < 6) {
      setError("Masukkan 6 digit PIN Anda.");
      return;
    }

    try {
      const verifyResults = await dispatch(verifyPin({ pin: pin })).unwrap();

      const dataTransfer = {
        receiver_id: receiverData.userId,
        receiver_phone: receiverData.phone,
        amount: Number(formData.amount),
        notes: formData.notes,
        pin_sender: pin
      };

      if (verifyResults) {
        const transferResult = await dispatch(
          transferData(dataTransfer)
        ).unwrap();

        toast.success(transferResult.message || "Transfer berhasil!", {
          position: "top-center",
          autoClose: 1500,
        });

        navigate("/transfer");
      }
    } catch (error) {
      toast.error(error?.error || "Terjadi kesalahan!", {
        position: "top-center",
        autoClose: 1000,
      });
    } finally {
      setShowModal(false);
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Update nilai PIN pada posisi yang diketik
    const newPin = [...pinValues];
    newPin[index] = value;
    setPinValues(newPin);

    const newMask = [...isMasked];
    newMask[index] = false;
    setIsMasked(newMask);

    // Hapus timeout sebelumnya agar tidak bentrok
    if (maskingTimeouts.current[index]) {
      clearTimeout(maskingTimeouts.current[index]);
    }

    // Timer untuk masking
    maskingTimeouts.current[index] = setTimeout(() => {
      setIsMasked((prevMask) => {
        const updated = [...prevMask];
        updated[index] = true;
        return updated;
      });
    }, 300);
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !e.target.value && i > 0) {
      inputRefs.current[i - 1].focus();
    }
  };
  return (
    <div className="absolute inset-0 p-5 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[400px] relative">
        <h2 className="text-lg font-semibold mb-4 ">
          TRANSFER TO {receiverData.name.toUpperCase()}
        </h2>

        <form onSubmit={handleNext} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-[29px] ">Enter Your Pin 👋</h1>
            <p>Enter Your Pin For Transaction</p>
          </div>
          <div className="flex justify-center gap-3 mt-15 mb-15">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                inputMode="numeric"
                ref={(el) => (inputRefs.current[i] = el)}
                className="w-10 h-12 border-b-2 text-center text-2xl outline-none"
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                 value={isMasked[i] && pinValues[i] ? "*" : pinValues[i]}
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 p-2 bg-gray-400 text-white rounded-lg cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 p-2 bg-blue-600 text-white rounded-lg cursor-pointer"
            >
              Next
            </button>
          </div>
          <p className="text-center text-sm text-gray-500 text-[17px]">
            Forgot Your Spirit ?{" "}
            <Link to={"/profile/change-pin"}>
              <span className="cursor-pointer text-blue-700">Reset</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ModalEnterPin;
