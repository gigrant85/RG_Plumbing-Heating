
const AboutPage = () => (
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">About RG Plumbing Heating & Renewables</h1>
      <p className="text-xl text-gray-700">Your trusted partner for plumbing, heating, and renewable energy solutions</p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 mb-12">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Founded with a vision to provide comprehensive home comfort solutions, RG Plumbing Heating & Renewables 
          has been serving the community with reliable, professional services. What started as a small family business 
          has grown into the area&apos;s most trusted provider of plumbing, heating, and renewable energy solutions.
        </p>
        <p className="text-gray-700">
          We pride ourselves on honest work, fair pricing, and exceptional customer service. 
          Our team of certified engineers and technicians brings decades of combined experience to every job, 
          from emergency repairs to complete renewable energy installations.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Why Choose Us?</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">Licensed and fully insured</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">24/7 emergency service available</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">Upfront, transparent pricing</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">100% satisfaction guarantee</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">Clean, professional technicians</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-gray-50 p-8 rounded-lg mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Integrity</h3>
          <p className="text-gray-700">We do what&apos;s right, even when no one is watching. Honest assessments and fair pricing, always.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Excellence</h3>
          <p className="text-gray-700">We strive for perfection in every job, using quality materials and proven techniques.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Service</h3>
          <p className="text-gray-700">Your satisfaction is our priority. We&apos;re not done until you&apos;re completely happy.</p>
        </div>
      </div>
    </div>

    <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Ready to Experience the Difference?</h2>
      <p className="text-lg mb-6">Join thousands of satisfied customers who trust RG for all their home comfort needs</p>
      <a 
        href="tel:123-456-7890" 
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
      >
        Call (123) 456-7890
      </a>
    </div>
  </div>
);

export default AboutPage;
