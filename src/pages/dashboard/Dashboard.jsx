import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [filter, setFilter] = useState("All");
  const [range, setRange] = useState("7 Days");
  const [openFilter, setOpenFilter] = useState(false);
  const [openRange, setOpenRange] = useState(false);

  const allDatasets = [
    {
      label: "Expense",
      data: [20000, 55000, 70000, 35000, 5000, 50000, 50000],
      backgroundColor: "#ff3d3d",
      borderRadius: 8,
    },
    {
      label: "Income",
      data: [80000, 78000, 85000, 30000, 25000, 75000, 5000],
      backgroundColor: "#3868fd",
      borderRadius: 8,
    },
  ];

  const filteredDatasets =
    filter === "All"
      ? allDatasets
      : allDatasets.filter((d) => d.label === filter);

  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: filteredDatasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100000,
        ticks: {
          stepSize: 25000,
          callback: (value) => `Rp${value.toLocaleString()}`,
        },
        grid: {
          color: "#e5e7eb",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <section>
      <div className="bagian-top lg:pt-8 px-6 flex flex-col md:flex-row gap-8">
        {/* Card kiri */}
        <div className="shadow-md w-full md:w-[30%]  flex-col gap-3 p-6 hidden md:flex">
          <div className="flex gap-2.5">
            <img src="/balance.svg" alt="" />
            <span>Balance</span>
          </div>
          <div>Rp.120.000</div>
          <div className="flex flex-wrap gap-7 gap-y-4">
            <div>
              <p>Income</p>
              <div className="flex gap-2">
                <span className="text-green-600">Rp.200.000</span>
                <span className="text-green-600">+2%</span>
                <img src="/Arrow-up.svg" alt="" />
              </div>
            </div>
            <div>
              <p>Expense</p>
              <div className="flex gap-2">
                <span className="text-red-600">Rp.200.000</span>
                <span className="text-red-600">+2%</span>
                <img src="/Arror-down.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Fast Service (desktop only) */}
        <div className="shadow-md w-full md:w-[70%] justify-between items-center p-4  gap-3 hidden md:flex">
          <div className="font-semibold text-[16px]">Fast Service</div>
          <div className="flex gap-4">
            <button
              type="button"
              className="bg-[#2948FF] flex h-[45px] p-2.5 items-center justify-center gap-2.5 rounded-[6px] cursor-pointer"
            >
              <img src="/Logo-Topup.svg" alt="" />
              <span className="text-white">Top Up</span>
            </button>
            <button
              type="button"
              className="bg-[#2948FF] flex h-[45px] p-2.5 items-center justify-center gap-2.5 rounded-[6px] cursor-pointer"
            >
              <img src="/Send.svg" alt="" />
              <span className="text-white">Transfer</span>
            </button>
          </div>
        </div>
      </div>

      {/* Balance Mobile */}
      <div className="bg-blue-600 w-full h-[208px] rounded-none p-5 relative overflow-hidden block md:hidden">
        <div className="relative bg-white rounded-2xl h-[158px] p-5 overflow-hidden">
          <div className="flex justify-between items-center relative z-10">
            <div className="flex flex-col gap-2">
              <div className="text-sm text-gray-600">Balance</div>
              <div className="text-xl font-semibold">Rp. 500.000</div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-2.5">
                <button
                  type="button"
                  className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center shadow-md cursor-pointer"
                >
                  <img src="/Plus-TopUp.svg" alt="topup" />
                </button>
                <div>TOP</div>
              </div>
              <div className="flex flex-col items-center gap-2.5">
                <button
                  type="button"
                  className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center shadow-md cursor-pointer"
                >
                  <img src="/Send.svg" alt="transfer" />
                </button>
                <div>TOP</div>
              </div>
            </div>
          </div>
          {/* Wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg
              className="relative block w-full h-[100px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#2948FF1A"
                d="M0,192L48,186.7C96,181,192,171,288,149.3C384,128,480,96,576,112C672,128,768,192,864,224C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 py-8 px-6 w-full">
        {/* Chart Section */}
        <div className="lg:col-span-7 chart p-4 rounded-2xl shadow-md w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Financial Chart
            </h2>

            <div className="flex gap-2">
              {/* Range Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpenRange(!openRange)}
                  className="border rounded-lg px-3 py-1 text-sm bg-white hover:bg-gray-100"
                >
                  {range}
                </button>
                {openRange && (
                  <div className="absolute right-0 mt-1 w-28 bg-white border rounded-lg shadow-lg z-10">
                    {["7 Days", "30 Days"].map((r) => (
                      <div
                        key={r}
                        onClick={() => {
                          setRange(r);
                          setOpenRange(false);
                        }}
                        className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                          range === r ? "bg-gray-200 font-medium" : ""
                        }`}
                      >
                        {r}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpenFilter(!openFilter)}
                  className="border rounded-lg px-3 py-1 text-sm bg-white hover:bg-gray-100"
                >
                  {filter}
                </button>
                {openFilter && (
                  <div className="absolute right-0 mt-1 w-28 bg-white border rounded-lg shadow-lg z-10">
                    {["All", "Income", "Expense"].map((f) => (
                      <div
                        key={f}
                        onClick={() => {
                          setFilter(f);
                          setOpenFilter(false);
                        }}
                        className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                          filter === f ? "bg-gray-200 font-medium" : ""
                        }`}
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <Bar data={data} options={options} />
        </div>
        {/* Transaction History */}
        <div className="lg:col-span-3 transaction-history flex flex-col">
          <div className="flex flex-row justify-between items-center shadow rounded-t-lg p-4">
            <div className=" font-semibold">Transaction History</div>
            <button type="button" className="cursor-pointer">
              See All
            </button>
          </div>

          {/* List transaksi */}
          <div className="divide-y divide-gray-200 bg-white rounded-b-lg shadow">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <img src="/1.svg" alt="" className="w-10 h-10 " />
                <div className="flex flex-col gap-1">
                  <div className="font-medium">Floyd Miles</div>
                  <div className="text-sm text-gray-500">Transfer</div>
                </div>
              </div>
              <div className="text-green-500 font-medium">+Rp50.000</div>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <img src="/1.svg" alt="" className="w-10 h-10" />
                <div className="flex flex-col gap-1">
                  <div className="font-medium">Floyd Miles</div>
                  <div className="text-sm text-gray-500">Send</div>
                </div>
              </div>
              <div className="text-red-500 font-medium">-Rp50.000</div>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <img src="/1.svg" alt="" className="w-10 h-10 " />
                <div className="flex flex-col gap-1">
                  <div className="font-medium">Floyd Miles</div>
                  <div className="text-sm text-gray-500">Send</div>
                </div>
              </div>
              <div className="text-red-500 font-medium">-Rp50.000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
