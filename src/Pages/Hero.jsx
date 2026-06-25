import HeroBackground from '../Components/HeroBackground'
import Navbar from '../Components/Navbar'
import HeroContent from '../Components/HeroContent'

function Hero() {
    return (
        <div id="hero" className='flex flex-col w-full h-screen relative overflow-hidden '>
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <HeroBackground />
            </div>
            <Navbar />
            <HeroContent />
        </div>
    )
}

export default Hero