import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, clearRecoveryState } from "../../store/recoverySlice";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.recovery);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*/<>]).{8,}$/;

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        dispatch(clearRecoveryState());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  const validateForm = () => {
    const newErrors = { newPassword: "", confirmPassword: "" };
    let isValid = true;

    if (!newPassword.trim()) {
      newErrors.newPassword = "Password baru harus diisi.";
      isValid = false;
    } else if (!passwordPattern.test(newPassword)) {
      newErrors.newPassword =
        "Min. 8 karakter, harus ada huruf besar, huruf kecil, dan simbol.";
      isValid = false;
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Konfirmasi password harus diisi.";
      isValid = false;
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Password konfirmasi tidak sama.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (!token) return toast.error("Token tidak ditemukan.");

    try {
      const resultAction = await dispatch(
        resetPassword({ token, newPassword })
      );

      if (resetPassword.fulfilled.match(resultAction)) {
        toast.success(resultAction.payload.msg || "Password berhasil diubah!", {
          autoClose: 1500,
        });
        setTimeout(() => navigate("/profile"), 1500);
      } else {
        toast.error(resultAction.payload || "Gagal mengubah password");
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.message || "Terjadi kesalahan saat mereset password");
    }
  };

  return (
    <main className="bg-[#3969FD] h-screen flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-8 md:p-12 rounded-3xl shadow-xl mx-6">
        <div className="flex flex-col gap-6">
          <header className="flex items-center gap-3 mb-2 border-b pb-4">
            <img
              src="/Logo-Money-Wallet.png"
              alt="E-wallet icon"
              className="max-w-8"
            />
            <p className="text-blue-600 font-bold text-2xl">E-Wallet</p>
          </header>
          <p className="text-2xl lg:text-4xl">Set New Password</p>
          <p className="text-gray-500">
            Enter your new password and confirm it to continue.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="newpwd" className="font-medium text-gray-700">
                New Password
              </label>
              <div className="flex items-center border border-gray-300 bg-gray-50 rounded-lg px-3 h-12 gap-3 focus-within:border-blue-500 transition duration-200">
                <img src="/Logo-Password.svg" alt="" className="w-4 h-3.5" />
                <input
                  type={showNew ? "text" : "password"}
                  id="newpwd"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full outline-none bg-transparent"
                  disabled={loading}
                />
                <img
                  src={showNew ? "/Logo-Eye.svg" : "/Logo-Eye-Close.svg"}
                  alt="toggle"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setShowNew(!showNew)}
                />
              </div>
              {errors.newPassword && (
                <span className="text-red-500 text-sm">
                  {errors.newPassword}
                </span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmpwd" className="font-medium text-gray-700">
                Confirm New Password
              </label>
              <div className="flex items-center border border-gray-300 bg-gray-50 rounded-lg px-3 h-12 gap-3 focus-within:border-blue-500 transition duration-200">
                <img src="/Logo-Password.svg" alt="" className="w-4 h-3.5" />
                <input
                  type={showConfirm ? "text" : "password"}
                  id="confirmpwd"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full outline-none bg-transparent"
                  disabled={loading}
                />
                <img
                  src={showConfirm ? "/Logo-Eye.svg" : "/Logo-Eye-Close.svg"}
                  alt="toggle"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setShowConfirm(!showConfirm)}
                />
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white h-12 rounded-lg font-semibold cursor-pointer mt-8 hover:bg-blue-700 transition duration-300"
              disabled={loading}
            >
              {loading ? "Processing..." : "Change Password"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
