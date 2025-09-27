import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const ChangePin = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const pin = inputRefs.current.map((input) => input.value).join("");

    if (pin.length < 6) {
      setError("PIN tidak boleh kosong, harus 6 digit!");
      return;
    }

    setError("");
    console.log("PIN:", pin);
  };

  return (
    <section className="p-9 flex flex-col gap-6">
      <div className="md:flex hidden gap-5">
        <img src="/Icon-Profile.svg" alt="" />
        <span>Profile</span>
      </div>
      <div className="p-6 md:shadow">
        <div className="text-center flex flex-col gap-3.5">
          <h1 className="font-semibold">Change Pin 👋</h1>
          <div>Please save your pin because this is so important.</div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-sm mx-auto "
        >
          <div className="pin-input-container flex items-center justify-center gap-3 md:gap-7 mt-10 mb-6">
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
              />
            ))}
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <Link to={"/profile"}>
            <button
              type="submit"
              className="flex justify-center items-center text-white rounded-md bg-[#2948FF] w-full h-11 cursor-pointer mt-5"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default ChangePin;
