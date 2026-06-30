import React from "react";
import logoSrc from '../assets/BrandName.png'

const Loader = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-black overflow-hidden font-sans antialiased select-none">
            {/* Custom keyframes and animations */}
            <style>{`
        /* Logo reveal: clip from left to right */
        @keyframes revealLogo {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0% 0 0); }
        }
        /* Fade in + slide up */
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 0.7; transform: translateY(0); }
        }
        
        /* Apply animations to specific classes */
        .animate-reveal-logo { animation: revealLogo 2.4s cubic-bezier(0.22,0.61,0.36,1) 0.3s forwards; }
        .animate-fade-in-up { animation: fadeInUp 1.4s cubic-bezier(0.4,0.0,0.2,1) 2s forwards; opacity: 0; }
        
      `}</style>


            {/* Main content */}
            <div className="relative z-20 flex flex-col items-center gap-5">
                {/* Logo reveal container with clip-path animation */}
                <div className="relative animate-reveal-logo" style={{ clipPath: "inset(0 100% 0 0)" }}>
                    {/* Logo SVG or custom image */}
                    <img
                        src={logoSrc}
                        alt="LogiTech"
                        className="h-13 w-auto md:h-14 lg:h-16 object-contain"
                    />
                </div>

                {/* Tagline */}
                <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-400 animate-fade-in-up">
                    Precision and Innovation
                </p>
            </div>

        </div>
    );
};

export default Loader;