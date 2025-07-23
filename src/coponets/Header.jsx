'use client';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import TiSPYLogo from '../assets/Logo/TiSPY-LOGO.webp'

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-sm aline-center">
            {/* fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center relative h-16">
                    {/* Left: Logo */}
                    {/* <div className="flex items-center gap-4 z-10">
            <a href="#" className="flex items-center space-x-2">
              <img src="#" alt="Logo" className="w-auto" />
            </a>
          </div> */}
                    <div className="flex items-center gap-4 z-10">
                        <a href="#" className="flex items-center space-x-2">
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                SCloud
                            </span>
                        </a>
                    </div>



                    {/* Center: Desktop Menu */}
                    <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-6">
                        <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50">Home</a>
                        <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50">Services</a>
                        <a href="#portfolio" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50">Protfolio</a>
                        <a href="#review" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50">Review</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50">Contact</a>
                    </nav>

                    {/* Right: Login + Button */}
                    <div className="hidden lg:flex items-center space-x-4 z-10">
                        <a href="#contact" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium">
                            Get Started
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <div className="lg:hidden z-10">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
                            {mobileMenuOpen ? (
                                <XMarkIcon className="h-6 w-6 transition font-bold duration-200" strokeWidth={2} />
                            ) : (
                                <Bars3Icon className="h-6 w-6 transition duration-200" strokeWidth={2} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 space-y-3 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                        <a href="#" className="block">Home</a>
                        <a href="#services" className="block">Services</a>
                        <a href="#portfolio" className="block">Portfolio</a>
                        <a href="#testimonial" className="block">Review</a>
                        <a href="#contact" className="block">Contact</a>
                        <a href="#contact" className="block text-center bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                            Get Started
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
