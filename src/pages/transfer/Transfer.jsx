import React from "react";
import { useState } from "react";

const Transfer = () => {
  const [activeRow, setActiveRow] = useState(null);

  const handleClick = (rowIndex) => {
    setActiveRow(activeRow === rowIndex ? null : rowIndex);
  };
  return (
    <section className="p-6 flex flex-col gap-11">
      <div className="flex flex-col gap-6">
        <div className="flex gap-3.5">
          <img src="/Send-Transfer-Money.svg" alt="" />
          <span>Transfer Money</span>
        </div>
        <div className="Money-transfer gap-5 hidden md:flex items-center">
          <div className="flex gap-2.5">
            <span className="bg-[#2948FF] text-[#FFFFFF] w-[24px] h-[24px] flex items-center justify-center rounded-[50%]">
              1
            </span>
            <span>Find People</span>
          </div>
          <div className=" border-t border-dashed border-[#4F5665] w-[85px]"></div>
          <div className="flex gap-2.5">
            <span className="bg-[#4F5665] text-[#FFFFFF] w-[24px] h-[24px] flex items-center justify-center rounded-[50%]">
              2
            </span>
            <span>Set Nominal</span>
          </div>
          <div className=" border-t border-dashed border-[#4F5665] w-[85px]"></div>
          <div className="flex gap-2.5">
            <span className="bg-[#4F5665] text-[#FFFFFF] w-[24px] h-[24px] flex items-center justify-center rounded-[50%]">
              3
            </span>
            <span>Finish</span>
          </div>
        </div>
      </div>
      <div className="shadow p-9 flex flex-col gap-8">
        <div className="flex justify-between flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2">
            <div>Find People</div>
            <div>8 Result Found For Ghaluh</div>
          </div>
          <div className="input-search flex items-center border border-solid border-[#E8E8E8] rounded-lg overflow-hidden bg-white">
            <input
              type="text"
              id="search"
              placeholder="Enter Your Search"
              className="flex-1 p-3 outline-none border-none bg-transparent"
            />
            <button
              type="button"
              className="bg-none border-none p-[12px] cursor-pointer flex items-end justify-center order-2"
            >
              <img
                src="Search.svg"
                alt="Search"
                className="w-[20px] h-[20px]"
              />
            </button>
          </div>
        </div>
        <div className="overflow-x-scroll flex flex-col gap-5">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]">
                  Profile
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
                  Favorite
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3].map((_, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap w-20">
                    <img
                      src="/Ex-Profile.svg"
                      className="h-10 w-10 object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 min-w-[200px]">
                    Ghaluh
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 min-w-[150px]">
                    (239) 555-0108
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap w-36">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleClick(index)}
                        className={`flex items-center justify-center w-10 h-10 p-2 rounded-[5px] cursor-pointer ${
                          activeRow === index ? "bg-yellow-400" : "bg-gray-100"
                        }`}
                      >
                        <img src="/Start.svg" alt="" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination flex justify-between flex-col">
            <div>Show 1 History of 100 History</div>
            <div className="flex gap-7">
              <a href="#">Prev</a>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">Next</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transfer;
