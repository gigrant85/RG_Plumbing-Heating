
import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
  <header className="bg-black text-white p-4 sticky top-0 z-50 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="flex items-center hover:opacity-90 transition duration-300">
        <Image 
          src="/rg-logo.svg" 
          alt="RG Plumbing Heating & Renewables" 
          width={160} 
          height={80}
          className="h-12 w-auto"
        />
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
          href="tel:07907122798" 
          className="bg-white text-blue-700 hover:bg-gray-100 px-4 py-2 rounded-lg font-bold transition duration-300 whitespace-nowrap shadow-md"
        >
          📞 07907 122798
        </a>
      </div>
    </div>
  </header>
);

export default Header;
