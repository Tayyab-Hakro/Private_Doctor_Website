import { FaEnvelope } from "react-icons/fa";
function Testimonials() {
  return (
    <>
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white  w-full mt-10 mb-10">
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-sm mb-6">
        Stay updated with the latest news and offers. Enter your email below to subscribe.
      </p>
    </div>
    <form className="flex flex-col sm:flex-row items-center gap-4">
      <div className="relative w-full">
        <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>
      <button
        type="submit"
        className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
      >
        Subscribe
      </button>
    </form>
  </div>
  <h1 className='flex items-center text-4xl font-bold justify-center '>Our Patients Testiemonails</h1>
    <div className="flex flex-col sm:flex-row sm:space-x-8 p-4 bg-gray-100">
      {/* Testimonial 1 */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg mb-6 sm:mb-0">
        <div className="flex items-center space-x-4">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.d5DnbqXSybnWx3Nu6GfDGQHaE8&pid=Api&P=0&h=220"
            alt="John Doe"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500">Patient</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
          "I had an amazing experience with the dermatologist! My skin condition has improved drastically in just a few sessions. Highly recommend!"
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg mb-6 sm:mb-0">
        <div className="flex items-center space-x-4">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.P53tIhwWBFaDBSOdy8LeSAHaE7&pid=Api&P=0&h=220"
            alt="Jane Smith"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">Jane Smith</h3>
            <p className="text-sm text-gray-500">Patient</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
          "The doctor provided clear explanations and a treatment plan that worked wonders for my skin. I'm so grateful!"
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center space-x-4">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.P53tIhwWBFaDBSOdy8LeSAHaE7&pid=Api&P=0&h=220"
            alt="Alice Johnson"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">Alice Johnson</h3>
            <p className="text-sm text-gray-500">Patient</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
          "Very professional and kind. The treatments are effective, and the clinic atmosphere is so welcoming!"
        </p>
      </div>
    </div>
    </>
  );
}

export default Testimonials;
