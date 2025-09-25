import React from "react";

function LandingPage() {
  return (
    <>
      <main>
        <header className=" bg-blue-700 px-5 lg:px-60 pt-15 flex flex-col gap-7">
          <h1 className="text-white text-4xl lg:text-center lg:text-[78px] ">
            Experience the Future of Digital Payments with e-wallet
          </h1>
          <p className="text-white text-lg">
            Simplify Your Life with Secure and Convenient Mobile Payments
          </p>
          <div className="flex gap-5 justify-center">
            <button className="flex gap-5 bg-white w-full p-5 rounded-xl cursor-pointer">
              <img src="../src/assets/icon/gplay.svg" alt="" />
              <p className="text-blue-500">Play store</p>
            </button>
            <button className="flex gap-5 border border-white p-5 w-full rounded-xl cursor-pointer ">
              <img src="../src/assets/icon/appstore.svg" alt="" />
              <p className="text-white">Apps Store</p>
            </button>
          </div>
          <section>
            <div className="flex gap-5 mt-3">
              <p className="text-white text-4xl">4.6 M</p>
              <img src="../src/assets/icon/user.svg" alt="" />
            </div>
            <p className="text-white text-lg mt-3">
              Around the world, we already have over 4.6 happy user
            </p>
            <div className="flex mx-8 relative">
              <img src="../src/assets/icon/Mobile - Dashboard V2.svg" alt="" />
              <img
                src="../src/assets/icon/Mobile - Dashboard V1.svg"
                alt=""
                className="absolute bottom-0 right-2"
              />
            </div>
          </section>
        </header>
        {/* Content 1 */}
        <article className="my-15 px-5 flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col lg: gap-2">
            <img
              src="../src/assets/icon/headset.svg"
              alt=""
              className="mx-auto block"
            />
            <h1 className="font-bold text-center text-lg">24/7 Support</h1>
            <p className="text-center">
              We have 24/7 contact support so you can contact us whenever you
              want and we will respond it.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <img
              src="../src/assets/icon/check.svg"
              alt=""
              className="mx-auto block"
            />
            <h1 className="font-bold text-center text-lg">Data Privacy</h1>
            <p className="text-center">
              We make sure your data is safe in our database and we will encrypt
              any data you submitted to us.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <img
              src="../src/assets/icon/download.svg"
              alt=""
              className="mx-auto block"
            />
            <h1 className="font-bold text-center text-lg">Easy Download</h1>
            <p className="text-center">
              Zwallet is 100% totally free to use it’s now available on Google
              Play Store and App Store.
            </p>
          </div>
        </article>
        {/* Content 2 */}
        <section className="mt-25">
          <div className="flex justify-center items-center relative">
            <img
              src="../src/assets/icon/Mobile - Dashboard V2.svg"
              alt=""
              className="max-w-50 absolute -bottom-4.5"
            />
            <img src="../src/assets/icon/canvas.svg" alt="" className="p" />
          </div>
          <div className="text-center px-5 mt-10 flex flex-col gap-5">
            <h2 className="text-blue-700 text-xl font-bold">
              WELCOME TO E-WALLET
            </h2>
            <h1 className="font-medium text-3xl">
              Your All-in-One Digital Payment Solution
            </h1>
            <p className="text-gray-500">
              Say goodbye to cash and hello to the future of payments! With
              e-wallet, you have the power of secure, fast, and convenient
              digital transactions right at your fingertips. Whether you're
              shopping, dining out, or sending money to loved ones, we've got
              you covered.
            </p>
            <button className="bg-blue-500 text-white rounded-sm min-h-12 cursor-pointer">
              Get Started
            </button>
          </div>
        </section>
        {/* content 3 */}
        <section>
          <div className="bg-gray-200 pb-30">
            <div className="flex justify-center mt-15">
              <img src="../src/assets/icon/notebook.svg" alt="notebook" />
            </div>
            <section className="flex flex-col gap-3 px-5">
              <h1 className="font-normal text-4xl">
                All The Great Zwallet Features.
              </h1>
              <p className="text-gray-500 text-lg">
                We have some great features from the application and it’s
                totally free to use by all users around the world.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 text-green-500 font-bold">
                  <img src="../src/assets/icon/checkgreen.svg" alt="" />
                  <p>Small Fee</p>
                </div>
                <div className="flex gap-3 text-green-500 font-bold">
                  <img src="../src/assets/icon/checkgreen.svg" alt="" />
                  <p>Data Secured</p>
                </div>
                <div className="flex gap-3 text-green-500 font-bold">
                  <img src="../src/assets/icon/checkgreen.svg" alt="" />
                  <p>User Friendly</p>
                </div>
                <button className="w-full bg-blue-700 text-white min-h-15 rounded-lg mt-5">
                  Get Started
                </button>
              </div>
            </section>
          </div>
        </section>
        {/* content 4 */}
        <section className="px-5 mt-20 flex flex-col gap-5">
          <h1 className="font-medium text-4xl text-center">
            100+ Trusted <br />
            Partners
          </h1>
          <p className="text-center text-gray-500">
            We have reached global level and have 100+ brand partners around the
            globe.
          </p>
          <div className="flex flex-col justify-center items-center mb-15">
            <img src="../src/assets/icon/microsoft.svg" alt="" />
            <img src="../src/assets/icon/dropbox.svg" alt="" />
            <img src="../src/assets/icon/h&m.svg" alt="" />
            <img src="../src/assets/icon/airbnb.svg" alt="" />
            <img src="../src/assets/icon/canon.svg" alt="" />
            <img src="../src/assets/icon/dell.svg" alt="" />
          </div>
        </section>
        {/* content 5 */}
        <section className="mb-15">
          <article className="px-5 flex flex-col gap-5">
            <h1 className="font-medium text-3xl text-center">
              What Our Users Are Saying
            </h1>
            <p className="text-center text-gray-500">
              Ready to experience the future of payments? Download e-wallet now
              and enjoy a world of convenience at your fingertips.
            </p>
          </article>
          <article className="mt-10 px-5">
            <div className="bg-blue-700 rounded-lg px-5 py-10 flex flex-col gap-3">
              <img
                src="../src/assets/icon/profilejames.svg"
                alt=""
                className="mx-auto block"
              />
              <p className="text-white text-center font-medium text-lg">
                James Bond
              </p>
              {/* star */}
              <div className="flex gap-3 justify-center">
                <img src="../src/assets/icon/bintang.svg" alt="" />
                <img src="../src/assets/icon/bintang.svg" alt="" />
                <img src="../src/assets/icon/bintang.svg" alt="" />
                <img src="../src/assets/icon/bintang.svg" alt="" />
                <img src="../src/assets/icon/bintang.svg" alt="" />
                <p className="text-white text-lg">5.0</p>
              </div>
              <img
                src="../src/assets/icon/petik.svg"
                alt=""
                className="mx-auto block"
              />
              <p className="text-white text-center">
                I've been using the e-wallet for over two years now, and I'm
                very satisfied with the ease of use. This has completely changed
                the way I shop and conduct financial transactions.
              </p>
            </div>
          </article>
          <div class="flex items-center justify-center gap-3 mt-8">
            <button class="w-4 h-2 rounded-full bg-blue-600 transition-all"></button>
            <button class="w-2 h-2 rounded-full bg-gray-300 transition-all"></button>
            <button class="w-2 h-2 rounded-full bg-gray-300 transition-all"></button>
            <button class="w-2 h-2 rounded-full bg-gray-300 transition-all"></button>
          </div>
        </section>
        {/* content 6 */}
        <section className="bg-gray-200 px-5 py-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl">
              Download The <br />
              App
            </h1>
            <p className="text-gray-500">
              Ready to experience the future of payments? Download e-wallet now
              and enjoy a world of convenience at your fingertips.
            </p>
            <div className="flex gap-5 justify-center">
              <button className="flex gap-5 bg-blue-700 w-full p-5 rounded-xl cursor-pointer">
                <img src="../src/assets/icon/gplay.svg" alt="" />
                <p className="text-white">Play store</p>
              </button>
              <button className="flex gap-5 border border-blue-700 p-5 w-full rounded-xl cursor-pointer ">
                <img src="../src/assets/icon/appstoreblue.svg" alt="" />
                <p className="text-blue-700">Apps Store</p>
              </button>
            </div>

            <div className="relative mx-auto ">
              <img
                src="../src/assets/icon/Mobile - Dashboard V2.svg"
                alt=""
                className=" w-full"
              />
              <img
                src="../src/assets/icon/Mobile - Dashboard V1.svg"
                alt=""
                className="absolute bottom-0 -right-15 h-auto"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
