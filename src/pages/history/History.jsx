import React, { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import ModalHistory from "./ModalHistory";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../../store/transferSlice";
import { API_URL } from "../../utils";
import ModalDelete from "../modal/ModalDelete";
import getPaymentMethods from "../../utils/getPaymentMethods";
import { useSearchParams } from "react-router-dom";

function History() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [Active, SetActive] = useState(false);

  const historyData = useSelector((state) => state.transfer.historyData);

  const { transactions } = historyData || {};

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

  const handleDelete = (customer) => {
    setSelectedCustomer(customer);
    SetActive((prev) => !prev);
  };

  // Ambil nilai langsung dari URL
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "5", 10);

  // Helper untuk update URL
  const updateParams = (newParams) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (!value || value === "1" || value === "5") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    setSearchParams(params);
  };

  // Filter
  const filteredUsers = transactions?.filter(
    (u) =>
      u.contact_name.toLowerCase().includes(search.toLowerCase()) ||
      u.phone_number.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPage = Math.ceil(filteredUsers?.length / limit);
  const start = (page - 1) * limit;
  const currentData = filteredUsers?.slice(start, start + limit);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(totalPage, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
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
              <div className="relative flex items-center w-full border border-solid border-[#E8E8E8] rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search by Name or Phone"
                  value={search}
                  onChange={(e) =>
                    updateParams({ search: e.target.value, page: 1 })
                  }
                  className="flex-1 p-3 outline-none border-none bg-transparent"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => updateParams({ search: "", page: 1 })}
                    className="p-[12px] text-gray-400 hover:text-black"
                  >
                    ✕
                  </button>
                )}

                <button type="button" className="p-[12px]">
                  <img
                    src="Search.svg"
                    alt="Search"
                    className="w-[20px] h-[20px]"
                  />
                </button>
              </div>
            </div>
          </section>
          {/* History user */}
          <section className="mx-5 md:mx-10 mt-5 space-y-4">
            {currentData?.length > 0 ? (
              currentData?.map((data, index) => (
                <div
                  key={index}
                  className={`flex items-center p-4 rounded cursor-pointer lg:cursor-default ${
                    data.id % 2 == 0 ? "bg-gray-100" : "bg-white"
                  }`}
                  onClick={() => handleClick(data)}
                >
                  {/* foto */}
                  {data.transaction_type === "Topup" ? (
                    <img
                      src={getPaymentMethods(data?.contact_name)}
                      alt="Payment Picture"
                      className="w-15 h-15  rounded-xl"
                    />
                  ) : (
                    <img
                      src={`${API_URL}/img/${data?.profile_picture}`}
                      alt="Photo profile"
                      className="w-15 h-15 object-cover rounded-xl"
                    />
                  )}

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
                      ) : data.transaction_type === "Topup" ? (
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
                    onClick={() => handleDelete(data)}
                  />
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
              <p>{`Show ${page} History of ${totalPage || "1"} Page`}</p>
            </div>
            <div className="pagination flex justify-center items-center gap-2 mt-4">
              <button
                onClick={() => updateParams({ page: Math.max(page - 1, 1) })}
                disabled={page === 1}
                className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer "
              >
                Prev
              </button>

              {getPageNumbers().map((num) => (
                <button
                  key={num}
                  onClick={() => updateParams({ page: num })}
                  className={`px-3 py-1 border rounded cursor-pointer ${
                    page === num ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {num}
                </button>
              ))}

              {getPageNumbers().slice(-1)[0] < totalPage && (
                <>
                  <span className="px-2">...</span>
                  <button
                    onClick={() => updateParams({ page: totalPage })}
                    className={`px-3 py-1 border rounded cursor-pointer  ${
                      page === totalPage ? "bg-blue-500 text-white" : ""
                    }`}
                  >
                    {totalPage}
                  </button>
                </>
              )}

              <button
                onClick={() =>
                  updateParams({ page: Math.min(page + 1, totalPage) })
                }
                disabled={page === totalPage}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        {isMobile && (
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ModalHistory customer={selectedCustomer} setIsOpen={setIsOpen} />
          </Modal>
        )}

        {Active && (
          <ModalDelete
            historyData={selectedCustomer}
            onClose={() => SetActive(false)}
          />
        )}
      </main>
    </>
  );
}

export default History;
