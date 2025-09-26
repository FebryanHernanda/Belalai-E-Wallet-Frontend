import React from "react";

function History() {
  return (
    <>
      <main>
        <div className="hidden md:block md:flex gap-5 ml-10 mt-10 cursor-pointer">
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
            {/* Data pelanggan */}
            {[
              {
                name: "Ghaluh 1",
                phone: "(239) 555-0108",
                amount: 50000,
                paid: true,
              },
              {
                name: "Ghaluh 2",
                phone: "(239) 555-0123",
                amount: 75000,
                paid: false,
              },
              {
                name: "Ghaluh 3",
                phone: "(239) 555-0456",
                amount: 100000,
                paid: true,
              },
              {
                name: "Ghaluh 4",
                phone: "(239) 555-0789",
                amount: 25000,
                paid: false,
              },
              {
                name: "Ghaluh 5",
                phone: "(239) 555-0789",
                amount: 25000,
                paid: true,
              },
            ].map((customer, index) => (
              <div
                key={index}
                className={`flex items-center p-4 rounded ${
                  customer.paid ? "bg-gray-100" : "bg-white"
                }`}
              >
                {/* foto */}
                <img
                  src="../src/assets/icon/galuh.svg"
                  alt=""
                  className="max-w-12"
                />
                {/* Konten */}
                <div className="lg:flex-1 lg:grid lg:grid-cols-3 lg:gap-10 md:flex md:gap-20 px-4 cursor-pointer">
                  <p className="font-medium md:font-normal md:pl-10 lg:text-xl">
                    {customer.name}
                  </p>
                  <p className="text-sm text-gray-600 lg:text-xl">
                    {customer.phone}
                  </p>
                  <div>
                    <p
                      className={`font-semibold lg:text-lg ${
                        customer.paid ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      Rp.{customer.amount.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
                <img
                  src="../src/assets/icon/delete.svg"
                  alt=""
                  className="hidden md:block md:w-6 cursor-pointer"
                />
              </div>
            ))}
          </section>
          <div className="hidden lg:block lg:mx-10 my-10 lg:flex justify-between">
            <div>
              <p>Show 5 History of 100 History</p>
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
      </main>
    </>
  );
}

export default History;
