import { useEffect } from 'react';
import { RxCross1 } from "react-icons/rx";
import AF1 from '../assets/AF1.webp'
import AF2 from '../assets/AF2.webp'
import AF3 from '../assets/AF3.webp'
import AF4 from '../assets/AF4.webp'
import AF5 from '../assets/AF5.webp'
import AF6 from '../assets/AF6.webp'

function AdditionalFeatures({ onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className='fixed inset-0 z-50 w-full h-full bg-white flex flex-col items-center py-5 px-20 justify-start overflow-y-auto'>

            <div className="flex items-center justify-between w-full bg-white z-50">
                <h1 className='text-black text-4xl font-semibold pt-5'>Additional Features</h1>
                <RxCross1 className='text-black cursor-pointer' size={30} onClick={onClose} />
            </div>

            <div className='grid grid-cols-2 grid-rows-6 gap-15 mt-16'>
                <div className="text-black flex flex-col justify-center items-start">
                    <h2 className="font-semibold text-2xl mb-2">DPI Shift Button</h2>
                    <p className="text-md w-[80%]">Add even more control to your game with quick DPI shifting from high to low sensitivity. Conveniently placed on the left side of the mouse, hold the DPI Shift button down to quickly transition to sniper-precision targeting, or crank it up when you need to whip around and target an enemy. Customize the DPI Shift sensitivity in G HUB or change it to execute another function entirely.</p>
                </div>
                <img src={AF1} alt="" className='w-full rounded-2xl' />

                <img src={AF2} alt="" className='w-full rounded-2xl' />
                <div className="text-black flex flex-col justify-center items-start">
                    <h2 className="font-semibold text-2xl mb-2">Onboard Memory</h2>
                    <p className="text-md w-[80%]">Use Logitech G HUB to save your settings to the onboard memory on the mouse and take them with you. Your saved settings will work on any PC without additional software or any login required, so you can take your preferences on the go.</p>
                </div>

                <div className="text-black flex flex-col justify-center items-start">
                    <h2 className="font-semibold text-2xl mb-2">Dual-Mode Hyper-Fast Scroll Wheel</h2>
                    <p className="text-md w-[80%]">Unlock the scroll wheel for hyper-fast continuous scrolling to spin quickly through long pages, or lock it down for single click precision scrolling. The weighty, metal wheel delivers confident, smooth, and satisfying control for either mode.</p>
                </div>
                <img src={AF3} alt="" className='w-full rounded-2xl' />

                <img src={AF4} alt="" className='w-full rounded-2xl' />
                <div className="text-black flex flex-col justify-center items-start">
                    <h2 className="font-semibold text-2xl mb-2">Tunable Weight</h2>
                    <p className="text-md w-[80%]">Fine tune mouse feel and glide to your advantage. Five 3.6g weights come with G502 HERO and are configurable in a variety of front, rear, left, right and center weighted configurations. Experiment with the alignment and balance to find the sweet spot to optimize your gaming performance.</p>
                </div>

                <div className="text-black flex flex-col justify-center items-start">
                    <h2 className="font-semibold text-2xl mb-2">LIGHTSYNC RGB</h2>
                    <p className="text-md w-[80%]">LIGHTSYNC technology is next generation RGB that can be driven by games, audio, or your screen to deliver an immersive RGB experience. Select from a full spectrum of approximately 16.8 million colors and synchronize lighting animations and effects with your other Logitech G devices to turn your gaming setup into a light show worthy of Las Vegas. Customize it all quickly and easily using Logitech G HUB.</p>
                </div>
                <img src={AF5} alt="" className='w-full rounded-2xl' />

                <img src={AF6} alt="" className='w-full rounded-2xl' />
                <div className="text-black flex flex-col justify-center items-start">
                    <h2 className="font-semibold text-2xl mb-2">Game Ready Details</h2>
                    <p className="text-md w-[80%]">In addition to the core performance and personalization features, many details were thoughtfully engineered and designed to address your gaming needs, no matter how small. Look for primary buttons with mechanical switches, rubberized side grips, magnetic weight-cavity door, and more.</p>
                </div>

            </div>

            <button
                onClick={onClose}
                className='bg-cyan-400 hover:bg-cyan-500 py-3 px-12 rounded-full text-black font-semibold my-20 cursor-pointer'
            >
                Close Additional Features
            </button>

        </div>
    )
}

export default AdditionalFeatures