import React from "react";

const Footer = () => {
  return (
    <footer className=" ">
      {/* Call-to-Action Section */}
      <div className="border-b border-gray-800 py-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt text-orange-500 text-3xl"></i>
            <div className="ml-4">
              <h4 className="text-black text-lg font-semibold">Find us</h4>
              <span className="text-gray-400 text-sm">
                1010 Avenue, sw 54321, Chandigarh
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fas fa-phone text-orange-500 text-3xl"></i>
            <div className="ml-4">
              <h4 className="text-black text-lg font-semibold">Call us</h4>
              <span className="text-gray-400 text-sm">9876543210</span>
            </div>
          </div>
          <div className="flex items-center">
            <i className="far fa-envelope-open text-orange-500 text-3xl"></i>
            <div className="ml-4">
              <h4 className="text-black text-lg font-semibold">Mail us</h4>
              <span className="text-gray-400 text-sm">mail@info.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Logo and Social Links */}
          <div>
            <img
              src="https://i.ibb.co/QDy827D/ak-logo.png"
              alt="Logo"
              className="mb-6"
            />
            <p className="text-black text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div>
              <span className="text-black font-bold">Follow us</span>
              <div className="flex space-x-3 mt-3">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-black"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-black"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-black"
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-black text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="grid grid-cols-2 gap-4text-black text-sm">
              <li><a href="#" className="text-black hover:text-orange-500">Home</a></li>
              <li><a href="#" className="hover:text-orange-500">About</a></li>
              <li><a href="#" className="hover:text-orange-500">Services</a></li>
              <li><a href="#" className="hover:text-orange-500">Portfolio</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
              <li><a href="#" className="hover:text-orange-500">Latest News</a></li>
            </ul>
          </div>

          {/* Subscribe Form */}
          <div>
            <h3 className="text-black text-lg font-semibold mb-6">Subscribe</h3>
            <p className="text-black text-sm mb-6">
              Don’t miss to subscribe to our new feeds, kindly fill the form
              below.
            </p>
            <form className="relative">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full bg-gray-800 text-black p-3 rounded focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bg-orange-500 p-3 rounded text-black"
              >
                <i className="fab fa-telegram-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between text-center lg:text-left">
          <p className="text-black text-sm">
            Copyright &copy; 2024, All Right Reserved{" "}
            <a
              href="https://codepen.io/anupkumar92/"
              className="text-orange-500 hover:underline"
            >
              Anup
            </a>
          </p>
          <ul className="flex justify-center lg:justify-end space-x-6 mt-4 lg:mt-0">
            <li><a href="#" className="text-black hover:text-orange-500">Home</a></li>
            <li><a href="#" className="text-black hover:text-orange-500">Terms</a></li>
            <li><a href="#" className="text-black hover:text-orange-500">Privacy</a></li>
            <li><a href="#" className="text-black hover:text-orange-500">Policy</a></li>
            <li><a href="#" className="text-black hover:text-orange-500">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
