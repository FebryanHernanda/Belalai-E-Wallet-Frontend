import React from "react";

function LandingPage() {
  return (
    <>
      <main>
        <header className="bg-blue-700 px-5 lg:px-60 pt-20">
          {/* H1 - Judul paling atas */}
          <h1 className="text-white text-4xl lg:text-[60px] font-medium md:text-center mb-10">
            Experience the Future of Digital <br className="lg:block hidden" />
            Payments with e-wallet
          </h1>

          {/* Container: Gambar & Konten */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:gap-60">
            {/* RIGHT: Konten */}
            <section className="flex-1 flex flex-col gap-6 text-center lg:text-left">
              <p className="text-white text-lg">
                Simplify Your Life with Secure and Convenient Mobile
                <br className="lg:block hidden" /> Payments
              </p>

              {/* Tombol */}
              <div className="flex gap-5 justify-center lg:justify-start">
                <button className="flex items-center justify-center gap-3 bg-white w-full py-4 rounded-xl cursor-pointer">
                  <img src="/icon/gplay.svg" alt="Play Store" />
                  <p className="text-blue-500 font-semibold">Play Store</p>
                </button>
                <button className="flex items-center justify-center gap-3 border border-white w-full py-4 rounded-xl cursor-pointer">
                  <img src="/icon/appstore.svg" alt="App Store" />
                  <p className="text-white font-semibold">App Store</p>
                </button>
              </div>

              {/* Statistik */}
              <div>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <p className="text-white text-3xl lg:text-[50px]">4.6M</p>
                  <img src="/icon/user.svg" alt="Users" />
                </div>
                <p className="text-white mt-2">
                  Around the world, we already have over 4.6M happy users
                </p>
              </div>
            </section>
            {/* LEFT: Gambar */}
            <section className="flex-1 relative max-w-lg mx-auto">
              <img
                src="/icon/Mobile - Dashboard V2.svg"
                alt="Dashboard V2"
                className="w-full"
              />
              <img
                src="/icon/Mobile - Dashboard V1.svg"
                alt="Dashboard V1"
                className="absolute bottom-0 -right-10 w-4/5"
              />
            </section>
          </div>
        </header>

        {/* Content 1 */}
        <article className="my-15 px-5 lg:px-30 flex flex-col lg:flex-row gap-10">
          {/* Item 1 */}
          <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-center">
            <img
              src="/icon/headset.svg"
              alt="24/7 Support"
              className="w-12 h-12"
            />
            <div className="text-center lg:text-left">
              <h1 className="font-bold text-lg">24/7 Support</h1>
              <p>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-center">
            <img
              src="/icon/check.svg"
              alt="Data Privacy"
              className="w-12 h-12"
            />
            <div className="text-center lg:text-left">
              <h1 className="font-bold text-lg">Data Privacy</h1>
              <p>
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-center">
            <img
              src="/icon/download.svg"
              alt="Easy Download"
              className="w-12 h-12"
            />
            <div className="text-center lg:text-left">
              <h1 className="font-bold text-lg">Easy Download</h1>
              <p>
                Zwallet is 100% totally free to use. It’s now available on
                Google Play Store and App Store.
              </p>
            </div>
          </div>
        </article>

        {/* Content 2 */}
        <section className="mt-25 lg:flex lg:flex-row-reverse lg:px-30 lg:my-30">
          <div className="flex justify-center items-center relative lg:w-1/2">
            <img
              src="/icon/Mobile - Dashboard V2.svg"
              alt=""
              className="w-50 lg:w-80 absolute -bottom-4.5 lg:-bottom-7"
            />
            <img
              src="/icon/canvas.svg"
              alt=""
              className="lg:w-155"
            />
          </div>
          <div className="text-center px-5 mt-10 flex flex-col gap-5 lg:w-1/2">
            <h2 className="text-blue-700 text-xl font-bold lg:text-left">
              WELCOME TO E-WALLET
            </h2>
            <h1 className="font-medium text-3xl lg:text-left">
              Your All-in-One Digital Payment Solution
            </h1>
            <p className="text-gray-500 lg:text-left">
              Say goodbye to cash and hello to the future of payments! With
              e-wallet, you have the power of secure, fast, and convenient
              digital transactions right at your fingertips. Whether you're
              shopping, dining out, or sending money to loved ones, we've got
              you covered.
            </p>
            <button className="bg-blue-700 text-white rounded-sm min-h-12 cursor-pointer lg:w-40">
              Get Started
            </button>
          </div>
        </section>
        {/* content 3 */}
        <section>
          <div className="bg-gray-100 pb-30 lg:pb-10 lg:flex lg:px-30">
            <div className="flex justify-center mt-15 lg:mt-0 lg:w-1/2">
              <img
                src="/icon/notebook.svg"
                alt="notebook"
                className="lg:w-140 "
              />
            </div>
            <section className="flex flex-col gap-3 px-5 lg:pt-24">
              <h1 className="font-normal text-4xl">
                All The Great Zwallet Features.
              </h1>
              <p className="text-gray-500 text-lg">
                We have some great features from the application and it’s
                totally free to <br />
                use by all users around the world.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 text-green-500 font-bold">
                  <img src="/icon/checkgreen.svg" alt="" />
                  <p>Small Fee</p>
                </div>
                <div className="flex gap-3 text-green-500 font-bold">
                  <img src="/icon/checkgreen.svg" alt="" />
                  <p>Data Secured</p>
                </div>
                <div className="flex gap-3 text-green-500 font-bold">
                  <img src="/icon/checkgreen.svg" alt="" />
                  <p>User Friendly</p>
                </div>
                <button className="w-full bg-blue-700 text-white min-h-12 rounded-lg mt-5 lg:w-40 cursor-pointer">
                  Get Started
                </button>
              </div>
            </section>
          </div>
        </section>
        {/* content 4 */}
        <section className="px-5 lg:px-30 mt-20 flex flex-col gap-5 lg:flex-row ">
          <div className="flex flex-col gap-5 lg:w-1/2">
            <h1 className="font-medium text-4xl text-center lg:text-left lg:font-normal lg:text-[50px]">
              100+ Trusted <br className="lg:hidden" />
              Partners
            </h1>
            <p className="text-center text-gray-500 lg:text-left lg:text-[20px]">
              We have reached global level and have 100+ <br /> brand partners
              around the globe.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mb-15 lg:flex-row lg:gap-5">
            <img src="/icon/microsoft.svg" alt="" />
            <img src="/icon/dropbox.svg" alt="" />
            <img src="/icon/h&m.svg" alt="" />
            <img src="/icon/airbnb.svg" alt="" />
            <img src="/icon/canon.svg" alt="" />
            <img src="/icon/dell.svg" alt="" />
          </div>
        </section>
        {/* content 5 */}
        <section className="mb-15 relative">
          <article className="px-5 flex flex-col gap-5 lg:mt-20">
            <h1 className="font-medium text-3xl text-center lg:font-normal lg:text-[50px]">
              What Our Users Are Saying
            </h1>
            <p className="text-center text-gray-500">
              Ready to experience the future of payments? Download e-wallet now
              and enjoy a world of convenience at your fingertips.
            </p>
          </article>

          {/* Container untuk card + arrow */}
          <article className="mt-10 px-5 lg:px-30 lg:flex lg:justify-center relative">
            {/* Arrow kiri */}
            <button className="hidden lg:block cursor-pointer">
              <img src="/icon/left.svg" alt="" className="absolute lg:left-35"/>
            </button>
            <div className="bg-blue-700 lg:w-fit rounded-lg px-5 py-10 flex flex-col gap-3">
              <img
                src="/icon/profilejames.svg"
                alt=""
                className="mx-auto block"
              />
              <p className="text-white text-center font-medium text-lg">
                James Bond
              </p>
              {/* star */}
              <div className="flex gap-3 justify-center">
                <img src="/icon/bintang.svg" alt="" />
                <img src="/icon/bintang.svg" alt="" />
                <img src="/icon/bintang.svg" alt="" />
                <img src="/icon/bintang.svg" alt="" />
                <img src="/icon/bintang.svg" alt="" />
                <p className="text-white text-lg">5.0</p>
              </div>
              <img
                src="/icon/petik.svg"
                alt=""
                className="mx-auto block"
              />
              <p className="text-white text-center lg:px-10">
                I've been using the e-wallet for over two years now, and I'm
                very satisfied with the <br /> ease of use. This has completely
                changed the way I shop and conduct financial <br />{" "}
                transactions.
              </p>
            </div>

            {/* Arrow kanan */}
            <button className="hidden lg:block cursor-pointer">
              <img src="/icon/right.svg" alt="Next" className="absolute right-35" />
            </button>
          </article>
          <div className="flex items-center justify-center gap-3 mt-8 lg:hidden">
            <button className="w-4 h-2 rounded-full bg-blue-600 transition-all"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300 transition-all"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300 transition-all"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300 transition-all"></button>
          </div>
        </section>
        {/* content 6 */}
        <section className="bg-gray-100 px-5 pt-10">
          <div className="flex flex-col gap-5 lg:gap-30 lg:flex-row-reverse lg:justify-center">
            <div className="lg:flex lg:flex-col flex flex-col gap-5 lg:justify-center">
              <h1 className="text-4xl">
                Download The <br className="block lg:hidden" />
                App
              </h1>
              <p className="text-gray-500">
                Ready to experience the future of payments? Download e-wallet
                now
                <br className="lg:block hidden" /> and enjoy a world of
                convenience at your fingertips.
              </p>
              <div className="flex gap-5 justify-center lg:flex-row">
                <button className="flex gap-5 bg-blue-700 w-full p-5 rounded-xl cursor-pointer">
                  <img src="/icon/gplay.svg" alt="" />
                  <p className="text-white">Play store</p>
                </button>
                <button className="flex gap-5 border border-blue-700 p-5 w-full rounded-xl cursor-pointer ">
                  <img src="/icon/appstoreblue.svg" alt="" />
                  <p className="text-blue-700">Apps Store</p>
                </button>
              </div>
            </div>
            <div className="lg:flex-1 relative  lg:max-w-md mx-auto lg:mx-0">
              <img
                src="/icon/Mobile - Dashboard V2.svg"
                alt="Dashboard V2"
                className="w-full"
              />
              <img
                src="/icon/Mobile - Dashboard V1.svg"
                alt="Dashboard V1"
                className="absolute bottom-0 -right-15 w-4/5"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
