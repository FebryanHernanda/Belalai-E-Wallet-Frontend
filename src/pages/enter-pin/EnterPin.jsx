import React, { useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPin } from "../../store/authSlice";
import { toast } from "react-toastify";

const EnterPin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const inputRefs = useRef([]);
  const [error, setError] = useState("");

  // menyimpan ID timeout masking per digit PIN
  const maskingTimeouts = useRef([]);

  // Fokus ke input pertama
  // useEffect(() => {
  //   inputRefs.current[0]?.focus();
  // }, []);

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

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const pin = inputRefs.current.map((input) => input.value).join("");
    const pin = pinValues.join("");

    if (pin.length < 6) {
      setError("PIN tidak boleh kosong, harus 6 digit!");
      return;
    }

    setError("");

    try {
      const formData = new FormData();
      formData.append("pin", pin);

      await dispatch(createPin(formData)).unwrap();
      toast.success("Pin Berhasil dibuat!", {
        position: "top-center",
        autoClose: 1000,
      });

      setTimeout(() => {
        navigate("/profile");
      }, 1500);
    } catch (error) {
      toast.error(error.message || "Pin Gagal dibuat !", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="bg-[#2948FF]">
      <div className="flex min-h-screen">
        <div className="left-container w-[100%]  lg:w-[50%] flex justify-center items-center bg-[#ffffff] sm:rounded-tr-[30px] sm:rounded-br-[30px]">
          <div className="py-12 px-16 flex gap-3.5 flex-col">
            <div className="logo flex flecx-row items-center gap-3.5">
              <img src="/Logo-Money-Wallet.png" alt="" />
              <div className="text-[#2948FF]">E-Wallet</div>
            </div>
            <div>
              <h1>Enter Your Pin 👋</h1>
              <div>Please save your pin because this is so important.</div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full max-w-sm mx-auto"
            >
              <div className="pin-input-container flex items-center justify-center gap-4 mt-10 mb-6">
                {[...Array(6)].map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    className="w-10 text-[30px] text-center  border-b-2 border-gray-400 focus:border-blue-500 text-lg"
                    ref={(el) => (inputRefs.current[i] = el)}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    value={isMasked[i] && pinValues[i] ? "*" : pinValues[i]}
                  />
                ))}
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}

              <button
                type="submit"
                className="flex justify-center items-center text-white rounded-md bg-[#2948FF] w-full h-11 cursor-pointer"
              >
                Register
              </button>
            </form>

            <div className="text-center">
              Forgot Your Pin?
              <Link to="/register" className="text-blue-500">
                Reset
              </Link>
            </div>
          </div>
        </div>
        <div className="right-container max-sm:hidden flex items-center min-h-screen bg-[#2948FF] lg:w-[50%] ">
          <img src="/Image-Enter-Pin.svg" alt="" className="mx-auto h-auto" />
        </div>
      </div>
    </div>
  );
};

export default EnterPin;
