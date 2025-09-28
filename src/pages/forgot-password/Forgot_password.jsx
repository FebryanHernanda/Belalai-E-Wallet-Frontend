import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPassword, clearRecoveryState } from "../../store/recoverySlice";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.recovery);

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

  const submitHandler = (e) => {
    e.preventDefault();

    // Validasi email
    if (email.trim() === "") {
      setErrorEmail("Email tidak boleh kosong");
      return;
    }
    if (!re.test(email)) {
      setErrorEmail("Format email salah");
      return;
    }

    setErrorEmail("");

    dispatch(forgotPassword({ email }))
      .unwrap()
      .then((res) => {
        if (res?.data?.token) {
          navigate(`/reset-password?token=${res.data.token}`);
        }
      })
      .finally(() => {
        setTimeout(() => dispatch(clearRecoveryState()), 4000);
      });
  };

  return (
    <main className="bg-[#3969FD] h-screen">
      <div className="flex justify-center items-center h-screen mx-5 md:mx-35">
        <div className="w-200 h-110 lg:h-120 lg:w-140 bg-white px-5 md:px-15 py-10 rounded-3xl shadow-lg">
          <div className="flex flex-col gap-5">
            <header className="flex items-center gap-3 mb-2">
              <img
                src="./src/assets/icon/Money Wallet.svg"
                alt="icon"
                className="max-w-8"
              />
              <p className="text-blue-500 font-medium text-2xl">E-Wallet</p>
            </header>

            <h1 className="text-2xl lg:text-4xl">Forgot Password 👋</h1>
            <p className="text-gray-500 lg:text-lg">
              Masukkan email yang terdaftar, kami akan kirimkan link reset
              password.
            </p>

            <form onSubmit={submitHandler}>
              <label htmlFor="email" className="text-xl mb-2">
                Email
              </label>
              <div className="flex items-center border border-gray-300 bg-gray-50 rounded-[8px] py-1.5 px-2.5 w-full gap-3 h-17">
                <img
                  src="./src/assets/icon/Logo-email.svg"
                  alt="email-icon"
                  className="w-6 h-6"
                />
                <input
                  type="text"
                  id="email"
                  placeholder="Masukkan email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none"
                />
              </div>
              <span className="text-red-500 min-h-[1.5rem]">
                {errorEmail || error}
              </span>

              {success && (
                <p className="text-green-500 text-sm mt-1">{success}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white h-13 rounded-md cursor-pointer mt-4 hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Mengirim..." : "Kirim Link Reset"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
