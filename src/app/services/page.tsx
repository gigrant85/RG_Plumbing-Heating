
const ServicesPage = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-slate-800">
          Professional <span className="text-gradient">Services</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Comprehensive plumbing, heating, and renewable energy solutions delivered by certified professionals with cutting-edge technology
        </p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-800">
            Complete Service <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From emergency repairs to full system installations, our expert team handles every project with precision and care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="card-modern p-8 group">
            <div className="w-16 h-16 gradient-modern-blue rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🛁
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">Bathroom Renovations</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">Complete bathroom renovation services from design to installation with premium fixtures and finishes.</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Full bathroom design</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Suite installation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Tiling and flooring</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Plumbing and electrics</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Contact for quote</span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 text-sm">→</span>
              </div>
            </div>
          </div>

          <div className="card-modern p-8 group">
            <div className="w-16 h-16 gradient-modern-blue rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🔥
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">Hot Water Upgrades</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">Upgrade your hot water system for improved efficiency and reliability.</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Cylinder replacements</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Combi boiler upgrades</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Immersion heater installation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>System optimization</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Starting at £800</span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 text-sm">→</span>
              </div>
            </div>
          </div>

          <div className="card-modern p-8 group">
            <div className="w-16 h-16 gradient-modern-blue rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🔧
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">Outside Tap Installations</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">Professional installation of outside taps for garden and external use.</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Garden tap installation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Frost-proof taps</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Pipe work and connections</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Isolation valves</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Starting at £150</span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 text-sm">→</span>
              </div>
            </div>
          </div>

          <div className="card-modern p-8 group">
            <div className="w-16 h-16 gradient-modern-blue rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🚽
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">WC Repairs</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">Professional toilet and WC repair services for all common issues.</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Toilet repairs</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Cistern adjustments</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Seat replacements</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Flush mechanism fixes</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Starting at £80</span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 text-sm">→</span>
              </div>
            </div>
          </div>

          <div className="card-modern p-8 group">
            <div className="w-16 h-16 gradient-modern-blue rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🔧
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">Tap Repair/Replacement</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">Professional tap repair and replacement services for kitchen and bathroom.</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Kitchen tap repairs</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Bathroom tap installation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Mixer tap replacement</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Washer replacements</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Starting at £60</span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 text-sm">→</span>
              </div>
            </div>
          </div>

          <div className="card-modern p-8 group">
            <div className="w-16 h-16 gradient-modern-blue rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              💧
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">Leak Repairs</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">Fast and reliable leak detection and repair services to prevent water damage.</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Pipe leak repairs</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Joint replacements</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Emergency leak fixes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Water damage prevention</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Starting at £120</span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 text-sm">→</span>
              </div>
            </div>
          </div>

          <div className="card-modern p-8 group">
            <div className="w-16 h-16 gradient-modern-red rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🌡️
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-red-600 transition-colors">Air Source Heat Pump</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">Professional installation, servicing, and repair of air source heat pump systems.</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Heat pump installation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>System servicing</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Repairs & maintenance</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Performance optimization</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-red-600 font-bold text-lg">Starting at £6,000</span>
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <span className="text-red-600 text-sm">→</span>
              </div>
            </div>
          </div>

          <div className="card-modern p-8 group">
            <div className="w-16 h-16 gradient-modern-red rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🔥
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-red-600 transition-colors">Natural Gas Services</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">Complete natural gas installation, servicing, and repair services.</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Gas appliance installation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Gas safety checks</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Boiler servicing</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Gas leak repairs</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-red-600 font-bold text-lg">Starting at £200</span>
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <span className="text-red-600 text-sm">→</span>
              </div>
            </div>
          </div>

          <div className="card-modern p-8 group">
            <div className="w-16 h-16 gradient-modern-red rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              ⛽
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-red-600 transition-colors">LPG Services</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">Professional LPG installation, servicing, and repair for all applications.</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>LPG appliance installation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Tank installation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>System servicing</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Safety inspections</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-red-600 font-bold text-lg">Starting at £250</span>
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <span className="text-red-600 text-sm">→</span>
              </div>
            </div>
          </div>

          <div className="card-modern p-8 group">
            <div className="w-16 h-16 gradient-modern-red rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🛢️
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-red-600 transition-colors">Oil Services</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">Complete oil heating system installation, servicing, and repair services.</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Oil boiler installation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Tank installation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Annual servicing</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Emergency repairs</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-red-600 font-bold text-lg">Starting at £300</span>
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <span className="text-red-600 text-sm">→</span>
              </div>
            </div>
          </div>

          <div className="card-modern p-8 group">
            <div className="w-16 h-16 gradient-modern-red rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              ⚡
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-red-600 transition-colors">System Upgrades</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">Upgrade your heating and plumbing systems for improved efficiency and performance.</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Central heating upgrades</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Smart thermostat installation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Energy efficiency improvements</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>System optimization</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-red-600 font-bold text-lg">Contact for quote</span>
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <span className="text-red-600 text-sm">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-800">
            Why Choose <span className="text-gradient">RG Services</span>?
          </h2>
          <p className="text-xl text-slate-600">Professional excellence backed by industry-leading standards</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 gradient-modern-blue rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h4 className="text-lg font-bold mb-3 text-slate-800">Rapid Response</h4>
            <p className="text-slate-600">Same-day service available with 24/7 emergency support</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 gradient-modern-red rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">💰</div>
            <h4 className="text-lg font-bold mb-3 text-slate-800">Transparent Pricing</h4>
            <p className="text-slate-600">Clear upfront estimates with no hidden fees or surprises</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">🛡️</div>
            <h4 className="text-lg font-bold mb-3 text-slate-800">Quality Guarantee</h4>
            <p className="text-slate-600">100% satisfaction guarantee on all work performed</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">👨‍🔧</div>
            <h4 className="text-lg font-bold mb-3 text-slate-800">Expert Team</h4>
            <p className="text-slate-600">Licensed, certified, and continuously trained professionals</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Need Service <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Today</span>?
        </h2>
        <p className="text-xl text-slate-300 mb-12">
          Don&apos;t wait - contact our professional team for fast, reliable service you can trust
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="tel:07907122798" 
            className="btn-modern gradient-modern-red text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-modern-xl hover:shadow-red-500/25"
          >
            <span className="flex items-center justify-center gap-3">
              <span className="text-2xl">📞</span>
              <span>Call 07907 122798</span>
            </span>
          </a>
          <a 
            href="/contact" 
            className="btn-modern bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20"
          >
            Get Free Quote →
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
