import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  deleteHistory,
  deleteTopupHistory,
  getHistory,
} from "../../store/transferSlice";

function ModalDelete({ historyData, onClose }) {
  const dispatch = useDispatch();

  const handleDelete = async (historyData) => {
    try {
      if (historyData.transaction_type === "Topup") {
        dispatch(deleteTopupHistory(historyData.id));
      } else {
        dispatch(deleteHistory(historyData.id));
      }

      dispatch(getHistory());
      toast.success("Berhasil Menghapus histori", { autoClose: 1500 });
    } catch (error) {
      console.log(error);
      toast.error("Gagal Menghapus histori", { autoClose: 1500 });
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
                handleDelete(historyData), onClose();
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
