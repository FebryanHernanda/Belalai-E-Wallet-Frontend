import React from "react";

function ModalHistory() {
  return (
    <>
      <section className="bg-gray-200 mx-5 rounded-lg h-fit mt-40">
        <div className="py-5">
          <header className="px-5">
            <h1 className="text-gray-500">DETAIL TRANSACTION GHALUH 1</h1>
            <hr className="border-t border-gray-500" />
            <div className="py-5">
              <img src="../src/assets/icon/galuh.svg" alt="" className="max-w-20"/>
            </div>
          </header>
          {/* pembungkus data user */}
          <div className="px-5 flex flex-col gap-2">
            <div>
              <h1 className="font-medium">Name:</h1>
              <p>Ghaluh Wizard Anggoro</p>
            </div>
            <div>
              <h1 className="font-medium">Phone:</h1>
              <p>081232817321321</p>
            </div>
            <div>
              <h1 className="font-medium">Status:</h1>
              <p>Transfer Success</p>
            </div>
            <div>
              <h1 className="font-medium">Amount:</h1>
              <p className="text-red-600">Rp.50.000</p>
            </div>
          </div>
          <div className="px-5 mt-5 flex flex-col gap-5">
            <button className="border border-red-600 rounded-lg w-full flex justify-center items-center gap-5 h-10 cursor-pointer">
              <img src="../src/assets/icon/delete.svg" alt="" />
              <p className="text-red-600 font-medium">Delete</p>
            </button>
            <button className="bg-blue-600 rounded-lg w-full flex justify-center items-center gap-5 h-10 cursor-pointer">
              <p className="text-white font-medium">Back</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ModalHistory;
