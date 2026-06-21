import FullStar from '../assets/FullStar.png'
import UnStar from '../assets/UnStar.png'


function HeroText() {
    return (
        <div className='text-white flex flex-col gap-2 justify-center h-full '>
            <h1 className="text-white text-5xl font-bold font-['Inter'] tracking-wide">G502 LIGHTSPEED</h1>
            <h2 className="text-white text-2xl font-normal font-['Inter'] tracking-wide">Wireless Gaming Mouse</h2>
            <p className="text-zinc-500 text-md font-normal font-['Inter'] leading-7 w-5/7 mt-8">Iconic G502 design meets pro-grade LIGHTSPEED wireless for ultra-fast, reliable connectivity. HERO 25K sensor features sub-micron tracking. POWERPLAY compatible for continuous charging both at rest and play</p>
            <div className='flex gap-2 mt-5'>
                <img src={FullStar} alt="Full Star" className='w-4 h-4' />
                <img src={FullStar} alt="Full Star" className='w-4 h-4' />
                <img src={FullStar} alt="Full Star" className='w-4 h-4' />
                <img src={FullStar} alt="Full Star" className='w-4 h-4' />
                <img src={UnStar} alt="Un Star" className='w-4 h-4' />
            </div>
            <div className='mt-14 flex gap-4'>
                <button className='px-4 py-2 text-2xl text-white'>$89.99</button>
                <button className='px-4 py-2 bg-white text-black rounded-full cursor-pointer hover:scale-105'>Learn more</button>
            </div>
        </div>
    )
}

export default HeroText; 