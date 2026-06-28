import { FiShoppingBag } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex px-4 md:px-10 lg:px-20 py-4 md:py-6 items-center justify-between text-white fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-xl">
            {/* Hamburger Icon - Hidden on desktop */}
            <button
                className={`hamburger ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <svg className="h-8 md:h-10 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438 110" fill="none">
                <path d="M92.0889 74.4112C84.8275 74.4112 79.2162 68.9116 79.2162 61.4704C79.2162 54.3528 84.8275 48.8528 92.0889 48.8528C99.3503 48.8528 104.962 54.3528 104.962 61.4704C105.292 68.9116 99.3503 74.4112 92.0889 74.4112ZM115.854 48.5293V39.794H100.011C97.37 38.8234 94.7295 38.4999 92.0889 38.4999C78.5559 38.4999 67.994 48.5293 67.994 61.794C67.994 75.0585 78.5559 85.0878 92.0889 85.0878C105.622 85.0878 116.184 75.0585 116.184 61.794C116.184 57.2646 114.864 53.0587 112.553 49.8234L115.854 48.5293ZM39.9382 74.4112C32.6768 74.4112 27.0655 68.9116 27.0655 61.4704C27.0655 54.3528 32.6768 48.8528 39.9382 48.8528C47.1997 48.8528 52.8109 54.3528 52.8109 61.4704C52.8109 68.9116 47.1997 74.4112 39.9382 74.4112ZM39.9382 38.4999C26.4054 38.4999 15.8432 48.5293 15.8432 61.794C15.8432 75.0585 26.4054 85.0878 39.9382 85.0878C53.471 85.0878 64.0332 75.0585 64.0332 61.794C64.0332 48.5293 53.471 38.4999 39.9382 38.4999ZM0 83.7939H11.2223V21.3529H0V83.7939ZM120.805 83.7939H132.027V39.794H120.805V83.7939ZM92.0889 99.3234C84.8275 99.3234 79.2162 93.8232 79.2162 86.7057H67.994C67.994 99.97 78.5559 110 92.0889 110C105.622 110 116.184 99.97 116.184 86.7057H104.962C104.962 94.1465 99.3503 99.3234 92.0889 99.3234ZM173.285 57.2646C174.936 51.4411 179.227 48.2058 185.168 48.2058C191.109 48.2058 195.4 51.4411 196.72 57.2646H173.285ZM185.498 38.4999C171.965 38.4999 161.733 48.5293 161.733 62.1175C161.733 75.3818 170.975 85.0878 185.498 85.0878C193.42 85.0878 200.681 82.176 205.963 76.6764L198.371 69.2351C194.74 72.794 190.78 75.0585 185.829 75.0585C179.557 75.0585 174.936 71.4994 173.616 65.9998H208.603V63.4116C208.603 48.5293 199.031 38.4999 185.498 38.4999ZM284.849 38.4999C279.237 38.4999 274.617 40.4411 271.316 43.9999V21.0293H260.094V83.7939H271.316V59.8528C271.316 53.3822 275.277 49.1764 282.208 49.1764C288.479 49.1764 292.11 53.0587 292.11 59.8528V83.7939H303.333V57.9116C303.333 45.6175 295.411 38.4999 284.849 38.4999ZM236.329 49.1764C240.95 49.1764 244.91 51.4411 247.881 54.9999L255.802 47.5587C251.512 42.0587 244.581 38.8234 236.659 38.8234C223.126 38.8234 212.564 48.8528 212.564 62.1175C212.564 75.3818 223.126 85.4118 236.659 85.4118C244.581 85.4118 251.512 81.8527 255.802 76.6764L247.881 68.9116C244.91 72.1467 240.95 74.7352 236.329 74.7352C229.067 74.7352 223.786 69.2351 223.786 62.1175C223.456 54.6763 229.067 49.1764 236.329 49.1764ZM154.142 26.2058H142.919V39.794H136.979V49.4999H142.919V83.7939H154.142V49.4999H160.413V39.794H154.142V26.2058ZM126.416 20.0587C122.455 20.0587 119.155 23.294 119.155 27.4999C119.155 31.3822 122.455 34.6175 126.416 34.6175C130.707 34.6175 134.008 31.3822 134.008 27.4999C134.008 23.294 130.707 20.0587 126.416 20.0587ZM388.49 0V22.3234C370.666 22.3234 356.473 36.2352 356.473 53.7058C356.473 70.8527 370.666 85.0878 388.49 85.0878V107.412C358.123 107.412 333.369 83.4706 333.369 53.7058C333.369 23.9411 358.123 0 388.49 0ZM389.15 43.9999V65.9998H415.556V91.882H438V43.9999H389.15Z" fill="#DDD6D6" />
            </svg>
            <nav className="hidden lg:block">
                <ul className='flex gap-8 xl:gap-22 justify-center text-zinc-400'>
                    <li className="hover:text-cyan-400 cursor-pointer"><a href="#hero"> Home </a> </li>
                    <li className="hover:text-cyan-400 cursor-pointer"><a href="#product">Product</a></li>
                    <li className="hover:text-cyan-400 cursor-pointer"><a href="#features">Features</a></li>
                    <li className="hover:text-cyan-400 cursor-pointer"><a href="#specification">Specification</a></li>
                    <li className="hover:text-cyan-400 cursor-pointer"><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-stone-950/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <ul className='flex flex-col gap-8 text-center text-xl text-zinc-300'>
                    <li className="hover:text-cyan-400 cursor-pointer" onClick={toggleMenu}><a href="#hero"> Home </a> </li>
                    <li className="hover:text-cyan-400 cursor-pointer" onClick={toggleMenu}><a href="#product">Product</a></li>
                    <li className="hover:text-cyan-400 cursor-pointer" onClick={toggleMenu}><a href="#features">Features</a></li>
                    <li className="hover:text-cyan-400 cursor-pointer" onClick={toggleMenu}><a href="#specification">Specification</a></li>
                    <li className="hover:text-cyan-400 cursor-pointer" onClick={toggleMenu}><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="flex gap-2 md:gap-3 text-zinc-400">
                <div className="flex items-center gap-1 md:gap-2 hover:text-cyan-400 cursor-pointer">
                    <FiShoppingBag className="w-5 h-5" />
                    <button className="hidden sm:block">Buy Now</button>
                </div>

                <span className="hidden sm:block">|</span>

                <div className="flex items-center gap-1 md:gap-2 hover:text-cyan-400 cursor-pointer">
                    <IoMdPerson className="w-5 h-5" />
                    <button className="hidden sm:block">Sign In</button>
                </div>
            </div>
        </div >
    )
}

export default Navbar;