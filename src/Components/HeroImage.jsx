import Mouse from '../assets/Mouse.png';
import M1 from '../assets/1.png'
import M2 from '../assets/2.png'
import M3 from '../assets/3.png'
import M4 from '../assets/4.png'

function HeroImage() {
    return (
        <div className='flex items-center justify-between px-10 mt-15 gap-20'>
            <img src={Mouse} alt="Mouse" className='w-95 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer' />
            <div className='flex flex-col justify-between gap-5 h-full'>
                <img src={M1} alt="M1" className='h-25 hover:scale-110 transition-transform duration-300 cursor-pointer' />
                <img src={M2} alt="M2" className='h-25 hover:scale-110 transition-transform duration-300 cursor-pointer' />
                <img src={M3} alt="M3" className='h-25 hover:scale-110 transition-transform duration-300 cursor-pointer' />
                <img src={M4} alt="M4" className='h-25 hover:scale-110 transition-transform duration-300 cursor-pointer' />
            </div>
        </div>
    )
}

export default HeroImage