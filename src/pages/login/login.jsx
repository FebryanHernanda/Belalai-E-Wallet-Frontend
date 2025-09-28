import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { toast } from "react-toastify";
import { getProfile } from "../../store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const emailPattern = /^[A-Za-z][\w.-]*@\S+\.\S+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*/<>]).{8,}$/;

  const validatePassword = (pwd) => {
    if (pwd.trim() === "") {
      setPasswordErrorMessage("Password harus diisi.");
      return false;
    } else if (!passwordPattern.test(pwd)) {
      setPasswordErrorMessage(
        "Password minimal 8 karakter, mengandung huruf besar, huruf kecil, angka, dan simbol."
      );
      return false;
    }
    setPasswordErrorMessage("");
    return true;
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailInvalid(newEmail.trim() === "" || !emailPattern.test(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordInvalid(!validatePassword(newPassword));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const checkSignin = async (e) => {
    e.preventDefault();

    const isEmailInputValid = email.trim() !== "" && emailPattern.test(email);
    const isPasswordInputValid = validatePassword(password);

    setIsEmailInvalid(!isEmailInputValid);
    setIsPasswordInvalid(!isPasswordInputValid);

    if (!isEmailInputValid || !isPasswordInputValid) return;

    try {
      await dispatch(login({ email, password })).unwrap();
      toast.success("Login Berhasil!", {
        position: "top-center",
        autoClose: 1000,
      });

      dispatch(getProfile());
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      toast.error(error || "Login gagal (Username / Password Salah)", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="bg-[#2948FF]">
      <div className="flex min-h-screen ">
        <div className="left-container lg:w-1/2 flex justify-center items-center bg-[#ffffff] sm:rounded-tr-[30px] sm:rounded-br-[30px]">
          <div className="p-10 lg:py-12 lg:px-16 flex gap-3.5 flex-col lg:w-3xl">
            <div className="logo flex flecx-row  items-center gap-3.5">
              <img
                src="/Logo-Money-Wallet.png"
                alt="E-wallet icon"
                className="max-w-8"
              />
              <div className="text-[#2948FF] text-2xl font-medium">
                E-Wallet
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-2xl lg:text-4xl font-medium">
                Hello Welcome Back👋{" "}
              </p>
              <p className="text-gray-500 ">
                Fill out the form correctly or you can login with several
                option.
              </p>
            </div>
            <div className="flex items-center justify-center flex-row md:flex-col gap-3.5">
              <button
                type="button"
                className="flex items-center cursor-pointer justify-center gap-3.5 border border-gray-300 rounded-lg py-2.5 w-full"
              >
                <img src="/Google.svg" alt="Google Icon" />
                <div className="hidden md:block"> Sign In With Google</div>
              </button>
              <button
                type="button"
                className="flex items-center cursor-pointer  justify-center gap-3.5 border border-gray-300 rounded-lg py-2.5 w-full"
              >
                <img src="/Facebook.svg" alt="Facebook Icon" />
                <div className="hidden md:block">Sign In With Facebook</div>
              </button>
            </div>
            <div className="flex items-center gap-3 w-full">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="text-gray-600">or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <form
              action="form"
              onSubmit={checkSignin}
              className="flex flex-col gap-3.5"
            >
              {/* Email */}
              <div className="flex flex-col bg-[#ffffff] gap-3">
                <label htmlFor="email">Email</label>
                <div className="input-email flex items-center border border-t border-gray-300 bg-[#ffffff] rounded-[8px] py-1.5 px-2.5 w-full gap-3 h-11">
                  <img src="/Logo-Email.svg" alt="" className="w-4 h-3.5" />
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter Your Email"
                    className="w-full outline-none"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                {isEmailInvalid && (
                  <span className="error text-red-500 text-sm">
                    {email.trim() === ""
                      ? "Email harus diisi"
                      : "Format email tidak valid"}
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="flex flex-col bg-[#ffffff] gap-3">
                <label htmlFor="pwd">Password</label>
                <div className="input-password flex items-center border border-t border-gray-300 bg-[#ffffff] rounded-[8px] py-1.5 px-2.5 w-full gap-3 h-11">
                  <img src="/Logo-Password.svg" alt="" className="w-4 h-3.5" />
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    onChange={handlePasswordChange}
                    id="pwd"
                    placeholder="Enter Your Password"
                    className="w-full outline-none"
                    value={password}
                  />
                  <img
                    src={
                      isPasswordVisible
                        ? "/Logo-Eye.svg"
                        : "/Logo-Eye-Close.svg"
                    }
                    alt=""
                    className="w-4 h-3.5 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                </div>
                {isPasswordInvalid && (
                  <span className="error text-red-400 text-sm">
                    {passwordErrorMessage}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className=" flex justify-center items-center text-[#ffffff] rounded-[7px] bg-[#2948FF] w-full h-11 cursor-pointer"
              >
                Login
              </button>
            </form>
            <div className="text-center text-gray-500 ">
              Not Have An Account?
              <Link to="/register" className="text-blue-500">
                {" "}
                Register
              </Link>
            </div>
            <div className="text-center text-gray-500 ">
              Forgot password?
              <Link to="/forgot-password" className="text-blue-500">
                {" "}
                Reset Password
              </Link>
            </div>
          </div>
        </div>
        <div className="right-container max-sm:hidden flex items-center min-h-screen bg-[#2948FF] lg:w-[50%] ">
          <img src="/Logo-Login.png" alt="" className="mx-auto h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Login;
