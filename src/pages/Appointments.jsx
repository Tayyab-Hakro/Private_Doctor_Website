import React from "react";

function Appointments() {
  return (
    <div className="flex items-center justify-center p-12 bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
        <form action="https://formbold.com/s/FORM_ID" method="POST" className="flex-1">
          {/* Full Name */}
          <div className="mb-5">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-5">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email Address */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Available Time Slots */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Select Available Time Slot
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* Monday */}
              <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                <h3 className="text-lg font-semibold mb-3">Monday</h3>
                <div>
                  <label htmlFor="time-mon-09" className="block mb-2">09:00 AM</label>
                  <input
                    type="radio"
                    id="time-mon-09"
                    name="time"
                    value="09:00 AM"
                    className="mr-2"
                  />
                </div>
                <div>
                  <label htmlFor="time-mon-10" className="block mb-2">10:00 AM</label>
                  <input
                    type="radio"
                    id="time-mon-10"
                    name="time"
                    value="10:00 AM"
                    className="mr-2"
                  />
                </div>
              </div>

              {/* Tuesday */}
              <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                <h3 className="text-lg font-semibold mb-3">Tuesday</h3>
                <div>
                  <label htmlFor="time-tue-09" className="block mb-2">09:00 AM</label>
                  <input
                    type="radio"
                    id="time-tue-09"
                    name="time"
                    value="09:00 AM"
                    className="mr-2"
                  />
                </div>
                <div>
                  <label htmlFor="time-tue-10" className="block mb-2">10:00 AM</label>
                  <input
                    type="radio"
                    id="time-tue-10"
                    name="time"
                    value="10:00 AM"
                    className="mr-2"
                  />
                </div>
              </div>

              {/* Additional days... */}
            </div>
          </div>

          {/* Address Details */}
          <div className="mb-5 pt-3">
            <label className="block text-gray-800 font-semibold text-lg mb-4">
              Address Details
            </label>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full sm:w-1/2 px-3 mb-5">
                <input
                  type="text"
                  name="area"
                  id="area"
                  placeholder="Enter area"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-5">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter city"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-5">
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter state"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-5">
                <input
                  type="text"
                  name="post-code"
                  id="post-code"
                  placeholder="Post Code"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Book Appointment
            </button>
          </div>
        </form>

        {/* Right Side - Information Section */}
        <div className="flex-1 p-6 bg-gray-50 md:ml-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
          <p className="text-gray-600 mb-3">We are available from Monday to Friday. Please choose your preferred time slot.</p>
          <ul className="text-gray-600">
            <li><strong>Email:</strong> info@example.com</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Address:</strong> 123 Gym Street, Fitness City</li>
            <li><strong>Hours:</strong> Mon-Fri: 9 AM - 6 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
