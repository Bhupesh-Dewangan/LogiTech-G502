import { useState } from 'react'
import Mouse from '../assets/MouseBig.webp'
import BottomMouseImg from '../assets/bottom.webp'
import DPI from '../assets/DPI.webp'
import Prog from '../assets/11-Prog.webp'
import AdditionalFeatures from './AdditionalFeatures'

function Features() {
    const [showAdditional, setShowAdditional] = useState(false)

    return (
        <div className=' w-full bg-black text-white flex flex-col items-center justify-start pb-20'>
            <h2 className="text-4xl pt-20 font-bold text-center mb-6">A ROBORN HERO</h2>
            <p className="text-center text-lg w-200 mb-4">G502 HERO features an advanced optical sensor for maximum tracking accuracy, customizable RGB lighting, custom game profiles, from 200 up to 25,600 DPI, and repositionable weights.</p>
            <img className='w-full' src={Mouse} alt="Mouse" />

            <div className='grid grid-cols-3 grid-rows-2 gap-6 mx-auto mb-10'>
                <img src={BottomMouseImg} alt="" className='w-110 rounded-2xl' />
                <img src={Prog} alt="" className='w-110 rounded-2xl' />
                <img src={DPI} alt="" className='w-110 rounded-2xl' />
                <div className='w-110'>
                    <h3 className='text-2xl mb-2'>Hero 25K Sensor</h3>
                    <p className='text-md'>HERO 25K is our most accurate gaming sensor, with next-gen precision and a ground-up architecture. With the fastest frame rate processing yet, HERO is capable of 400+ IPS across the 100 - 25,600 DPI range with zero smoothing, filtering or acceleration. HERO 25K achieves competition-level precision and consistent responsiveness. Be sure to customize and tune your DPI settings using Logitech G HUB to lock in the perfect sensitivity and have your landing every shot.</p>
                </div>
                <div className='w-110'>
                    <h3 className='text-2xl mb-2'>11 Programmable Buttons</h3>
                    <p className='text-md'>Use Logitech G HUB to program your favorite commands and macros to each of the 11 buttons. Build, crouch, melee, heal: whatever your essential commands are, put them right at your fingertips for easy, time-saving access. Save ready-to-play profiles directly to the mouse to take your settings with you anywhere.</p>
                </div>
                <div className='w-110'>
                    <h3 className='text-2xl mb-2'>On-the-Fly DPI</h3>
                    <p className='text-md'>Cycle up and down through as many as five DPI settings with a single click. Three DPI indicator lights tell you which setting you are on. Customize these DPI settings with Logitech G HUB or use the default settings out-of-the-box.</p>
                </div>
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