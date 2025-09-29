import { Mail, Phone } from "lucide-react";
// import footerIcon from "/src/assets/icon/wallet-icon.png";
import facebookIcon from "/icon/social-media/facebook.png";
import twitterIcon from "/icon/social-media/twitter.png";
import instagramIcon from "/icon/social-media/instagram.png";
import githubIcon from "/icon/social-media/github.png";

const Footer = () => {
  return (
    <footer className="bg-blue-700 pt-10 px-5 flex flex-col justify-between">
      <div className="flex flex-col gap-10 pb-10 lg:flex-row lg:justify-between">
        {/* E-wallet Section */}
        <section className="flex flex-wrap lg:flex-row items-center lg:w-1/3  gap-5">
          <img src="/belalai-wallet.png" alt="E-wallet icon" className="w-15" />
          <h1 className="text-3xl text-white">Russel Pay</h1>
          <p className="text-white text-xl font-light">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
        </section>
        {/* E-wallet Section */}

        {/* Get In Touch Section */}
        <section className="flex flex-col gap-5">
          <h1 className="text-left text-2xl text-white">GET IN TOUCH</h1>
          {/* Telephone */}
          <div className="flex  gap-5">
            <Phone className="text-white" />
            <h3 className="text-lg  text-white">+62 5637 8882 9901</h3>
          </div>
          {/* Telephone */}
          {/* Email */}
          <div className="flex gap-5">
            <Mail className="text-white" />
            <h3 className="text-lg  text-white">contact@zwallet.com</h3>
          </div>
          {/* Email */}
        </section>
        {/* Get In Touch Section */}

        {/* Social Media Section */}
        <section className="flex flex-col gap-5">
          <h1 className="text-left text-2xl text-white">SOCIAL MEDIA</h1>
          <div className="flex gap-5">
            <img src={twitterIcon} alt="Twitter Icon" />
            <img src={facebookIcon} alt="Facebook Icon" />
            <img src={instagramIcon} alt="Instagram Icon" />
            <img src={githubIcon} alt="Github Icon" />
          </div>
        </section>
        {/* Social Media  Section */}

        {/* Newslatter */}
        <form className="flex flex-col lg:w-1/4 gap-5">
          <h1 className="text-left text-2xl text-white">NEWSLETTER</h1>
          <div className="relative w-full h-full">
            <Mail className="absolute top-4 left-2 text-gray-400" />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email "
              className="pl-10 bg-white w-full p-4 rounded-xl "
            />
          </div>
          <button className="w-full bg-white p-3 rounded-xl text-blue-800 text-xl cursor-pointer">
            Subscribe
          </button>
        </form>
        {/* Newslatter */}
      </div>
      <hr className="text-white" />
      <div className="text-center py-5 text-white">
        <h3>© Copyright 2022, All Rights Reserved by ClarityUI</h3>
      </div>
    </footer>
  );
};

export default Footer;
