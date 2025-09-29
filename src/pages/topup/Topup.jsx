import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentMethod, topUpAmount } from "../../store/topupSlice";
import getPaymentMethods from "../../utils/getPaymentMethods";
import { API_URL } from "../../utils";
import { toast } from "react-toastify";
import formatAmountField from "../../utils/formatAmount";

function Topup() {
  const dispatch = useDispatch();
  const paymentMethod = useSelector((state) => state.topup.paymentMethod);
  const { userData } = useSelector((state) => state.user);

  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    amount: 0,
    tax: 2500,
    paymentID: null,
  });

  const handleAmountChange = (e) => {
    const value = e.target.value;

    let rawValue = value.replace(/\D/g, "");
    const numericValue = parseInt(rawValue || "0", 10);

    setFormData((prev) => ({ ...prev, amount: rawValue }));
    setError("");

    if (numericValue < 0) {
      setError("Total Amount tidak boleh minus atau negatif");
    }
  };

  const handlePaymentChange = (id) => {
    setFormData((prev) => ({
      ...prev,
      paymentID: id,
    }));
  };

  const subTotal = Number(formData.amount) + formData.tax;

  useEffect(() => {
    dispatch(getPaymentMethod());
  }, [dispatch]);

  const handleSubmitValidation = (e) => {
    e.preventDefault();

    if (!Number(formData.amount)) {
      setError("Amount tidak boleh kosong");
      return;
    }

    if (!formData.paymentID) {
      setError("Silakan pilih metode pembayaran terlebih dahulu");
      return;
    }

    setError("");
    setIsModalOpen(true);
  };

  const HandleSubmitTopUp = async () => {
    const topupData = new FormData();
    topupData.append("amount", formData.amount);
    topupData.append("tax", formData.tax);
    topupData.append("payment_id", formData.paymentID);

    const payload = {
      amount: Number(formData.amount),
      tax: formData.tax,
      payment_id: formData.paymentID,
    };

    try {
      await dispatch(topUpAmount(payload)).unwrap();

      toast.success("Top Up Berhasil ! Saldo telah bertambah!", {
        position: "top-center",
        autoClose: 2000,
      });

      setIsModalOpen(false);
    } catch (error) {
      toast.error(error || "Top Up Gagal!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <div className="hidden md:flex gap-5 ml-14 mt-10">
        <img src="/icon/Upload.svg" alt="" />
        <p className="text-xl font-semibold">Top Up Account</p>
      </div>
      <div className="lg:flex gap-10">
        {/* account Information */}
        <section className=" md:flex-grow-1 mx-5 mt-8 md:border md:border-gray-300 md:p-10 md:mx-10 lg:ml-14 lg:mx-0">
          {/* title */}
          <h1 className="text-lg mb-5 lg:font-semibold">Account Information</h1>
          {/* content 1 (card user) */}
          <article className="bg-gray-200 p-4 md:p-6 flex justify-between">
            <div className="flex gap-5">
              <img
                src={`${API_URL}/img/${userData?.profile_picture}`}
                alt="Photo Profile"
                className="w-30 h-30 object-cover rounded-xl"
              />
              <div className="flex flex-col gap-1">
                <h1 className="lg:font-semibold lg:text-lg">
                  {userData.fullname}
                </h1>
                <p>{userData.phone}</p>
                <img
                  src="/icon/verified.svg"
                  alt="Verified icon"
                  className="w-30"
                />
              </div>
            </div>
          </article>
          {/* content 2 */}
          <article className="mt-5 flex flex-col gap-3">
            <h1 className="text-lg lg:font-semibold">Amount</h1>
            <p className="text-gray-500">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
            <div className="flex flex-col bg-[#ffffff] gap-1">
              <div className="flex items-center border border-t border-gray-300 bg-gray-50 rounded-[8px] py-1.5 px-2.5 w-full gap-3 h-11 lg:h-15">
                <img
                  src="/icon/money.svg"
                  alt=""
                  className="w-4 h-3.5"
                />
                <input
                  type="text"
                  placeholder="Enter Nominal Transfer"
                  className="w-full outline-none"
                  value={formatAmountField(formData.amount)}
                  onChange={handleAmountChange}
                />
              </div>
            </div>
          </article>
          {/* payment method */}
          <article className="mt-5">
            <h1 className="text-lg mb-2">Payment Method</h1>
            <p className="text-gray-500">
              Choose your payment method for top up account
            </p>
            <div className="flex flex-col gap-3 mt-5">
              {paymentMethod?.map((data, idx) => {
                return (
                  <label
                    key={idx}
                    className="flex items-center gap-3 p-4 border rounded-xl bg-white cursor-pointer has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50"
                  >
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => handlePaymentChange(data.id)}
                    />
                    <img
                      src={getPaymentMethods(data.name)}
                      alt={`${data.name}`}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-lg text-gray-500">{data.name}</span>
                  </label>
                );
              })}
            </div>
          </article>
        </section>
        {/* data Payment */}
        <section className="my-8 mx-5 md:border md:h-fit md:border-gray-300 md:p-7 lg:mr-14 md:mx-10 lg:mx-0">
          <h1 className="text-lg pb-5 md:font-semibold lg:text-2xl">Payment</h1>
          {/* card payment */}
          <div className="mx-4 flex flex-col gap-3">
            <div className="flex justify-between text-lg">
              <p className="lg:font-medium">Order</p>
              <p className="font-semibold">
                Rp {Number(formData.amount).toLocaleString("id-ID")}
              </p>
            </div>
            <div className="flex justify-between text-lg">
              <p className="lg:font-medium">Delivery</p>
              <p className="font-semibold">Rp.0</p>
            </div>
            <div className="flex justify-between text-lg">
              <p className="lg:font-medium">Tax</p>
              <p className="font-semibold">
                Rp {formData.tax.toLocaleString("id-ID")}
              </p>
            </div>
            <hr className="border-t border-gray-400 my-4" />
            <div className="flex justify-between text-lg">
              <p className="lg:font-medium">Sub Total</p>
              <p className="font-semibold">
                Rp {subTotal.toLocaleString("id-ID")}
              </p>
            </div>
            <button
              className="bg-blue-700 text-white rounded-lg h-13 mt-3 cursor-pointer"
              onClick={handleSubmitValidation}
            >
              Submit
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <p className="text-gray-500 text-lg ">
              *Get Discount if you pay with Bank Central Asia
            </p>
          </div>
        </section>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            <h2 className="text-lg text-black  mb-4">
              Apakah Anda yakin ingin melakukan Top Up saldo sebesar
              <span className="text-blue-700 font-semibold">
                {" "}
                Rp {Number(formData.amount).toLocaleString("id-ID")}
              </span>
            </h2>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 cursor-pointer rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded hover:bg-red-700"
                onClick={HandleSubmitTopUp}
              >
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Topup;
