
const ServicesPage = () => (
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Our Services</h1>
      <p className="text-xl text-gray-700">Professional plumbing, heating, and renewable energy solutions for your home and business</p>
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

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-500 transition duration-300 shadow-lg">
        <div className="text-red-600 text-4xl mb-4">🔥</div>
        <h3 className="text-xl font-semibold mb-3">Boiler Installation & Repair</h3>
        <p className="text-gray-700 mb-4">Expert installation, repair, and maintenance of all boiler types for reliable heating.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Combi boilers</li>
          <li>• System boilers</li>
          <li>• Regular boilers</li>
          <li>• Emergency repairs</li>
        </ul>
        <div className="mt-4 text-red-600 font-semibold">Starting at $2,500</div>
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

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-500 transition duration-300 shadow-lg">
        <div className="text-red-600 text-4xl mb-4">♨️</div>
        <h3 className="text-xl font-semibold mb-3">Central Heating Systems</h3>
        <p className="text-gray-700 mb-4">Complete central heating installation and maintenance for optimal home comfort.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Radiator installation</li>
          <li>• Underfloor heating</li>
          <li>• Thermostatic controls</li>
          <li>• System maintenance</li>
        </ul>
        <div className="mt-4 text-red-600 font-semibold">Starting at $3,000</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-500 transition duration-300 shadow-lg">
        <div className="text-red-600 text-4xl mb-4">🌡️</div>
        <h3 className="text-xl font-semibold mb-3">Heat Pump Installation</h3>
        <p className="text-gray-700 mb-4">Energy-efficient heat pump systems for year-round comfort and reduced energy bills.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Air source heat pumps</li>
          <li>• Ground source heat pumps</li>
          <li>• Hybrid systems</li>
          <li>• Maintenance & repairs</li>
        </ul>
        <div className="mt-4 text-red-600 font-semibold">Starting at $8,000</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-yellow-500 transition duration-300 shadow-lg">
        <div className="text-yellow-600 text-4xl mb-4">☀️</div>
        <h3 className="text-xl font-semibold mb-3">Solar Thermal Systems</h3>
        <p className="text-gray-700 mb-4">Harness solar energy for hot water heating and reduce your energy bills.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Solar hot water systems</li>
          <li>• Thermal collectors</li>
          <li>• System integration</li>
          <li>• Maintenance & monitoring</li>
        </ul>
        <div className="mt-4 text-yellow-600 font-semibold">Starting at $4,500</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-500 transition duration-300 shadow-lg">
        <div className="text-green-600 text-4xl mb-4">🌿</div>
        <h3 className="text-xl font-semibold mb-3">Renewable Energy Solutions</h3>
        <p className="text-gray-700 mb-4">Complete renewable energy systems for sustainable home energy.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Energy assessments</li>
          <li>• System design</li>
          <li>• Installation & commissioning</li>
          <li>• Performance monitoring</li>
        </ul>
        <div className="mt-4 text-green-600 font-semibold">Contact for quote</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">💧</div>
        <h3 className="text-xl font-semibold mb-3">Leak Detection & Repair</h3>
        <p className="text-gray-700 mb-4">Advanced leak detection technology to find and fix hidden water leaks.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Electronic leak detection</li>
          <li>• Pipe camera inspection</li>
          <li>• Non-invasive methods</li>
          <li>• Emergency repairs</li>
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
      <p className="text-lg mb-6">Don&apos;t wait - call now for fast, professional plumbing, heating, and renewable energy services!</p>
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
