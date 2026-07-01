import { useState } from 'react'
import Mouse from '../assets/MouseBig.webp'
import BottomMouseImg from '../assets/bottom.webp'
import DPI from '../assets/DPI.webp'
import Prog from '../assets/11-Prog.webp'
import AdditionalFeatures from './AdditionalFeatures'
import { motion } from 'framer-motion'

function Features() {
    const [showAdditional, setShowAdditional] = useState(false)

    return (
        <div id="features" className=' w-full bg-black text-white flex flex-col items-center justify-start pb-20 px-6 lg:px-20'>
            <h2 className="text-3xl md:text-4xl pt-20 font-bold text-center mb-6">A REBORN HERO</h2>
            <p className="text-center text-md md:text-lg w-full sm:w-[80%] max-w-3xl mb-4">G502 HERO features an advanced optical sensor for maximum tracking accuracy, customizable RGB lighting, custom game profiles, from 200 up to 25,600 DPI, and repositionable weights.</p>
            <img className='w-full max-w-5xl' src={Mouse} alt="Mouse" />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mx-auto mb-10 w-full max-w-6xl mt-10'>
                {/* Pair 1 */}
                <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    src={BottomMouseImg} alt="Hero 25K Sensor" className='w-full rounded-2xl lg:order-1' />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='w-full lg:order-4 flex flex-col justify-center'>
                    <h3 className='text-xl md:text-2xl mb-2 font-semibold'>Hero 25K Sensor</h3>
                    <p className='text-sm md:text-md text-stone-300'>HERO 25K is our most accurate gaming sensor, with next-gen precision and a ground-up architecture. With the fastest frame rate processing yet, HERO is capable of 400+ IPS across the 100 - 25,600 DPI range with zero smoothing, filtering or acceleration. HERO 25K achieves competition-level precision and consistent responsiveness. Be sure to customize and tune your DPI settings using Logitech G HUB to lock in the perfect sensitivity and have your landing every shot.</p>
                </motion.div>

                {/* Pair 2 */}
                <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    src={Prog} alt="11 Programmable Buttons" className='w-full rounded-2xl lg:order-2' />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='w-full lg:order-5 flex flex-col justify-center'>
                    <h3 className='text-xl md:text-2xl mb-2 font-semibold'>11 Programmable Buttons</h3>
                    <p className='text-sm md:text-md text-stone-300'>Use Logitech G HUB to program your favorite commands and macros to each of the 11 buttons. Build, crouch, melee, heal: whatever your essential commands are, put them right at your fingertips for easy, time-saving access. Save ready-to-play profiles directly to the mouse to take your settings with you anywhere.</p>
                </motion.div>

                {/* Pair 3 */}
                <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    src={DPI} alt="On-the-Fly DPI" className='w-full rounded-2xl lg:order-3' />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className='w-full lg:order-6 flex flex-col justify-center'>
                    <h3 className='text-xl md:text-2xl mb-2 font-semibold'>On-the-Fly DPI</h3>
                    <p className='text-sm md:text-md text-stone-300'>Cycle up and down through as many as five DPI settings with a single click. Three DPI indicator lights tell you which setting you are on. Customize these DPI settings with Logitech G HUB or use the default settings out-of-the-box.</p>
                </motion.div>
            </div>
            <button
                onClick={() => setShowAdditional(true)}
                className='bg-cyan-400 hover:bg-cyan-500 py-3 px-8 rounded-full text-black font-semibold cursor-pointer'
            >
                View more Features
            </button>

            {showAdditional && <AdditionalFeatures onClose={() => setShowAdditional(false)} />}

        </div >
    )
}

export default Features