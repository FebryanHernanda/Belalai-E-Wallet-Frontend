import React from "react";
import { Link } from "react-router-dom";

function ModalSucces({ onClose }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white z-20 mx-5 px-5 py-5 rounded-lg mt-[100px] lg:w-150 lg:pb-10 absolute">
          {/* header */}
          <header>
            <h1 className="text-gray-600 font-semibold mb-2">
              TRANSFER TO GHALUH 1
            </h1>
            <hr className="border-t border-gray-400" />
          </header>
          {/* content */}
          <section>
            <div className="flex justify-center">
              <img
                src="../src/assets/icon/modalSucces.svg"
                alt=""
                className=""
              />
            </div>
            <h1 className="text-2xl font-semibold text-center">
              Yeay Transfer <span className="text-green-600">Success</span>
            </h1>
            <p className="text-center text-gray-500 mt-4">
              Thank you for using this application for your financial
            </p>
          </section>
          <div className="mt-5 flex flex-col gap-5">
            <Link to={"/transfer"}>
              <button className="bg-blue-700 rounded-lg w-full flex justify-center items-center gap-5 h-15 cursor-pointer">
                <p className="text-white font-semibold">Done</p>
              </button>
            </Link>
            <button className="border border-blue-700 rounded-lg w-full flex justify-center items-center gap-5 h-15 cursor-pointer"
             onClick={onClose}>
              <p className="text-blue-700 font-semibold">Transfer Again</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSucces;
