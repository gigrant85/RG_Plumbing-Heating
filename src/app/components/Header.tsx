
import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-600 text-white p-4 sticky top-0 z-50 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition duration-300">
        🔧 Awesome Plumbing
      </Link>
      <div className="flex items-center space-x-6">
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-blue-200 transition duration-300 font-medium">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-200 transition duration-300 font-medium">About</Link></li>
            <li><Link href="/services" className="hover:text-blue-200 transition duration-300 font-medium">Services</Link></li>
            <li><Link href="/contact" className="hover:text-blue-200 transition duration-300 font-medium">Contact</Link></li>
          </ul>
        </nav>
        <a 
          href="tel:123-456-7890" 
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition duration-300 whitespace-nowrap"
        >
          📞 (123) 456-7890
        </a>
      </div>
    </div>
  </header>
);

export default Header;
