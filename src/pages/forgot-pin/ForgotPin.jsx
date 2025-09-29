import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPIN, clearRecoveryState } from "../../store/recoverySlice";
import { toast } from "react-toastify";

const ForgotPIN = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.recovery);

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

  const submitHandler = (e) => {
    e.preventDefault();

    // Validasi email
    if (!email.trim()) {
      setErrorEmail("Email tidak boleh kosong");
      return;
    }
    if (!re.test(email)) {
      setErrorEmail("Format email salah");
      return;
    }

    setErrorEmail("");

    dispatch(forgotPIN({ email }))
      .unwrap()
      .then(() => {
        toast.success("Link reset password sudah dikirim ke email anda", {
          autoClose: 1000,
        });
      })
      .finally(() => {
        setTimeout(() => dispatch(clearRecoveryState()), 4000);
      });
  };

  return (
    <main className="bg-[#3969FD] h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg mx-4">
        <div className="flex flex-col gap-5">
          <header className="flex items-center gap-3 mb-4">
            <img
              src="/belalai-wallet.png"
              alt="icon"
              className="w-8"
            />
            <p className="text-blue-500 font-medium text-2xl">Russel Pay</p>
          </header>

          <h1 className="text-2xl lg:text-4xl">Forgot PIN 👋</h1>
          <p className="text-gray-500 lg:text-lg">
            Masukkan email yang terdaftar, kami akan kirimkan PIN baru ke email
            Anda.
          </p>

          <form onSubmit={submitHandler} className="flex flex-col gap-4 mt-4">
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <div className="flex items-center border border-gray-300 bg-gray-50 rounded-lg px-3 h-12 gap-3">
              <img
                src="/public/icon/Logo-email.svg"
                alt="email-icon"
                className="w-6 h-6"
              />
              <input
                type="text"
                id="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none bg-transparent"
                disabled={loading}
              />
            </div>
            <span className="text-red-500 text-sm min-h-[1.5rem]">
              {errorEmail || error}
            </span>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white h-12 rounded-lg font-semibold mt-4 hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim PIN Baru"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ForgotPIN;
