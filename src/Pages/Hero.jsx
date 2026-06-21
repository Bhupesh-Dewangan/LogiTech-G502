import HeroBackground from '../Components/HeroBackground'
import Navbar from '../Components/Navbar'

function Hero() {
    return (
        <div className='flex flex-col w-full h-screen relative overflow-hidden '>

            <div className="absolute inset-0 -z-10 pointer-events-none">
                <HeroBackground />
            </div>


            <Navbar />
        </div>
    )
}

export default Hero