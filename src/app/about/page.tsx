
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
          In today&apos;s rapidly evolving world, maintaining a reliable plumbing and heating system is an essential aspect 
          of ensuring comfort and efficiency in your home. At RG Plumbing Heating and Renewables we understand the 
          challenges you face whether it&apos;s the complexity of a complete heating system renovation or the frustration 
          of a simple dripping tap.
        </p>
        <p className="text-gray-700">
          Our mission is to provide you with unparalleled service that meets your needs, regardless of the job in hand. 
          We pride ourselves on our reliability and commitment to quality. Our team is fully qualified and insured, 
          giving you peace of mind that every job we undertake adheres to the highest standards of workmanship.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Why Choose Us?</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">Gas Safe Registered</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">G1 Grant Accredited Installer</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">Fully licensed and insured</span>
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
        href="tel:07907122798" 
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
      >
        Call 07907 122798
      </a>
    </div>
  </div>
);

export default AboutPage;
