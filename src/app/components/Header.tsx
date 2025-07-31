
import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
  <header className="bg-slate-900/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-modern-xl border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative overflow-hidden rounded-xl bg-white/5 p-2 group-hover:bg-white/10 transition-all duration-300">
            <Image 
              src="/rg-logo.svg" 
              alt="RG Plumbing Heating & Renewables" 
              width={160} 
              height={80}
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
        
        <div className="flex items-center space-x-8">
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="relative font-semibold text-white/90 hover:text-white transition-colors duration-300 group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-red-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="relative font-semibold text-white/90 hover:text-white transition-colors duration-300 group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-red-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="relative font-semibold text-white/90 hover:text-white transition-colors duration-300 group">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-red-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="relative font-semibold text-white/90 hover:text-white transition-colors duration-300 group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-red-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a 
              href="tel:07907122798" 
              className="btn-modern gradient-modern-red text-white px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap shadow-modern-lg hover:shadow-red-500/25 group"
            >
              <span className="flex items-center gap-2">
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">📞</span>
                <span className="hidden sm:inline">07907 122798</span>
                <span className="sm:hidden">Call</span>
              </span>
            </a>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
