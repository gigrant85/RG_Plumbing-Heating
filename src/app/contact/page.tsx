
const ContactPage = () => (
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Contact Us</h1>
      <p className="text-xl text-gray-700">Get in touch for fast, reliable plumbing, heating, and renewable energy services</p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 mb-12">
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Get a Free Quote</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a service</option>
              <option value="emergency">Emergency Repair</option>
              <option value="boiler">Boiler Installation/Repair</option>
              <option value="heating">Central Heating System</option>
              <option value="heat-pump">Heat Pump Installation</option>
              <option value="drain-cleaning">Drain Cleaning</option>
              <option value="solar">Solar Thermal System</option>
              <option value="renewables">Renewable Energy</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Please describe your plumbing, heating, or renewable energy service needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Contact Information</h2>
        
        <div className="space-y-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="text-blue-600 text-2xl">📞</div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-700">24/7 Emergency Service</p>
              <a href="tel:07907122798" className="text-blue-600 hover:underline text-lg font-semibold">
                07907 122798
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-blue-600 text-2xl">✉️</div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-700">For quotes and general inquiries</p>
              <a href="mailto:rgphr@hotmail.com" className="text-blue-600 hover:underline">
                rgphr@hotmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-blue-600 text-2xl">📍</div>
            <div>
              <h3 className="font-semibold text-lg">Service Area</h3>
              <p className="text-gray-700">
                We proudly serve the greater metropolitan area<br />
                and surrounding communities within 50 miles.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-blue-600 text-2xl">🕒</div>
            <div>
              <h3 className="font-semibold text-lg">Business Hours</h3>
              <div className="text-gray-700">
                <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p>Saturday: 8:00 AM - 6:00 PM</p>
                <p>Sunday: 9:00 AM - 5:00 PM</p>
                <p className="text-blue-600 font-semibold mt-2">Emergency service available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Need Emergency Service?</h3>
          <p className="text-gray-700 mb-4">Don&apos;t wait! Call us now for immediate assistance with:</p>
          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            <li>• Burst pipes</li>
            <li>• Major water leaks</li>
            <li>• Sewer backups</li>
            <li>• No hot water</li>
          </ul>
          <a 
            href="tel:07907122798" 
            className="block text-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Emergency: 07907 122798
          </a>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 p-8 rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Why Choose RG Plumbing Heating & Renewables?</h2>
      <div className="grid md:grid-cols-4 gap-6">
        <div>
          <div className="text-blue-600 text-3xl mb-2">🚑</div>
          <h4 className="font-semibold">Fast Response</h4>
          <p className="text-sm text-gray-700">Usually arrive within 2 hours</p>
        </div>
        <div>
          <div className="text-blue-600 text-3xl mb-2">💵</div>
          <h4 className="font-semibold">Upfront Pricing</h4>
          <p className="text-sm text-gray-700">No hidden fees or surprises</p>
        </div>
        <div>
          <div className="text-blue-600 text-3xl mb-2">📃</div>
          <h4 className="font-semibold">Licensed & Insured</h4>
          <p className="text-sm text-gray-700">Fully bonded for your protection</p>
        </div>
        <div>
          <div className="text-blue-600 text-3xl mb-2">✅</div>
          <h4 className="font-semibold">Satisfaction Guaranteed</h4>
          <p className="text-sm text-gray-700">100% guarantee on all work</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
