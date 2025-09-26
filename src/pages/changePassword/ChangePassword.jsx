import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [showModal, setShowModal] = useState(false);

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*/<>]).{8,}$/;

  const validateForm = () => {
    let isValid = true;
    let newErrors = { newPassword: "", confirmPassword: "" };

    // Cek pola password baru
    if (!passwordPattern.test(newPassword)) {
      newErrors.newPassword =
        "Password minimal 8 karakter, ada huruf besar, huruf kecil, dan simbol.";
      isValid = false;
    }

    // Cek password baru tidak boleh kosong
    if (newPassword.trim() === "") {
      newErrors.newPassword = "Password harus diisi.";
      isValid = false;
    }

    // Cek password lama dan password baru
    if (oldPassword && oldPassword === newPassword) {
      newErrors.newPassword =
        "Password baru tidak boleh sama dengan password lama.";
      isValid = false;
    }

    // Cek konfirmasi password
    if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Password konfirmasi tidak sama.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(true);
    }
  };

  const confirmUpdate = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    toast.success("Password berhasil diperbarui!");
    setShowModal(false);
  };
  const cancelUpdate = () => {
    setShowModal(false);
  };

  return (
    <section className="p-9 flex flex-col gap-6">
      <div className="md:flex hidden gap-5">
        <img src="/Icon-Profile.svg" alt="" />
        <span>Profile</span>
      </div>
      <div className="p-6 md:shadow flex flex-col gap-3.5">
        <h1 className="font-semibold ">Change Password</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Old Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="oldpwd">Existing Password</label>
            <div className="flex items-center border rounded-md px-2.5 h-11 gap-3">
              <img src="/Logo-Password.svg" alt="" className="w-4 h-3.5" />
              <input
                type={showOld ? "text" : "password"}
                id="oldpwd"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full outline-none"
              />
              <img
                src={showOld ? "/Logo-Eye.svg" : "/Logo-Eye-Close.svg"}
                alt="toggle"
                className="w-5 h-5 cursor-pointer"
                onClick={() => setShowOld(!showOld)}
              />
            </div>
          </div>

          {/* New Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="newpwd">New Password</label>
            <div className="flex items-center border rounded-md px-2.5 h-11 gap-3">
              <img src="/Logo-Password.svg" alt="" className="w-4 h-3.5" />
              <input
                type={showNew ? "text" : "password"}
                id="newpwd"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full outline-none"
              />
              <img
                src={showNew ? "/Logo-Eye.svg" : "/Logo-Eye-Close.svg"}
                alt="toggle"
                className="w-5 h-5 cursor-pointer"
                onClick={() => setShowNew(!showNew)}
              />
            </div>
            {errors.newPassword && (
              <span className="text-red-500 text-sm">{errors.newPassword}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmpwd">Confirm New Password</label>
            <div className="flex items-center border rounded-md px-2.5 h-11 gap-3">
              <img src="/Logo-Password.svg" alt="" className="w-4 h-3.5" />
              <input
                type={showConfirm ? "text" : "password"}
                id="confirmpwd"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full outline-none"
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
            className="mt-2 flex justify-center items-center text-white rounded-md bg-blue-600 w-full h-11 cursor-pointer hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Modal Konfirmasi */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">
              Apakah Anda yakin ingin mengganti password?
            </h2>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelUpdate}
                className="px-4 py-2 rounded-md border border-gray-300"
              >
                Batal
              </button>
              <button
                onClick={confirmUpdate}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Ya, Ganti
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default ChangePassword;
