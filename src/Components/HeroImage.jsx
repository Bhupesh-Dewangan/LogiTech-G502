import { motion } from 'framer-motion';
import Mouse from '../assets/HeroImage.png'
import M1 from '../assets/H1.png';
import M2 from '../assets/H2.png'
import M3 from '../assets/H3.png'
import M4 from '../assets/H4.png'


function HeroImage() {
    return (
        <div className='flex items-end justify-between px-6 mt-10 relative'>
            {/* Background Glow */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none'></div>

            <motion.img
                src={Mouse}
                alt="Logitech G502 Mouse"
                className='w-160 object-contain z-10 drop-shadow-2xl'
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

            <div className='flex flex-col justify-center gap-6 z-10'>
                {[M1, M2, M3, M4].map((img, index) => (
                    <div key={index} className='p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer group'>
                        <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className='h-20 w-20 object-contain group-hover:scale-110 transition-transform duration-300'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeroImage
