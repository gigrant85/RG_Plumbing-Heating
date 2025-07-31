const HomePage = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="text-center animate-fadeInUp">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Professional <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Plumbing</span> &amp; <span className="text-gradient bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Heating</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner for comprehensive plumbing, heating, and renewable energy solutions. 
            <span className="block mt-2 text-blue-300">Licensed, insured, and available 24/7</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:07907122798" 
              className="btn-modern gradient-modern-red text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-modern-xl hover:shadow-red-500/25 group"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <span>Emergency: 07907 122798</span>
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
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    {/* Why Choose Us Section */}
    <section className="py-24 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-slate-800">
            Why Choose <span className="text-gradient">RG</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional excellence backed by years of experience and cutting-edge solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="card-modern p-8 text-center group">
            <div className="w-20 h-20 mx-auto mb-6 gradient-modern-red rounded-2xl flex items-center justify-center text-white text-3xl animate-float">
              🚑
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">24/7 Emergency Response</h3>
            <p className="text-slate-600 leading-relaxed">Round-the-clock emergency service with typical 2-hour response times. No plumbing crisis is too big or small.</p>
          </div>
          
          <div className="card-modern p-8 text-center group">
            <div className="w-20 h-20 mx-auto mb-6 gradient-modern-blue rounded-2xl flex items-center justify-center text-white text-3xl animate-float" style={{animationDelay: '0.5s'}}>
              📃
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">Certified Professionals</h3>
            <p className="text-slate-600 leading-relaxed">Gas Safe registered engineers with full accreditation. Every technician is licensed, bonded, and continuously trained.</p>
          </div>
          
          <div className="card-modern p-8 text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-3xl animate-float" style={{animationDelay: '1s'}}>
              💵
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">Transparent Pricing</h3>
            <p className="text-slate-600 leading-relaxed">Clear, upfront estimates with no hidden fees. You&apos;ll know exactly what you&apos;re paying before we start work.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Customer Testimonials */}
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-slate-800">
            Trusted by <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-xl text-slate-600">Real reviews from satisfied customers across the region</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-modern p-8 group">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-sm text-slate-500">5.0</span>
            </div>
            <p className="text-slate-700 mb-6 text-lg leading-relaxed">&quot;RG saved the day! Burst pipe at midnight - they arrived within an hour. Professional, efficient, and fair pricing. Outstanding emergency service.&quot;</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-modern-blue rounded-full flex items-center justify-center text-white font-bold text-lg">S</div>
              <div className="ml-3">
                <div className="font-semibold text-slate-800">Sarah Mitchell</div>
                <div className="text-sm text-slate-500">Homeowner</div>
              </div>
            </div>
          </div>
          
          <div className="card-modern p-8 group">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-sm text-slate-500">5.0</span>
            </div>
            <p className="text-slate-700 mb-6 text-lg leading-relaxed">&quot;Excellent heat pump installation. Clear communication, competitive pricing, and impeccable workmanship. Couldn&apos;t be happier with the results.&quot;</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-modern-red rounded-full flex items-center justify-center text-white font-bold text-lg">M</div>
              <div className="ml-3">
                <div className="font-semibold text-slate-800">Mike Robertson</div>
                <div className="text-sm text-slate-500">Business Owner</div>
              </div>
            </div>
          </div>
          
          <div className="card-modern p-8 group">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-sm text-slate-500">5.0</span>
            </div>
            <p className="text-slate-700 mb-6 text-lg leading-relaxed">&quot;Been using RG for years. Always reliable, honest, and deliver quality work. From small repairs to major installations - they&apos;re the best.&quot;</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">J</div>
              <div className="ml-3">
                <div className="font-semibold text-slate-800">Jennifer Lewis</div>
                <div className="text-sm text-slate-500">Property Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services & Coverage Section */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-800">
                Complete <span className="text-gradient">Service Range</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                From emergency repairs to complete system installations, we handle every aspect of your plumbing and heating needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="w-10 h-10 gradient-modern-blue rounded-lg flex items-center justify-center text-white text-sm">🚿</div>
                <span className="font-semibold text-slate-800">Bathroom Renovations</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-red-50 border border-red-100">
                <div className="w-10 h-10 gradient-modern-red rounded-lg flex items-center justify-center text-white text-sm">♨️</div>
                <span className="font-semibold text-slate-800">Heat Pump Systems</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="w-10 h-10 gradient-modern-blue rounded-lg flex items-center justify-center text-white text-sm">♨️</div>
                <span className="font-semibold text-slate-800">Hot Water Upgrades</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-red-50 border border-red-100">
                <div className="w-10 h-10 gradient-modern-red rounded-lg flex items-center justify-center text-white text-sm">🔥</div>
                <span className="font-semibold text-slate-800">Gas & Oil Services</span>
              </div>
            </div>
            
            <a href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group">
              View Complete Service List 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          
          <div className="card-modern p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Service Coverage</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 gradient-modern-blue rounded-full flex items-center justify-center text-white text-xs mt-1">🗺️</div>
                <div>
                  <h4 className="font-semibold text-slate-800">Greater Metropolitan Area</h4>
                  <p className="text-slate-600">Complete coverage within 50-mile radius</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 gradient-modern-red rounded-full flex items-center justify-center text-white text-xs mt-1">🏢</div>
                <div>
                  <h4 className="font-semibold text-slate-800">Residential & Commercial</h4>
                  <p className="text-slate-600">Homes, businesses, and new construction</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs mt-1">🚑</div>
                <div>
                  <h4 className="font-semibold text-slate-800">24/7 Emergency Response</h4>
                  <p className="text-slate-600">Rapid response for urgent situations</p>
                </div>
              </div>
            </div>
            <a href="/contact" className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-semibold group">
              Check Your Area 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA Section */}
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-red-900/50"></div>
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Ready to Get <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Started</span>?
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Don&apos;t let plumbing or heating problems disrupt your life. Contact RG for professional, reliable service today.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="tel:07907122798" 
            className="btn-modern gradient-modern-red text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-modern-xl hover:shadow-red-500/25"
          >
            <span className="flex items-center justify-center gap-3">
              <span className="text-2xl">📞</span>
              <span>Call Now: 07907 122798</span>
            </span>
          </a>
          <a 
            href="/contact" 
            className="btn-modern bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20"
          >
            Request Free Quote →
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
