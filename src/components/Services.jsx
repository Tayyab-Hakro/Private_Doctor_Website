
function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Heading */}
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        Dermatologist Services
      </h1>

      {/* Services List */}
      <div className="grid mb-10 grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="text-center p-6 bg-gray-100 shadow rounded-lg">
          <img 
            src="https://tse3.mm.bing.net/th?id=OIP.d08nVOv70r-vjMwnoVPRegHaE8&pid=Api&P=0&h=220" 
            alt="Skin Consultation" 
            className="mx-auto rounded-lg mb-6 w-full max-w-sm"
          />
          <h2 className="text-2xl font-semibold text-black">Skin Consultation</h2>
          <p className="mt-4 text-gray-600">Comprehensive skin health check and treatment plans tailored to you.</p>
        </div>

        {/* Service 2 */}
        <div className="text-center p-6 bg-gray-100 shadow rounded-lg">
          <img 
            src="https://tse1.mm.bing.net/th?id=OIP.IyyEZBcFgxYWcSHnjtsfEgHaFX&pid=Api&P=0&h=220" 
            alt="Acne Treatment" 
            className="mx-auto rounded-lg mb-6 w-full max-w-sm"
          />
          <h2 className="text-2xl font-semibold text-black">Acne Treatment</h2>
          <p className="mt-4 text-gray-600">Effective treatments for all types of acne to restore your skin’s glow.</p>
        </div>

        {/* Service 3 */}
        <div className="text-center p-6 bg-gray-100 shadow rounded-lg">
          <img 
            src="https://tse3.mm.bing.net/th?id=OIP.pG0sGlxcHyBOOX48tVODIgHaE8&pid=Api&P=0&h=220" 
            alt="Anti-Aging Solutions" 
            className="mx-auto rounded-lg mb-6 w-full max-w-sm"
          />
          <h2 className="text-2xl font-semibold text-black">Anti-Aging Solutions</h2>
          <p className="mt-4 text-gray-600">Advanced treatments to reduce wrinkles and rejuvenate your skin.</p>
        </div>
      </div>
         {/* Services List */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="text-center p-6 bg-gray-100 shadow rounded-lg">
          <img 
            src="https://tse4.mm.bing.net/th?id=OIP.XFShVaa7UJKyoGb0KWt1AgHaE7&pid=Api&P=0&h=220" 
            alt="Skin Consultation" 
            className="mx-auto rounded-lg mb-6 w-full max-w-sm"
          />
          <h2 className="text-2xl font-semibold text-black">Skin Consultation</h2>
          <p className="mt-4 text-gray-600">Comprehensive skin health check and treatment plans tailored to you.</p>
        </div>

        {/* Service 2 */}
        <div className="text-center p-6 bg-gray-100 shadow rounded-lg">
          <img 
            src="https://tse2.mm.bing.net/th?id=OIP.w0KzME6aAzZgQG9EnA-pFgHaE7&pid=Api&P=0&h=220" 
            alt="Acne Treatment" 
            className="mx-auto rounded-lg mb-6 w-full max-w-sm"
          />
          <h2 className="text-2xl font-semibold text-black">Acne Treatment</h2>
          <p className="mt-4 text-gray-600">Effective treatments for all types of acne to restore your skin’s glow.</p>
        </div>

        {/* Service 3 */}
        <div className="text-center p-6 bg-gray-100 shadow rounded-lg">
          <img 
            src="https://tse4.mm.bing.net/th?id=OIP.qrr_hOmAZ7doFtuL-fIB6AHaE8&pid=Api&P=0&h=220" 
            alt="Anti-Aging Solutions" 
            className="mx-auto rounded-lg mb-6 w-full max-w-sm"
          />
          <h2 className="text-2xl font-semibold text-black">Anti-Aging Solutions</h2>
          <p className="mt-4 text-gray-600">Advanced treatments to reduce wrinkles and rejuvenate your skin.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
