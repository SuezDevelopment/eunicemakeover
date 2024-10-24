import React, { useState } from 'react';
const NavHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/0 rounded-lg shadow-lg px-4 py-4 sm:px-8 lg:px-20 flex items-center justify-between z-50">
            <div className="flex items-center gap-2">
                <span className="text-3xl font-light text-[#1e1e1e] leading-loose">
                    Eunice
                </span>
                <span className="text-xl font-normal text-[#1e1e1e] font-['Lato'] leading-loose">
                    {' '}
                </span>
                <span className="text-3xl font-bold text-[#1e1e1e] leading-loose">
                    Makeover
                </span>
            </div>
            <div className="lg:flex items-center gap-4 hidden">
                <a
                    href="#"
                    className="text-base font-normal text-[#1e1e1e] leading-relaxed tracking-tight"
                >
                    Pricing
                </a>
                <span className="text-black/20 text-base font-light leading-relaxed tracking-tight">
                    /
                </span>
                <a
                    href="#"
                    className="text-base font-normal text-[#1e1e1e] leading-relaxed tracking-tight"
                >
                    Services
                </a>
                <span className="text-black/20 text-base font-light leading-relaxed tracking-tight">
                    /
                </span>
                <a
                    href="#"
                    className="text-base font-normal text-[#1e1e1e] leading-relaxed tracking-tight"
                >
                    Contact us
                </a>
            </div>
            <button className="h-10 px-4 rounded-2xl border border-black/25 text-[#1e1e1e] text-base font-normal leading-relaxed tracking-tight lg:inline-block hidden">
                Book a session
            </button>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden"
                onClick={() => {
                    setIsMenuOpen(!isMenuOpen)
                }}
            >
                <svg
                    className="w-9 h-9"
                    fill="none"
                    stroke="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                            isMenuOpen
                                ? 'M6 18L18 6M6 6l12 12'
                                : 'M4 6h16M4 12h16m-7 6h7'
                        }
                    />
                </svg>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full z-40 left-0 w-full bg-black shadow-md rounded-md mt-2">
                    <ul className="py-4 px-6 space-y-4">
                        <li>
                            <a
                                href="#"
                                className="text-base font-normal text-[#1e1e1e] leading-relaxed tracking-tight block"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-base font-normal text-[#1e1e1e] leading-relaxed tracking-tight block"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-base font-normal text-[#1e1e1e] leading-relaxed tracking-tight block"
                            >
                                Contact us
                            </a>
                        </li>
                        <li>
                            <button className="h-10 px-4 rounded-2xl border border-black/25 text-[#1e1e1e] text-base font-normal leading-relaxed tracking-tight w-full">
                                Book a session
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default NavHeader;