import { motion } from 'framer-motion';
import Mouse from '../assets/HeroImage.png'
import M1 from '../assets/H1.png';
import M2 from '../assets/H2.png'
import M3 from '../assets/H3.png'
import M4 from '../assets/H4.png'


function HeroImage() {
    return (
        <div className='flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between px-2 sm:px-6 mt-10 relative w-full gap-8 lg:gap-0'>
            {/* Background Glow */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none'></div>

            <motion.img
                src={Mouse}
                alt="Logitech G502 Mouse"
                className='w-64 sm:w-80 md:w-96 lg:w-88 xl:w-120 2xl:w-xl object-contain z-10 drop-shadow-2xl'
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                }}
            />

            <div className='flex flex-row lg:flex-col justify-center gap-4 sm:gap-6 z-10'>
                {[M1, M2, M3, M4].map((img, index) => (
                    <div key={index} className='p-1 sm:p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer group'>
                        <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className='h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain group-hover:scale-110 transition-transform duration-300'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeroImage
