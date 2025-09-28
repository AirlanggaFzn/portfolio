'use client';
import React from "react";
import dynamic from "next/dynamic";

// Dynamic import supaya SSR Next.js tidak error
const FaFacebookF = dynamic(() => import("react-icons/fa").then(mod => mod.FaFacebookF), { ssr: false });
const FaTwitter = dynamic(() => import("react-icons/fa").then(mod => mod.FaTwitter), { ssr: false });
const FaInstagram = dynamic(() => import("react-icons/fa").then(mod => mod.FaInstagram), { ssr: false });
const FaLinkedinIn = dynamic(() => import("react-icons/fa").then(mod => mod.FaLinkedinIn), { ssr: false });

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. WiTicket Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-green-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                WiTicket
              </div>
            </div>
            <p className="text-gray-400">
              Platform tiket event terpercaya di Indonesia. Nikmati pengalaman terbaik dalam membeli tiket konser, festival, dan event lainnya.
            </p>
          </div>

          {/* 2. Social Media (centered horizontally) */}
          <div className="flex justify-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white text-xl">Follow Saya On Social Media</h3>
              <div className="flex space-x-4 mt-2 text-3xl justify-center">
                <a href="#" className="hover:text-white transition-transform duration-200 transform hover:scale-110"><FaFacebookF /></a>
                <a href="#" className="hover:text-white transition-transform duration-200 transform hover:scale-110"><FaTwitter /></a>
                <a href="#" className="hover:text-white transition-transform duration-200 transform hover:scale-110"><FaInstagram /></a>
                <a href="#" className="hover:text-white transition-transform duration-200 transform hover:scale-110"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

          {/* 3. Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white text-xl">Hubungi Saya</h3>
            <ul className="space-y-3">
              <li>airlanggafzn@gmail.com</li>
              <li>+62 851 6264 6669</li>
              <li>Jl. Lenteng Agung No.4 , Jakarta Selatan, DKI Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
<div className="border-t border-gray-800 mt-12 pt-6 flex justify-center items-center text-sm">
  <p>© 2024 WiTicket. All rights reserved.</p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
