import React, { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import ModalHistory from "./ModalHistory";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../../store/transferSlice";
import { API_URL } from "../../utils";
import ModalDelete from "../modal/ModalDelete";

function History() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [Active, SetActive] = useState(false);

  const historyData = useSelector((state) => state.transfer.historyData);

  const { page, total_pages, transactions } = historyData || {};

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleClick = (customer) => {
    if (isMobile) {
      setSelectedCustomer(customer);
      setIsOpen(true);
    }
  };

  return (
    <>
      <main>
        <div className="hidden  md:flex gap-5 ml-10 mt-10 cursor-pointer">
          <img src="../src/assets/icon/history.svg" alt="" />
          <p className="font-bold text-md">History Transaction</p>
        </div>
        <div className="md:border md:border-gray-300 md:mx-10 md:mt-10">
          {/* search */}
          <section className="mx-5 md:mx-10 mt-5 md:flex md:justify-between">
            <p className="text-md md:text-xl font-semibold">Find Transaction</p>
            <div
              id="search"
              className="flex pt-2 pb-10 gap-3.5 max-md:pb-5 max-md:flex max-md:flex-col"
            >
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Enter Number Or Full Name"
                  className="border border-gray-400 rounded-md w-full h-12 px-3 md:w-100 pr-10"
                />
                <img
                  src="../src/assets/icon/Search.svg"
                  alt="Search Icon"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                />
              </div>
            </div>
          </section>
          {/* History user */}
          <section className="mx-5 md:mx-10 mt-5 space-y-4">
            {transactions?.length > 0 ? (
              transactions?.map((data, index) => (
                <div
                  key={index}
                  className={`flex items-center p-4 rounded cursor-pointer lg:cursor-default ${
                    data.id % 2 == 0 ? "bg-gray-100" : "bg-white"
                  }`}
                  onClick={() => handleClick(data)}
                >
                  {/* foto */}
                  <img
                    src={`${API_URL}/img/${data?.profile_picture}`}
                    alt="Photo profile"
                    className="max-w-12"
                  />
                  {/* Konten */}
                  <div className="lg:flex-1 lg:grid lg:grid-cols-3 lg:gap-10 md:flex md:gap-20 px-4 ">
                    <p className="font-medium md:font-normal md:pl-10 lg:text-xl">
                      {data.contact_name}
                    </p>
                    <p className="text-sm text-gray-600 lg:text-xl">
                      {data.phone_number}
                    </p>
                    <div>
                      {data.transaction_type === "Transfer" ? (
                        <p className="text-green-500">
                          +Rp{data.original_amount.toLocaleString("id-ID")}
                        </p>
                      ) : (
                        <p className="text-red-500">
                          -Rp{data.original_amount.toLocaleString("id-ID")}
                        </p>
                      )}
                    </div>
                  </div>
                  <img
                    src="../src/assets/icon/delete.svg"
                    alt=""
                    className="hidden md:block md:w-6 cursor-pointer "
                    onClick={() => SetActive((prev) => !prev)}
                  />
                  {Active && (
                    <ModalDelete
                      transactionID={data.id}
                      onClose={() => SetActive(false)}
                    />
                  )}
                </div>
              ))
            ) : (
              <p className="text-center font-semibold">
                You haven’t made any transactions yet.
              </p>
            )}
          </section>
          <div className="hidden lg:mx-10 my-10 lg:flex justify-between">
            <div>
              <p>{`Show ${page} History of ${total_pages} History`}</p>
            </div>
            <div>
              <div id="button_options" className="flex justify-center gap-5">
                {["Prev", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Next"].map((pg) => (
                  <button key={pg} className={`cursor-pointer`}>
                    {pg}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {isMobile && (
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ModalHistory customer={selectedCustomer} setIsOpen={setIsOpen} />
          </Modal>
        )}
      </main>
    </>
  );
}

export default History;
