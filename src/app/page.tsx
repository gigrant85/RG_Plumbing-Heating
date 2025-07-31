const HomePage = () => (
  <div>
    {/* Hero Section */}
    <div className="gradient-hero text-white py-16 px-4 rounded-lg mb-12">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Welcome to RG Plumbing Heating & Renewables</h1>
        <p className="text-xl mb-8">Your trusted partner for plumbing, heating, and renewable energy solutions. We offer reliable, fast, and affordable services with 24/7 emergency availability.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:07907122798" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-block"
          >
            Emergency: 07907 122798
          </a>
          <a 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 inline-block"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </div>

    {/* Services Highlights */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">Why Choose RG Plumbing Heating & Renewables?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 transition duration-300 shadow-lg">
          <div className="text-blue-600 text-5xl mb-4">🚨</div>
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">24/7 Emergency Service</h3>
          <p className="text-gray-700">Got a leak at 3 AM? No problem! Our team is available around the clock to handle any emergency. We typically arrive within 2 hours.</p>
        </div>
        <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 transition duration-300 shadow-lg">
          <div className="text-blue-600 text-5xl mb-4">👨‍🔧</div>
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">Expert Technicians</h3>
          <p className="text-gray-700">Our certified and experienced plumbers can fix any issue, big or small, with professionalism and skill. Licensed, bonded, and insured.</p>
        </div>
        <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 transition duration-300 shadow-lg">
          <div className="text-blue-600 text-5xl mb-4">💰</div>
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">Upfront Pricing</h3>
          <p className="text-gray-700">We believe in transparency. You&apos;ll get a clear, detailed estimate before we start any work. No hidden fees or surprise charges.</p>
        </div>
      </div>
    </div>

    {/* Customer Testimonials */}
    <div className="bg-gray-50 p-8 rounded-lg mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-yellow-500 text-2xl mb-3">⭐⭐⭐⭐⭐</div>
          <p className="text-gray-700 mb-4 italic">&quot;Awesome Plumbing saved the day! Had a burst pipe at midnight and they were at my house within an hour. Professional, fast, and reasonably priced.&quot;</p>
          <div className="font-semibold text-blue-600">- Sarah M.</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-yellow-500 text-2xl mb-3">⭐⭐⭐⭐⭐</div>
          <p className="text-gray-700 mb-4 italic">&quot;Called them for a water heater installation. They explained everything clearly, gave me options, and completed the job perfectly. Highly recommend!&quot;</p>
          <div className="font-semibold text-blue-600">- Mike R.</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-yellow-500 text-2xl mb-3">⭐⭐⭐⭐⭐</div>
          <p className="text-gray-700 mb-4 italic">&quot;Been using Awesome Plumbing for years. They&apos;re honest, reliable, and always do quality work. My go-to plumbers for everything!&quot;</p>
          <div className="font-semibold text-blue-600">- Jennifer L.</div>
        </div>
      </div>
    </div>

    {/* Service Areas */}
    <div className="grid md:grid-cols-2 gap-12 mb-12">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Services Include:</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Bathroom renovations</li>
          <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Hot water upgrades</li>
          <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Outside tap installations</li>
          <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Air source heat pumps</li>
          <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Natural gas services</li>
          <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> LPG & Oil services</li>
        </ul>
        <a href="/services" className="inline-block mt-4 text-blue-600 hover:underline font-semibold">
          View All Services →
        </a>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Service Area:</h2>
        <p className="text-gray-700 mb-4">
          We proudly serve the greater metropolitan area and surrounding communities within 50 miles, including:
        </p>
        <ul className="space-y-1 text-gray-700">
          <li>• Downtown and surrounding neighborhoods</li>
          <li>• Suburban residential areas</li>
          <li>• Commercial properties</li>
          <li>• New construction projects</li>
        </ul>
        <a href="/contact" className="inline-block mt-4 text-blue-600 hover:underline font-semibold">
          Check Your Area →
        </a>
      </div>
    </div>

    {/* Final CTA Section */}
    <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
      <p className="text-lg mb-6">Don&apos;t let plumbing, heating, or energy problems ruin your day. Call RG now!</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="tel:07907122798" 
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 inline-block"
        >
          Call Now: 07907 122798
        </a>
        <a 
          href="/contact" 
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
        >
          Request Free Quote
        </a>
      </div>
    </div>
  </div>
);

export default HomePage;
