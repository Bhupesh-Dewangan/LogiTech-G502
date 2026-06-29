import HeroBackground from '../Components/HeroBackground'
import Navbar from '../Components/Navbar'
import HeroContent from '../Components/HeroContent'

function Hero() {
    return (
        <div id="hero" className='flex flex-col w-full min-h-screen lg:h-screen relative overflow-hidden'>
            <div className="absolute inset-0 -z-10 pointer-events-none h-full w-full">
                <HeroBackground />
            </div>
            <Navbar />
            <HeroContent />
        </div>
    )
}

export default Hero