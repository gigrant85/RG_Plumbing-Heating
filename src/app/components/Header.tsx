
import Link from 'next/link';

const Header = () => (
  <header className="gradient-rg text-white p-4 sticky top-0 z-50 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold hover:text-gray-200 transition duration-300">
        <span className="text-blue-200">RG</span> <span className="text-white">Plumbing Heating & Renewables</span>
      </Link>
      <div className="flex items-center space-x-6">
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-200 transition duration-300 font-medium">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-200 transition duration-300 font-medium">About</Link></li>
            <li><Link href="/services" className="hover:text-gray-200 transition duration-300 font-medium">Services</Link></li>
            <li><Link href="/contact" className="hover:text-gray-200 transition duration-300 font-medium">Contact</Link></li>
          </ul>
        </nav>
        <a 
          href="tel:123-456-7890" 
          className="bg-white text-blue-700 hover:bg-gray-100 px-4 py-2 rounded-lg font-bold transition duration-300 whitespace-nowrap shadow-md"
        >
          📞 (123) 456-7890
        </a>
      </div>
    </div>
  </header>
);

export default Header;
