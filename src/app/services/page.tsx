
const ServicesPage = () => (
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Our Services</h1>
      <p className="text-xl text-gray-700">Professional plumbing, heating, and renewable energy solutions for your home and business</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">🛁</div>
        <h3 className="text-xl font-semibold mb-3">Bathroom Renovations</h3>
        <p className="text-gray-700 mb-4">Complete bathroom renovation services from design to installation.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Full bathroom design</li>
          <li>• Suite installation</li>
          <li>• Tiling and flooring</li>
          <li>• Plumbing and electrics</li>
        </ul>
        <div className="mt-4 text-blue-600 font-semibold">Contact for quote</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">🔥</div>
        <h3 className="text-xl font-semibold mb-3">Hot Water Upgrades</h3>
        <p className="text-gray-700 mb-4">Upgrade your hot water system for improved efficiency and reliability.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Cylinder replacements</li>
          <li>• Combi boiler upgrades</li>
          <li>• Immersion heater installation</li>
          <li>• System optimization</li>
        </ul>
        <div className="mt-4 text-blue-600 font-semibold">Starting at £800</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">🔧</div>
        <h3 className="text-xl font-semibold mb-3">Outside Tap Installations</h3>
        <p className="text-gray-700 mb-4">Professional installation of outside taps for garden and external use.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Garden tap installation</li>
          <li>• Frost-proof taps</li>
          <li>• Pipe work and connections</li>
          <li>• Isolation valves</li>
        </ul>
        <div className="mt-4 text-blue-600 font-semibold">Starting at £150</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">🚽</div>
        <h3 className="text-xl font-semibold mb-3">WC Repairs</h3>
        <p className="text-gray-700 mb-4">Professional toilet and WC repair services for all common issues.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Toilet repairs</li>
          <li>• Cistern adjustments</li>
          <li>• Seat replacements</li>
          <li>• Flush mechanism fixes</li>
        </ul>
        <div className="mt-4 text-blue-600 font-semibold">Starting at £80</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">🔧</div>
        <h3 className="text-xl font-semibold mb-3">Tap Repair/Replacement</h3>
        <p className="text-gray-700 mb-4">Professional tap repair and replacement services for kitchen and bathroom.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Kitchen tap repairs</li>
          <li>• Bathroom tap installation</li>
          <li>• Mixer tap replacement</li>
          <li>• Washer replacements</li>
        </ul>
        <div className="mt-4 text-blue-600 font-semibold">Starting at £60</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300 shadow-lg">
        <div className="text-blue-600 text-4xl mb-4">💧</div>
        <h3 className="text-xl font-semibold mb-3">Leak Repairs</h3>
        <p className="text-gray-700 mb-4">Fast and reliable leak detection and repair services to prevent water damage.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Pipe leak repairs</li>
          <li>• Joint replacements</li>
          <li>• Emergency leak fixes</li>
          <li>• Water damage prevention</li>
        </ul>
        <div className="mt-4 text-blue-600 font-semibold">Starting at £120</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-500 transition duration-300 shadow-lg">
        <div className="text-red-600 text-4xl mb-4">🌡️</div>
        <h3 className="text-xl font-semibold mb-3">Air Source Heat Pump</h3>
        <p className="text-gray-700 mb-4">Professional installation, servicing, and repair of air source heat pump systems.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Heat pump installation</li>
          <li>• System servicing</li>
          <li>• Repairs & maintenance</li>
          <li>• Performance optimization</li>
        </ul>
        <div className="mt-4 text-red-600 font-semibold">Starting at £6,000</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-500 transition duration-300 shadow-lg">
        <div className="text-red-600 text-4xl mb-4">🔥</div>
        <h3 className="text-xl font-semibold mb-3">Natural Gas Services</h3>
        <p className="text-gray-700 mb-4">Complete natural gas installation, servicing, and repair services.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Gas appliance installation</li>
          <li>• Gas safety checks</li>
          <li>• Boiler servicing</li>
          <li>• Gas leak repairs</li>
        </ul>
        <div className="mt-4 text-red-600 font-semibold">Starting at £200</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-500 transition duration-300 shadow-lg">
        <div className="text-red-600 text-4xl mb-4">⛽</div>
        <h3 className="text-xl font-semibold mb-3">LPG Services</h3>
        <p className="text-gray-700 mb-4">Professional LPG installation, servicing, and repair for all applications.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• LPG appliance installation</li>
          <li>• Tank installation</li>
          <li>• System servicing</li>
          <li>• Safety inspections</li>
        </ul>
        <div className="mt-4 text-red-600 font-semibold">Starting at £250</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-500 transition duration-300 shadow-lg">
        <div className="text-red-600 text-4xl mb-4">🛢️</div>
        <h3 className="text-xl font-semibold mb-3">Oil Services</h3>
        <p className="text-gray-700 mb-4">Complete oil heating system installation, servicing, and repair services.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Oil boiler installation</li>
          <li>• Tank installation</li>
          <li>• Annual servicing</li>
          <li>• Emergency repairs</li>
        </ul>
        <div className="mt-4 text-red-600 font-semibold">Starting at £300</div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-500 transition duration-300 shadow-lg">
        <div className="text-red-600 text-4xl mb-4">⚡</div>
        <h3 className="text-xl font-semibold mb-3">System Upgrades</h3>
        <p className="text-gray-700 mb-4">Upgrade your heating and plumbing systems for improved efficiency and performance.</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Central heating upgrades</li>
          <li>• Smart thermostat installation</li>
          <li>• Energy efficiency improvements</li>
          <li>• System optimization</li>
        </ul>
        <div className="mt-4 text-red-600 font-semibold">Contact for quote</div>
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
          href="tel:07907122798" 
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
        >
          Call 07907 122798
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
