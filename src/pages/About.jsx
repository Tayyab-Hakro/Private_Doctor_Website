
function About() {
  return (



    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <span className="block text-center text-gray-500 font-semibold uppercase text-sm mb-2">
          My History
        </span>
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-6">
            <p className="text-lg text-gray-600">
              <span className="block text-xl font-semibold text-gray-800">
                Hello, I am <br />
              </span>
              Freelance frontend developer, I am passionate about creating and
              developing web interfaces. With years of experience in web design
              and development.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-8 justify-center md:justify-start">
              <div className="mb-4 sm:mb-0">
                <span className="text-4xl text-purple-600 font-bold">10</span>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="mb-4 sm:mb-0">
                <span className="text-4xl text-purple-600 font-bold">10000+</span>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <span className="text-4xl text-purple-600 font-bold">100%</span>
                <p className="text-gray-600">Best Work Awards</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.6dx6XunK8RYFX-o1iu0B3AHaHS&pid=Api&P=0&h=220400x500"
              alt="About Me"
              className="w-64 md:w-72 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

  )
}

export default About