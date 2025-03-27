// src/components/Footer.js
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import img1 from "./imges/logo1.png";
import img2 from "./imges/logo2.png";
import img3 from "./imges/logo3.png";
import img4 from "./imges/logo4.png";
import img5 from "./imges/logo5.png";
import img6 from "./imges/logo6.png";

const Footer = () => {
  return (
    <footer className="bg-[#FF1D8D] text-white py-10">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <img src={img6} alt="fairy-tail" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Help Section */}
          <div className="mt-15">
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Contact us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Delivery information
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Refund policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Using our features
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Changing your style
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Money back guarantee
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Quick start guide
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Referrals
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Tokens
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Cambodia
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  England
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Newsletters
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Press pack
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Resources
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Schools
                </a>
              </li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Starter packs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Audiobooks for older listeners
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Bundles
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Our content
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Questions About Audiobooks
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-400">
                  Stories for schools
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex space-x-4 justify-center md:justify-start">
          <a href="#" className="text-white hover:text-green-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-green-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-green-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-green-400">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-white hover:text-green-400">
            <FaTiktok size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center md:text-left text-sm">
          @2025 Audiobooks
        </div>

        {/* Payment Methods */}
        <div className="mt-8 flex justify-end space-x-4">
          <a href="#" className="hover:opacity-75">
            <img
              src={img1}
              alt="Mastercard"
              className="w-10 h-6 bg-black rounded-lg"
            />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src={img2} alt="PayPal" className="w-10 h-6 rounded-lg" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src={img3} alt="Amazon Pay" className="w-10 h-6 rounded-lg" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img
              src={img4}
              alt="Bitcoin"
              className="w-10 h-6 bg-black rounded-lg"
            />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src={img5} alt="Binance Pay" className="w-10 h-6 rounded-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
