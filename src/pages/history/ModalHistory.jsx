import React from "react";

function ModalHistory(props) {
  const { setIsOpen, customer } = props;
  return (
    <>
      <header className="px-5">
        <h1 className="text-gray-500">DETAIL TRANSACTION GHALUH 1</h1>
        <hr className="border-t border-gray-500" />
        <div className="py-5">
          <img src="../src/assets/icon/galuh.svg" alt="" className="max-w-20" />
        </div>
      </header>
      {/* pembungkus data user */}
      <div className="px-5 flex flex-col gap-2">
        <div>
          <h1 className="font-medium">Name:</h1>
          <p>{customer.name}</p>
        </div>
        <div>
          <h1 className="font-medium">Phone:</h1>
          <p>{customer.phone}</p>
        </div>
        <div>
          <h1 className="font-medium">Status:</h1>
          <p>{customer.paid ? "Transfer Success" : "Transfer Failed"}</p>
        </div>
        <div>
          <h1 className="font-medium">Amount:</h1>
          <p className="text-red-600">
            Rp.{customer.amount.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
      <div className="px-5 mt-5 flex flex-col gap-5">
        <button className="border border-red-600 rounded-lg w-full flex justify-center items-center gap-5 h-10 cursor-pointer">
          <img src="../src/assets/icon/delete.svg" alt="" />
          <p className="text-red-600 font-medium">Delete</p>
        </button>
        <button
          className="bg-blue-600 rounded-lg w-full flex justify-center items-center gap-5 h-10 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <p className="text-white font-medium">Back</p>
        </button>
      </div>
    </>
  );
}

export default ModalHistory;
