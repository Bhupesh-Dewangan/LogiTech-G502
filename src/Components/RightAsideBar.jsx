import { FaXTwitter, FaDiscord, FaYoutube, FaInstagram, FaTwitch } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

function RightAsideBar() {
    const [isFooter, setIsFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('footer');
            if (footer) {
                const rect = footer.getBoundingClientRect();
                // If footer is visible in the viewport
                if (rect.top <= window.innerHeight - 50) {
                    setIsFooter(true);
                } else {
                    setIsFooter(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Trigger once to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`hidden lg:block w-12 h-full fixed right-2 top-0 z-50 transition-opacity duration-300 ${isFooter ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="flex flex-col gap-6 justify-center items-center h-full w-full text-zinc-500">
                <FaXTwitter size={20} className="hover:text-cyan-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
                <FaDiscord size={20} className="hover:text-cyan-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
                <FaYoutube size={20} className="hover:text-cyan-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
                <FaInstagram size={20} className="hover:text-cyan-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
                <FaTwitch size={20} className="hover:text-cyan-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
            </div>
        </div>
    )
}

export default RightAsideBar