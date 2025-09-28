// import React, { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { createPin } from "../../store/authSlice";
// import { toast } from "react-toastify";

// const ResetPin = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const inputRefs = useRef([]);
//   const [error, setError] = useState("");

//   const handleChange = (e, index) => {
//     const value = e.target.value;

//     if (!/^[0-9]?$/.test(value)) {
//       e.target.value = "";
//       return;
//     }

//     if (value && index < inputRefs.current.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !e.target.value && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const pin = inputRefs.current.map((input) => input.value).join("");

//     if (pin.length < 6) {
//       setError("PIN tidak boleh kosong, harus 6 digit!");
//       return;
//     }

//     setError("");

//     try {
//       const formData = new FormData();
//       formData.append("new_pin", pin);

//       await dispatch(createPin(formData)).unwrap();
//       toast.success("Pin Berhasil dibuat!", {
//         position: "top-center",
//         autoClose: 1000,
//       });

//       setTimeout(() => {
//         navigate("/profile");
//       }, 1500);
//     } catch (error) {
//       toast.error(error.message || "Pin Gagal dibuat !", {
//         position: "top-center",
//         autoClose: 1000,
//       });
//     }
//   };

//   return (
//     <section className="bg-[#3969FD] h-screen">
//       <div className="flex justify-center items-center h-screen mx-5 md:mx-35">
//         <div className="w-200 h-110 lg:h-120 lg:w-140 bg-white px-5 md:px-15 py-10 rounded-3xl shadow-lg">
//           <div className="flex flex-col gap-5">
//             <div className="logo flex flecx-row items-center gap-3.5">
//               <img src="/Logo-Money-Wallet.png" alt="" />
//               <div className="text-[#2948FF]">E-Wallet</div>
//             </div>
//             <div>
//               <h1>Enter Your Pin 👋</h1>
//               <div>Please save your pin because this is so important.</div>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col gap-4 w-full max-w-sm mx-auto"
//             >
//               <div className="pin-input-container flex items-center justify-center gap-4 mt-10 mb-6">
//                 {[...Array(6)].map((_, i) => (
//                   <input
//                     key={i}
//                     type="text"
//                     inputMode="numeric"
//                     maxLength="1"
//                     className="w-10 text-[30px] text-center  border-b-2 border-gray-400 focus:border-blue-500 text-lg"
//                     ref={(el) => (inputRefs.current[i] = el)}
//                     onChange={(e) => handleChange(e, i)}
//                     onKeyDown={(e) => handleKeyDown(e, i)}
//                   />
//                 ))}
//               </div>

//               {error && (
//                 <div className="text-red-500 text-sm text-center">{error}</div>
//               )}

//               <button
//                 type="submit"
//                 className="flex justify-center items-center text-white rounded-md bg-[#2948FF] w-full h-11 cursor-pointer"
//               >
//                 Register
//               </button>
//             </form>

//             <div className="text-center">
//               Forgot Your Pin?
//               <Link to="/register" className="text-blue-500">
//                 Reset
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResetPin;
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { resetPIN } from "../../store/recoverySlice";
import { toast } from "react-toastify";

const ResetPin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const inputRefs = useRef([]);
  const [error, setError] = useState("");

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) {
      e.target.value = "";
      return;
    }
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
    const pin = inputRefs.current.map((input) => input.value).join("");

    if (pin.length < 6) {
      setError("PIN harus 6 digit!");
      return;
    }

    if (!token) {
      toast.error("Token tidak ditemukan atau sudah kadaluarsa!");
      return;
    }

    setError("");

    try {
      const response = await dispatch(
        resetPIN({ token, newPIN: pin })
      ).unwrap();
      toast.success(response.msg || "PIN berhasil di-reset!", {
        position: "top-center",
        autoClose: 1000,
      });

      setTimeout(() => navigate("/profile"), 1200);
    } catch (err) {
      toast.error(err || "Gagal reset PIN!", {
        position: "top-center",
        autoClose: 1500,
      });
    }
  };

  return (
    <section className="bg-[#3969FD] h-screen">
      <div className="flex justify-center items-center h-screen mx-5 md:mx-35">
        <div className="w-200 h-110 lg:h-120 lg:w-140 bg-white px-5 md:px-15 py-10 rounded-3xl shadow-lg">
          <div className="flex flex-col gap-5">
            <div className="logo flex flex-row items-center gap-3.5">
              <img src="/Logo-Money-Wallet.png" alt="" />
              <div className="text-[#2948FF] font-bold">E-Wallet</div>
            </div>
            <div>
              <h1>Enter Your PIN 👋</h1>
              <p>Please save your PIN because this is important.</p>
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
                    className="w-10 text-[30px] text-center border-b-2 border-gray-400 focus:border-blue-500 text-lg"
                    ref={(el) => (inputRefs.current[i] = el)}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
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
                Reset PIN
              </button>
            </form>

            <div className="text-center mt-4">
              Forgot Your PIN?{" "}
              <Link to="/forgot-pin" className="text-blue-500">
                Reset
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPin;
