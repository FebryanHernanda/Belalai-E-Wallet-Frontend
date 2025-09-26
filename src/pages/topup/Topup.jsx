import React from "react";

function Topup() {
  return (
    <>
  <div className="hidden md:flex gap-5 ml-14 mt-10">
    <img src="../src/assets/icon/Upload.svg" alt="" />
    <p className="text-xl font-semibold">Top Up Account</p>
  </div>
      <div className="lg:flex gap-10">
        {/* account Information */}
        <section className=" md:flex-grow-1 mx-5 mt-8 md:border md:border-gray-300 md:p-10 md:mx-10 lg:ml-14 lg:mx-0">
          {/* title */}
          <h1 className="text-lg mb-5 lg:font-semibold">Acount Information</h1>
          {/* content 1 (card user) */}
          <article className="bg-gray-200 p-4 md:p-6 flex justify-between">
            <div className="flex gap-5">
              <img src="../src/assets/icon/galuh.svg" alt="" />
              <div className="flex flex-col gap-1">
                <h1 className="lg:font-semibold lg:text-lg">Ghaluh 1</h1>
                <p>(239) 555-0108</p>
                <img src="../src/assets/icon/verified.svg" alt="" />
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
                  src="../src/assets/icon/money.svg"
                  alt=""
                  className="w-4 h-3.5"
                />
                <input
                  type="number"
                  placeholder="Enter Nominal Transfer"
                  className="w-full outline-none"
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
              {/* BRI */}
              <label className="flex items-center gap-3 p-4 border rounded-xl bg-white cursor-pointer has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                <input type="radio" name="payment" />
                <img
                  src="../src/assets/icon/bri.svg"
                  alt="BRI"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg text-gray-500">
                  Bank Rakyat Indonesia
                </span>
              </label>

              {/* Dana */}
              <label className="flex items-center gap-3 p-4 border rounded-xl bg-white cursor-pointer has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                <input type="radio" name="payment" />
                <img
                  src="../src/assets/icon/dana.svg"
                  alt="Dana"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg text-gray-500">Dana</span>
              </label>

              {/* BCA */}
              <label className="flex items-center gap-3 p-4 border rounded-xl bg-white cursor-pointer has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                <input type="radio" name="payment" />
                <img
                  src="../src/assets/icon/bca.svg"
                  alt="BCA"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg text-gray-500">Bank Central Asia</span>
              </label>

              {/* Gopay */}
              <label className="flex items-center gap-3 p-4 border rounded-xl bg-white cursor-pointer has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                <input type="radio" name="payment" />
                <img
                  src="../src/assets/icon/gopay.svg"
                  alt="Gopay"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg text-gray-500">Gopay</span>
              </label>

              {/* OVO */}
              <label className="flex items-center gap-3 p-4 border rounded-xl bg-white cursor-pointer has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                <input type="radio" name="payment" />
                <img
                  src="../src/assets/icon/ovo.svg"
                  alt="Ovo"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg text-gray-500">Ovo</span>
              </label>
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
              <p className="font-semibold">Rp.40.000</p>
            </div>
            <div className="flex justify-between text-lg">
              <p className="lg:font-medium">Delivery</p>
              <p className="font-semibold">Rp.0</p>
            </div>
            <div className="flex justify-between text-lg">
              <p className="lg:font-medium">Tax</p>
              <p className="font-semibold">Rp.4000</p>
            </div>
            <hr className="border-t border-gray-400 my-4" />
            <div className="flex justify-between text-lg">
              <p className="lg:font-medium">Sub Total</p>
              <p className="font-semibold">Rp.44.000</p>
            </div>
            <button className="bg-blue-700 text-white rounded-lg h-13 mt-3 cursor-pointer">
              Submit
            </button>
            <p className="text-gray-500 text-lg ">
              *Get Discount if you pay with Bank Central Asia
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Topup;
