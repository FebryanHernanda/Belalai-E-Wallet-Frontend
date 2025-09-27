import React from "react";
import { Link } from "react-router-dom";

function ModalFailed({onClose}) {
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
                src="../src/assets/icon/modalFailed.svg"
                alt=""
                className=""
              />
            </div>
            <h1 className="text-2xl font-semibold text-center">
              Oops Transfer <span className="text-red-600">Failed</span>
            </h1> 
            <p className="text-center text-gray-500 mt-4">
             Sorry Theres is an issue for your transfer, try again later !
            </p>
          </section>
          <div className="mt-5 flex flex-col gap-5">
            <button
              className="bg-blue-700 rounded-lg w-full flex justify-center items-center gap-5 h-15 cursor-pointer"
              onClick={onClose}
            >
              <p className="text-white font-semibold">Try Again</p>
            </button>
            <Link to={"/dashboard"}>
            
            
            <button
              className="border border-blue-700 rounded-lg w-full flex justify-center items-center gap-5 h-15 cursor-pointer"
            >
              <p className="text-blue-700 font-semibold">Back To Dashboard</p>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalFailed;
