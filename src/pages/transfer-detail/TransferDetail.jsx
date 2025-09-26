import React, { useState } from "react";
import ModalSucces from "../modal/ModalSucces";
import ModalFailed from "../modal/ModalFailed";
import ModalEnterPin from "../modal/ModalEnterPin";

function TransferDetail() {
  const [Active, SetActive] = useState(false);
  return (
    <>
      <main>
        {/* Transfer Berhasil */}
        {/* {Active && <ModalSucces onClose={() => SetActive(false)} />} */}

        {/* transfer Gagal */}
        {/* {Active && <ModalFailed onClose={() => SetActive(false)} />} */}

        {/* Transfer Pin */}
        {Active && <ModalEnterPin onClose={() => SetActive(false)} />}

        {Active && <div className="absolute inset-0 backdrop-brightness-50" />}
        <header className="hidden md:block md:flex gap-5 my-5 ml-14">
          <img src="../src/assets/icon/send.svg" alt="" />
          <p className="font-semibold text-xl">Transfer Money</p>
        </header>
        <section className="hidden lg:block lg:flex lg:flex-col items-start ml-14">
          {/* Stepper */}
          <article
            id="card-step"
            className="flex justify-center items-center gap-4 flex-wrap"
          >
            {/* Step 1 */}
            <div className="text-center flex items-center gap-2">
              <img
                src="../src/assets/icon/one.svg"
                alt="Step 1 icon"
                className="lg:w-8"
              />
              <div className="text-md text-gray-800">Find People</div>
            </div>

            {/* Line 1 */}
            <div className="w-[50px] border border-dashed border-gray-400"></div>

            {/* Step 2 - Active */}
            <div className="text-center flex items-center gap-2">
              <img src="../src/assets/icon/two.svg" alt="" className="lg:w-8" />
              <div className="text-md text-blue-700">Set Nominal</div>
            </div>

            {/* Line 2 */}
            <div className="w-[50px] border border-dashed border-gray-400"></div>

            {/* Step 3 - Pending */}
            <div className="text-center flex items-center gap-2">
              <img
                src="../src/assets/icon/three.svg"
                alt=""
                className="lg:w-8"
              />
              <div className="text-md text-gray-800">Payment</div>
            </div>
          </article>
        </section>
        <section className="mx-5 mt-8 md:border md:border-gray-300 md:p-10 md:mx-14">
          {/* title */}
          <h1 className="text-lg mb-5 lg:font-semibold">People Information</h1>
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
            <img src="../src/assets/icon/Star.svg" alt="" className="lg:w-8" />
          </article>
          {/* content 2 */}
          <article className="mt-5 flex flex-col gap-3">
            <h1 className="text-lg lg:font-semibold">Amount</h1>
            <p className="text-gray-500">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
            <div className="flex flex-col bg-[#ffffff] gap-1">
              <div className="input-email flex items-center border border-t border-gray-300 bg-gray-50 rounded-[8px] py-1.5 px-2.5 w-full gap-3 h-11 lg:h-15">
                <img
                  src="../src/assets/icon/money.svg"
                  alt=""
                  className="w-4 h-3.5"
                />
                <input
                  type="text"
                  id="email"
                  placeholder="Enter Nominal Transfer"
                  className="w-full outline-none"
                />
              </div>
            </div>
          </article>
          <article className="mt-5 flex flex-col gap-4">
            <h1 className="text-lg lg:font-semibold">Notes</h1>
            <p className="text-gray-500">
              You can add some notes for this transfer such as payment coffee or
              something
            </p>
            <textarea
              name="userComment"
              rows="10"
              cols="70"
              className="border border-gray-400 rounded-md w-full p-2"
              placeholder="Enter Some Notes"
            ></textarea>
          </article>
          <button
            className="bg-blue-700 text-white rounded-lg w-full mt-10 min-h-14 cursor-pointer"
            onClick={() => SetActive((prev) => !prev)}
          >
            Submit & Transfer
          </button>
        </section>
      </main>
    </>
  );
}

export default TransferDetail;
