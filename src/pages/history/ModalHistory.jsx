import React, { useState } from "react";
import { API_URL } from "../../utils";
import ModalDelete from "../modal/ModalDelete";
import { toast } from "react-toastify";
import {
  deleteHistory,
  deleteTopupHistory,
  getHistory,
} from "../../store/transferSlice";
import { useDispatch } from "react-redux";
import getPaymentMethods from "../../utils/getPaymentMethods";

function ModalHistory(props) {
  const dispatch = useDispatch();
  const { setIsOpen, customer } = props;
  const [Active, SetActive] = useState(false);

  const handleDelete = async (historyData) => {
    try {
      if (historyData.transaction_type === "Topup") {
        await dispatch(deleteTopupHistory(historyData.id));
      } else {
        await dispatch(deleteHistory(historyData.id));
      }

      await dispatch(getHistory());
      toast.success("Berhasil Menghapus histori", { autoClose: 1500 });
      setIsOpen((prev) => !prev);
    } catch (error) {
      console.log(error);
      toast.error("Gagal Menghapus histori", { autoClose: 1500 });
    }
  };

  return (
    <>
      {Active && <ModalDelete onClose={() => SetActive(false)} />}
      <header className="px-5">
        <h1 className="text-gray-500">DETAIL TRANSACTION</h1>
        <hr className="border-t border-gray-500" />
        <div className="py-5">
          {customer.transaction_type === "Topup" ? (
            <img
              src={getPaymentMethods(customer?.contact_name)}
              alt="Payment Picture"
              className="w-15 h-15  rounded-xl"
            />
          ) : (
            <img
              src={`${API_URL}/img/${customer?.profile_picture}`}
              alt="Photo profile"
              className="w-15 h-15 object-cover rounded-xl"
            />
          )}
        </div>
      </header>
      {/* pembungkus data user */}
      <div className="px-5 flex flex-col gap-2">
        <div>
          <h1 className="font-medium">Name:</h1>
          <p>{customer.contact_name}</p>
        </div>
        <div>
          {customer.phone_number && (
            <>
              <h1 className="font-medium">Phone:</h1>
              <p>{customer.phone_number} </p>
            </>
          )}
        </div>
        <div>
          <h1 className="font-medium">Status:</h1>
          <p>{customer.status ? "Transfer Success" : "Transfer Failed"}</p>
        </div>
        <div>
          <h1 className="font-medium">Amount:</h1>
          <p
            className={`font-semibold lg:text-lg ${
              customer.transaction_type === "Transfer"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            Rp.{customer.original_amount.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
      <div className="px-5 mt-5 flex flex-col gap-5">
        <button
          className="border border-red-600 rounded-lg w-full flex justify-center items-center gap-5 h-10 cursor-pointer"
          onClick={() => handleDelete(customer)}
        >
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
