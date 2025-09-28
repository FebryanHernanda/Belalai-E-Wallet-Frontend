import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../utils";
import { toast } from "react-toastify";
import { getHistory } from "../../store/transferSlice";

function ModalDelete({ transactionID, onClose }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleDelete = async (transactionID) => {
    try {
      const res = await fetch(`${API_URL}/transaction/${transactionID}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        dispatch(getHistory());
        toast.success("Berhasil Menghapus histori");
      } else {
        console.error("Delete failed:", data?.message);
        toast.error("Gagal Menghapus histori");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl lg:w-[400px] w-[350px]">
          <h2 className="text-lg text-black  mb-4">
            Apakah Anda yakin ingin Menghapus history?
          </h2>
          <div className="flex justify-end gap-4">
            <button
              className="px-4 py-2 bg-gray-300 cursor-pointer rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Batal
            </button>
            <button
              className="px-4 py-2 bg-red-600 cursor-pointer text-white rounded hover:bg-red-700"
              onClick={() => {
                handleDelete(transactionID), onClose();
              }}
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDelete;
