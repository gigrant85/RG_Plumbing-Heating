
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-8 mt-12">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">🔧 Awesome Plumbing</h3>
          <p className="text-gray-300 mb-4">Your trusted partner for reliable, professional plumbing services. Available 24/7 for emergencies.</p>
          <div className="space-y-2">
            <a href="tel:123-456-7890" className="block text-blue-400 hover:text-blue-300 font-semibold">
              📞 (123) 456-7890
            </a>
            <a href="mailto:contact@awesomeplumbing.com" className="block text-blue-400 hover:text-blue-300">
              ✉️ contact@awesomeplumbing.com
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/services" className="hover:text-white transition duration-300">Emergency Repairs</Link></li>
            <li><Link href="/services" className="hover:text-white transition duration-300">Drain Cleaning</Link></li>
            <li><Link href="/services" className="hover:text-white transition duration-300">Water Heaters</Link></li>
            <li><Link href="/services" className="hover:text-white transition duration-300">Fixture Installation</Link></li>
            <li><Link href="/services" className="hover:text-white transition duration-300">Leak Detection</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/about" className="hover:text-white transition duration-300">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition duration-300">Our Services</Link></li>
            <li><Link href="/contact" className="hover:text-white transition duration-300">Contact Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition duration-300">Get a Quote</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Emergency Service</h4>
          <p className="text-gray-300 mb-4">Available 24/7 for urgent plumbing issues. We typically arrive within 2 hours.</p>
          <a 
            href="tel:123-456-7890" 
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition duration-300 inline-block"
          >
            Emergency Line
          </a>
        </div>
      </div>
      
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-300">&copy; 2025 Awesome Plumbing. All rights reserved.</p>
        <div className="text-gray-300 text-sm mt-4 md:mt-0">
          Licensed • Bonded • Insured
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
