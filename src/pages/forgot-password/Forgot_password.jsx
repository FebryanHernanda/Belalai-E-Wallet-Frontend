import React, { useState } from "react";

function Forgot_password() {
  const [errorem, setErrorem] = useState("");
  const [email, setEmail] = useState("");

  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

  let valid = true;

  const submitHandler = (e) => {
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
      return valid;
    }
  };
  return (
    <>
      <main className="bg-[#3969FD] h-screen">
        <div className="flex justify-center items-center h-screen mx-5 md:mx-35">
          <div className="w-200 h-110 lg:h-120 lg:w-140 bg-white px-5 md:px-15 py-10 rounded-3xl">
            <div className="flex flex-col gap-5">
              <header className="flex items-center gap-3 mb-2">
                <img
                  src="./src/assets/icon/Money Wallet.svg"
                  alt="icon"
                  className="max-w-8"
                />
                <p className="text-blue-500 font-medium text-2xl">E-Wallet</p>
              </header>
              <h1 className="text-2xl lg:text-4xl">Fill Out Form Correctly 👋</h1>
              <p className="text-gray-500 lg:text-lg">
                We will send new password to your email
              </p>
              <form onSubmit={submitHandler}>
                <div className="flex flex-col bg-[#ffffff] gap-1">
                  <label htmlFor="email" className="text-xl mb-2">
                    Email
                  </label>
                  <div className="input-email flex items-center border border-t border-gray-300 bg-gray-50 rounded-[8px] py-1.5 px-2.5 w-full gap-3 h-17">
                    <img
                      src="./src/assets/icon/Logo-email.svg"
                      alt=""
                      className="w-6 h-35"
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
                  <span className="text-red-500 min-h-[1.5rem]">{errorem}</span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white h-13 rounded-md cursor-pointer mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Forgot_password;
