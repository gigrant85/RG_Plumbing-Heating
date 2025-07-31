
const ServicesPage = () => (
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Our Services</h1>
      <p className="text-xl text-gray-700">Professional plumbing solutions for your home and business</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">🔧</div>
        <h3 className="text-xl font-semibold mb-3">Emergency Repairs</h3>
        <p className="text-gray-700 mb-4">24/7 emergency service for burst pipes, major leaks, and urgent plumbing issues.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Burst pipe repair</li>
          <li>• Emergency leak fixes</li>
          <li>• Sewer backups</li>
          <li>• Water main issues</li>
        </ul>
        <div className="mt-4 text-blue-600 font-semibold">Starting at $150</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">🚿</div>
        <h3 className="text-xl font-semibold mb-3">Drain Cleaning</h3>
        <p className="text-gray-700 mb-4">Professional drain cleaning services to keep your pipes flowing smoothly.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Kitchen sink drains</li>
          <li>• Bathroom drains</li>
          <li>• Main sewer lines</li>
          <li>• Hydro jetting</li>
        </ul>
        <div className="mt-4 text-blue-600 font-semibold">Starting at $120</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">🔥</div>
        <h3 className="text-xl font-semibold mb-3">Water Heater Services</h3>
        <p className="text-gray-700 mb-4">Installation, repair, and maintenance of all water heater types.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Tank water heaters</li>
          <li>• Tankless systems</li>
          <li>• Repairs & maintenance</li>
          <li>• Energy-efficient upgrades</li>
        </ul>
        <div className="mt-4 text-blue-600 font-semibold">Starting at $200</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">🚽</div>
        <h3 className="text-xl font-semibold mb-3">Fixture Installation</h3>
        <p className="text-gray-700 mb-4">Professional installation and replacement of plumbing fixtures.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Toilet installation</li>
          <li>• Faucet replacement</li>
          <li>• Shower/tub installation</li>
          <li>• Garbage disposals</li>
        </ul>
        <div className="mt-4 text-blue-600 font-semibold">Starting at $180</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">🏠</div>
        <h3 className="text-xl font-semibold mb-3">Whole House Repiping</h3>
        <p className="text-gray-700 mb-4">Complete pipe replacement for older homes with outdated plumbing.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Copper repiping</li>
          <li>• PEX installation</li>
          <li>• Slab leak repair</li>
          <li>• Pipe inspection</li>
        </ul>
        <div className="mt-4 text-blue-600 font-semibold">Starting at $3,500</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">💧</div>
        <h3 className="text-xl font-semibold mb-3">Leak Detection</h3>
        <p className="text-gray-700 mb-4">Advanced leak detection technology to find hidden water leaks.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Electronic leak detection</li>
          <li>• Slab leak location</li>
          <li>• Pipe camera inspection</li>
          <li>• Water damage prevention</li>
        </ul>
        <div className="mt-4 text-blue-600 font-semibold">Starting at $250</div>
      </div>
    </div>

    <div className="bg-blue-50 p-8 rounded-lg mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Why Choose Our Services?</h2>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-blue-600 text-2xl mb-2">⚡</div>
          <h4 className="font-semibold mb-2">Fast Response</h4>
          <p className="text-sm text-gray-700">Same-day service available</p>
        </div>
        <div className="text-center">
          <div className="text-blue-600 text-2xl mb-2">💰</div>
          <h4 className="font-semibold mb-2">Fair Pricing</h4>
          <p className="text-sm text-gray-700">Upfront estimates, no surprises</p>
        </div>
        <div className="text-center">
          <div className="text-blue-600 text-2xl mb-2">🛡️</div>
          <h4 className="font-semibold mb-2">Guaranteed Work</h4>
          <p className="text-sm text-gray-700">100% satisfaction guarantee</p>
        </div>
        <div className="text-center">
          <div className="text-blue-600 text-2xl mb-2">👨‍🔧</div>
          <h4 className="font-semibold mb-2">Expert Team</h4>
          <p className="text-sm text-gray-700">Licensed & experienced plumbers</p>
        </div>
      </div>
    </div>

    <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Need Service Today?</h2>
      <p className="text-lg mb-6">Don&apos;t wait - call now for fast, professional service!</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="tel:123-456-7890" 
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
        >
          Call (123) 456-7890
        </a>
        <a 
          href="/contact" 
          className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 inline-block"
        >
          Get Free Quote
        </a>
      </div>
    </div>
  </div>
);

export default ServicesPage;
