import FullStar from '../assets/FullStar.png'
import UnStar from '../assets/UnStar.png'

function HeroText() {
    return (
        <div className='text-white flex flex-col gap-2 justify-center items-start h-full z-10 relative'>
            <h1 className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 text-5xl font-extrabold font-['Inter'] tracking-tight drop-shadow-lg">G502 LIGHTSPEED</h1>
            <h2 className="text-gray-300 text-2xl font-semibold font-['Inter'] tracking-wide uppercase mt-1">Wireless Gaming Mouse</h2>
            <p className="text-zinc-400 text-md font-normal font-['Inter'] leading-relaxed w-[90%] mt-6 border-l-4 border-blue-500 pl-4">
                Iconic G502 design meets pro-grade LIGHTSPEED wireless for ultra-fast, reliable connectivity. HERO 25K sensor features sub-micron tracking. POWERPLAY compatible for continuous charging both at rest and play.
            </p>
            <div className='flex gap-2 mt-6 items-center'>
                <div className='flex gap-1 '>
                    <img src={FullStar} alt="Full Star" className='w-5 h-5' />
                    <img src={FullStar} alt="Full Star" className='w-5 h-5' />
                    <img src={FullStar} alt="Full Star" className='w-5 h-5' />
                    <img src={FullStar} alt="Full Star" className='w-5 h-5' />
                    <img src={UnStar} alt="Un Star" className='w-5 h-5 opacity-70' />
                </div>
                <span className='text-zinc-400 text-sm ml-2'>(4.8/5 Reviews)</span>
            </div>
            <div className='mt-12 flex items-center gap-6'>
                <span className='text-3xl text-white font-bold font-["Inter"]'>$89.99</span>
                <button className='px-8 py-3 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full cursor-pointer hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]'>
                    Learn more
                </button>
            </div>
        </div>
    )
}

export default HeroText; 