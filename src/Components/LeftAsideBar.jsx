import { useEffect, useState } from 'react';

const sections = ['hero', 'product', 'features', 'specification', 'contact'];

function LeftAsideBar() {
    const [activeSection, setActiveSection] = useState('hero');
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

            // Find current active section
            let current = sections[0];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // If the section's top is past the middle of the screen
                    if (rect.top <= window.innerHeight / 2) {
                        current = section;
                    }
                }
            }
            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Trigger once to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`hidden lg:block w-12 h-full fixed left-0 top-0 z-50 transition-opacity duration-300 ${isFooter ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="flex flex-col gap-6 justify-center items-center h-full w-full">
                {sections.map((section) => (
                    <div 
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`cursor-pointer transition-all duration-300 rounded-full ${
                            activeSection === section 
                                ? 'w-3 h-3 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]' 
                                : 'w-2 h-2 bg-stone-500 hover:bg-stone-300 hover:scale-125'
                        }`} 
                    />
                ))}
            </div>
        </div>
    )
}

export default LeftAsideBar;