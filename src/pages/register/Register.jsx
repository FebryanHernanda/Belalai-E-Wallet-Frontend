import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../store/authSlice";
import { toast } from "react-toastify";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorem, setErrorem] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorpass, setErrorPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmpass, setErrorConfirmPass] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmIsPasswordVisible] =
    useState(false);

  // regex untuk email
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
  // regex untuk huruf kecil
  const RegexKecil = /[a-z]/;
  // regex untuk huruf besar
  const RegexBesar = /[A-Z]/;
  // regex untuk karakter spesial
  const Spesial = /[!@#$%^&*/><]/;
  let valid = true;

  // toogle password visibiliy
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  // toogle confirm password visibiliy
  const toggleConfirmPasswordVisibility = () => {
    setConfirmIsPasswordVisible(!isConfirmPasswordVisible);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // validasi email
    if (email.trim() === "") {
      setErrorem("Email tidak boleh kosong");
      valid = false;
    } else if (!re.test(email)) {
      setErrorem("Format Email salah");
      valid = false;
    } else {
      setErrorem("");
    }

    // validasi password
    if (password.trim() === ``) {
      setErrorPass("Password tidak boleh kosong");
      valid = false;
    } else if (password.length < 8) {
      setErrorPass("Minimal harus 8 karakter");
      valid = false;
    } else if (!RegexKecil.test(password)) {
      setErrorPass("Minimal harus ada huruf kecil");
      valid = false;
    } else if (!RegexBesar.test(password)) {
      setErrorPass("Harus ada huruf Besar");
      valid = false;
    } else if (!Spesial.test(password)) {
      setErrorPass("harus ada karakter spesial !@#$%^&*/<>");
      valid = false;
    } else {
      setErrorPass("");
    }

    // validasi confirm password
    if (password !== confirmPassword) {
      setErrorConfirmPass("Password dan konfirmasi password harus sama");
      valid = false;
    } else {
      setErrorConfirmPass("");
    }

    if (valid) {
      try {
        await dispatch(register({ email, password })).unwrap();
        toast.success("Register Berhasil!", {
          position: "top-center",
          autoClose: 1000,
        });
        setTimeout(() => navigate("/login"), 1500);
      } catch (error) {
        toast.error(error || "Register gagal", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    }
  };
  return (
    <>
      <section className="bg-[#2948FF] min-h-screen ">
        <div className="flex">
          <section className="lg:bg-cover lg:w-1/2 ">
            <section className="bg-white h-screen lg:rounded-r-3xl">
              <section className="px-5 lg:px-40 pt-10">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="./src/assets/icon/Money Wallet.svg"
                    alt="icon"
                    className="max-w-5"
                  />
                  <p className="text-blue-500 font-medium">E-Wallet</p>
                </div>
                {/* header */}
                <header>
                  <h1 className="font-normal text-xl">
                    Start Accessing Banking Needs With All Devices and All
                    Platforms With 30.000+ Users
                  </h1>
                  <p className="text-gray-500 mt-2">
                    Transfering money is eassier than ever, you can access
                    Zwallet wherever you are. Desktop, laptop, mobile phone? we
                    cover all of that for you!
                  </p>
                </header>
                {/* Sign In other */}
                <section className="flex flex-row lg:flex-col gap-3 mt-5">
                  <button className="border rounded-4xl w-full h-9 border-gray-300 cursor-pointer flex items-center justify-center gap-5">
                    <img
                      src="./src/assets/icon/flat-color-icons_google.svg"
                      alt=""
                    />
                    <p className="hidden lg:block lg:text-md">
                      Sign In With Google
                    </p>
                  </button>
                  <button className="border rounded-4xl w-full h-9 border-gray-300 cursor-pointer flex items-center justify-center gap-5">
                    <img src="./src/assets/icon/fb.svg" alt="" />
                    <p className="hidden lg:block lg:text-md">
                      Sign In With Facebook
                    </p>
                  </button>
                </section>
                <div className="relative text-center my-4">
                  <hr className="border-t border-gray-300" />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-7 text-gray-400">
                    Or
                  </span>
                </div>

                {/* input user email and pass */}
                <form onSubmit={submitHandler}>
                  <div className="flex flex-col bg-[#ffffff] gap-1">
                    <label htmlFor="email">
                      Email
                    </label>
                    <div className="input-email flex items-center border border-t border-gray-300 bg-gray-50 rounded-[8px] py-1.5 px-2.5 w-full gap-3 h-10">
                      <img
                        src="./src/assets/icon/Logo-email.svg"
                        alt=""
                        className="w-4 h-3.5"
                      />
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full outline-none"
                      />
                    </div>
                    <span className="text-red-500 min-h-[1.5rem]">
                      {errorem}
                    </span>
                  </div>
                  <div className="flex flex-col bg-[#ffffff] gap-1">
                    <label htmlFor="password" className="">
                      Password
                    </label>
                    <div className="flex items-center border border-t border-gray-300 bg-gray-50 rounded-[8px] py-1.5 px-2.5 w-full gap-3 h-10">
                      <img
                        src="./src/assets/icon/Password.svg"
                        alt="password"
                        className="w-4 h-3.5"
                      />
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        id="password"
                        placeholder="Enter Your Password"
                        className="w-full outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <img
                        src={
                          isPasswordVisible
                            ? "./src/assets/icon/eyesOpen.svg"
                            : "./src/assets/icon/EyeClose.svg"
                        }
                        alt=""
                        className="w-20 h-3.5 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      />
                    </div>
                    <span className="text-red-500 min-h-[1.5rem]">
                      {errorpass}
                    </span>
                  </div>
                  <div className="flex flex-col bg-[#ffffff] gap-1 mt-1">
                    <label htmlFor="confirmpassword" className="">
                      Confirm Password
                    </label>
                    <div className="flex items-center border border-t border-gray-300 bg-gray-50 rounded-[8px] py-1.5 px-2.5 w-full gap-3 h-10">
                      <img
                        src="./src/assets/icon/Password.svg"
                        alt="confirmpassword"
                        className="w-4 h-3.5"
                      />
                      <input
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        id="confirmpassword"
                        placeholder="Enter Your Password Again"
                        className="w-full outline-none"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <img
                        src={
                          isConfirmPasswordVisible
                            ? "./src/assets/icon/eyesOpen.svg"
                            : "./src/assets/icon/EyeClose.svg"
                        }
                        alt=""
                        className="w-20 h-3.5 cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                      />
                    </div>
                    <span className="text-red-500 min-h-[1rem]">
                      {errorConfirmpass}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white h-10 rounded-md cursor-pointer mt-1"
                  >
                    Register
                  </button>
                  <p className="text-center mt-3 text-gray-500">
                    Have An Account ?{" "}
                    <Link className="text-blue-600 cursor-pointer" to="/login">
                      Login
                    </Link>
                  </p>
                </form>
              </section>
            </section>
          </section>
          {/* right side image */}
          <section className="lg:w-1/2 flex justify-center items-center">
            <img
              src="./src/assets/icon/background.svg"
              alt="Background image"
              className="hidden md:block"
            />
          </section>
        </div>
      </section>
    </>
  );
}

export default Register;
