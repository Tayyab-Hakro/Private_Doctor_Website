import React from "react";

function Hero() {
  const phoneNumber = "+1 234 567 890";



  return (
  <>
  <div className="flex flex-col md:flex-row items-center justify-between border-b-4  p-5 md:p-10">
      {/* Left Side: Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-5">
        <h1 className="text-4xl check md:text-5xl font-bold text-blue-700">
          I am Dr. Care - Dermatologist
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          With over <span className="font-semibold">10+ years</span> of
          experience, I specialize in treating skin, hair, and nail conditions. 
          Helping countless patients achieve healthier and more radiant skin is my passion.
        </p>
        <p className="text-md md:text-lg text-gray-700">
          Whether it’s acne, eczema, or any skin concern, I am here to help you
          feel confident and beautiful.
        </p>
        <button
          onClick={() => window.location.href = `tel:${phoneNumber}`}
          className="bg-blue-600  hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md text-lg transition duration-300"
        >
          Book Appointment Now
        </button>
   
      </div>

      {/* Right Side: Doctor Image */}
      <div className=" md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.6dx6XunK8RYFX-o1iu0B3AHaHS&pid=Api&P=0&h=220400x500" 
          alt="Doctor"
          className="rounded-lg shadow-lg max-w-xs md:max-w-sm"
        />
      </div>
    </div>
    <div className="  mx-auto px-4 py-8">
    <p className="mt-6 text-3xl mb-4  text-center font-serif text-black font-bold">
      Experience the best healthcare with our trusted team.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
      
      {/* First Div */}
      <div className="py-10  border-r-8  border-black shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-black">10+ Years Experience</h2>
        <p className="mt-2 text-gray-600">Building trust with exceptional care.</p>
      </div>
      {/* Second Div */}
      <div className="py-10  shadow border-r-8  border-black rounded-lg">
        <h2 className="text-2xl font-semibold text-black">10,000+ Patient Checkups</h2>
        <p className="mt-2 text-gray-600">Delivering quality healthcare services.</p>
      </div>
      {/* Third Div */}
      <div className="py-10 border-r-8  border-black  shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-black">100% Patient Satisfaction</h2>
        <p className="mt-2 text-gray-600">Committed to excellent service.</p>
      </div>
    </div>
 
  </div>
</>  
  );
}

export default Hero;
