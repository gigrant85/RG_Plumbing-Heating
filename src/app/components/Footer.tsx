
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-900 text-white p-8 mt-12">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">
            <span className="text-blue-400">RG</span> <span className="text-white">Plumbing Heating & Renewables</span>
          </h3>
          <p className="text-gray-300 mb-4">Your trusted partner for reliable plumbing, heating, and renewable energy services. Available 24/7 for emergencies.</p>
          <div className="space-y-2">
            <a href="tel:123-456-7890" className="block text-blue-400 hover:text-blue-300 font-semibold">
              📞 (123) 456-7890
            </a>
            <a href="mailto:contact@rgplumbingheating.com" className="block text-blue-400 hover:text-blue-300">
              ✉️ contact@rgplumbingheating.com
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Plumbing Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/services" className="hover:text-blue-400 transition duration-300">Emergency Repairs</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition duration-300">Drain Cleaning</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition duration-300">Leak Detection</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition duration-300">Fixture Installation</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4 text-red-500">Heating & Renewables</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/services" className="hover:text-red-400 transition duration-300">Boiler Installation</Link></li>
            <li><Link href="/services" className="hover:text-red-400 transition duration-300">Central Heating</Link></li>
            <li><Link href="/services" className="hover:text-red-400 transition duration-300">Heat Pumps</Link></li>
            <li><Link href="/services" className="hover:text-red-400 transition duration-300">Solar Thermal</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4 text-red-500">Emergency Service</h4>
          <p className="text-gray-300 mb-4">Available 24/7 for urgent plumbing and heating issues. We typically arrive within 2 hours.</p>
          <a 
            href="tel:123-456-7890" 
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition duration-300 inline-block shadow-lg"
          >
            Emergency Line
          </a>
        </div>
      </div>
      
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-300">&copy; 2025 <span className="text-blue-400">RG</span> Plumbing Heating & Renewables. All rights reserved.</p>
        <div className="text-gray-300 text-sm mt-4 md:mt-0">
          Licensed • Bonded • Insured
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
