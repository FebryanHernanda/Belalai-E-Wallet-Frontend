import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../store/userSlice";
import { getHistory } from "../../store/transferSlice";
import { API_URL } from "../../utils";

import axios from "axios";
import getPaymentMethods from "../../utils/getPaymentMethods";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const dispatch = useDispatch();

  const { balance } = useSelector((state) => state.user);
  const historyData = useSelector((state) => state.transfer.historyData);
  const authState = useSelector((state) => state.auth);

  const { transactions } = historyData || {};

  const [filter, setFilter] = useState("All");
  const [range, setRange] = useState("seven_days");
  const [chart, setChart] = useState({});

  // set option range chart to state (on change)
  const handleDropDownRange = (event) => {
    const newValue = event.target.value;
    setRange(newValue);
  };

  // set option filter chart to state (on change)
  const handleDropDownFilter = (event) => {
    const newValue = event.target.value;
    setFilter(newValue);
  };

  useEffect(() => {
    dispatch(getBalance());
    dispatch(getHistory());
  }, [dispatch]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(`${API_URL}/chart/${range}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authState.token}`,
          },
        });

        const {
          data: { data: resultChart },
        } = response;

        setChart(resultChart);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [range, filter]);

  // option chart JS
  const allDatasets = [
    {
      label: "Expense",
      data: chart.expense_data,
      backgroundColor: "#ff3d3d",
      borderRadius: 8,
    },
    {
      label: "Income",
      data: chart.income_data,
      backgroundColor: "#3868fd",
      borderRadius: 8,
    },
  ];

  const filteredDatasets =
    filter === "All"
      ? allDatasets
      : allDatasets.filter((d) => d.label === filter);

  const allDataValues = allDatasets.flatMap((dataset) => dataset.data);
  let maxDataValue = Math.max(0, ...allDataValues);
  const stepSize = 50000;
  const maxScale = Math.ceil((maxDataValue * 1.1) / stepSize) * stepSize;

  const data = {
    labels: chart.labels,
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
        max: maxScale,
        ticks: {
          stepSize: stepSize,
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
  // option chart js

  const income = transactions?.reduce((total, data) => {
    if (data.transaction_type === "Transfer") {
      return total + data.original_amount;
    }
    return total;
  }, 0);

  const expense = transactions?.reduce((total, data) => {
    if (data.transaction_type === "Send") {
      return total + data.original_amount;
    }
    return total;
  }, 0);

  return (
    <section>
      <div className="bagian-top lg:pt-8 px-6 flex flex-col md:flex-row gap-8">
        {/* Card kiri */}
        <div className="border border-gray-300 rounded-lg w-full md:w-[30%]  flex-col gap-3 p-6 hidden md:flex">
          <div className="flex gap-2.5">
            <img src="/balance.svg" alt="" />
            <span>Balance</span>
          </div>
          <div>Rp {balance?.toLocaleString("id-ID")}</div>
          <div className="flex flex-wrap gap-7 gap-y-4">
            <div>
              <p>Income</p>
              <div className="flex gap-2">
                <span className="text-green-600">
                  Rp {income?.toLocaleString("id-ID")}
                </span>
                <span className="text-green-600">+2%</span>
                <img src="/Arrow-up.svg" alt="" />
              </div>
            </div>
            <div>
              <p>Expense</p>
              <div className="flex gap-2">
                <span className="text-red-600">
                  Rp {expense?.toLocaleString("id-ID")}
                </span>
                <span className="text-red-600">+2%</span>
                <img src="/Arror-down.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Fast Service (desktop only) */}
        <div className="border border-gray-300 rounded-lg w-full md:w-[70%] justify-between items-center p-4  gap-3 hidden md:flex">
          <div className="font-semibold text-[16px]">Fast Service</div>
          <div className="flex gap-4">
            <Link
              type="button"
              className="bg-[#2948FF] flex h-[45px] p-2.5 items-center justify-center gap-2.5 rounded-[6px] cursor-pointer"
              to="/top-up"
            >
              <img src="/Logo-Topup.svg" alt="" />
              <span className="text-white">Top Up</span>
            </Link>
            <Link
              type="button"
              className="bg-[#2948FF] flex h-[45px] p-2.5 items-center justify-center gap-2.5 rounded-[6px] cursor-pointer"
              to="/transfer"
            >
              <img src="/Send.svg" alt="" />
              <span className="text-white">Transfer</span>
            </Link>
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
                <div>Top Up</div>
              </div>
              <div className="flex flex-col items-center gap-2.5">
                <button
                  type="button"
                  className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center shadow-md cursor-pointer"
                >
                  <img src="/Send.svg" alt="transfer" />
                </button>
                <div>Transfer</div>
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
        <div className="lg:col-span-7 chart p-4 rounded-2xl border border-gray-300 rounded-lg w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Financial Chart
            </h2>

            <div className="flex gap-2">
              {/* Range Dropdown */}
              <div className="relative inline-block w-48">
                <select
                  value={range}
                  onChange={handleDropDownRange}
                  className="appearance-none w-full bg-white border border-gray-300 hover:border-blue-400 focus:border-blue-500 text-gray-700 py-2 pl-4 pr-10 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="seven_days">7 Days</option>
                  <option value="five_weeks">5 Weeks</option>
                  <option value="twelve_months">12 Months</option>
                </select>

                {/* Dropdown arrow icon */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Filter Dropdown */}
              <div className="relative inline-block">
                <select
                  value={filter}
                  onChange={handleDropDownFilter}
                  className="appearance-none w-full bg-white border border-gray-300 hover:border-blue-400 focus:border-blue-500 text-gray-700 py-2 pl-4 pr-10 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="All">All</option>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>
            </div>
          </div>
          <Bar data={data} options={options} />
        </div>
        {/* Transaction History */}
        <div className="lg:col-span-3 transaction-history flex flex-col">
          <div className="flex flex-row justify-between items-center border border-gray-300 rounded-lg rounded-t-lg p-4">
            <div className="font-semibold">Transaction History</div>
            <Link type="button" className="cursor-pointer" to="/history">
              See All
            </Link>
          </div>

          {/* List transaksi */}

          <div className="flex flex-col gap-5 p-2 min-h-100  max-h-[400px] overflow-y-scroll border border-gray-300 rounded-lg rounded-b-lg">
            {transactions?.length > 0 ? (
              transactions?.map((data, idx) => {
                return (
                  <div
                    key={idx}
                    className="divide-y divide-gray-200 bg-white rounded-b-lg"
                  >
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        {data.transaction_type === "Topup" ? (
                          <img
                            src={getPaymentMethods(data?.contact_name)}
                            alt="Payment Picture"
                            className="max-w-12 rounded-xl"
                          />
                        ) : (
                          <img
                            src={`${API_URL}/img/${data?.profile_picture}`}
                            alt="Photo profile"
                            className="max-w-12 rounded-xl"
                          />
                        )}
                        <div className="flex flex-col gap-1">
                          <div className="font-medium">{data.contact_name}</div>
                          <div className="text-sm text-gray-500">
                            {data.transaction_type}
                          </div>
                        </div>
                      </div>
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
                );
              })
            ) : (
              <p className="text-center">
                You haven’t made any transactions yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
