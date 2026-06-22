import React from 'react'

function Specification() {
    return (
        <div className="w-full h-full text-white bg-radial-[at_119%_70%] from-black via-stone-950 via 70% to-stone-950 to 82% overflow-hidden pb-20">
            <h2 className="text-4xl pt-20 font-bold text-center mb-16">SPECIFICATIONS</h2>

            <div className='grid grid-cols-3 grid-rows-1 gap-10 mx-20'>
                <div className='flex flex-col justify-items-start items-center border border-zinc-500 py-6 px-12'>
                    <h3 className='font-semibold text-2xl mb-6'>Physical Specification</h3>
                    <ul className='flex flex-col gap-3 list-disc mb-6 pl-4'>
                        <li className='text-md'>Height: 131.2 mm</li>
                        <li className='text-md'>Width: 75 mm</li>
                        <li className='text-md'>Depth: 40 mm</li>
                        <li className='text-md'>Weight: 121 g</li>
                        <li className='text-md'>Adjustable Weights: Up to 18 g (5 x 3.6 g)</li>
                        <li className='text-md'>Programmable Buttons: 11</li>
                        <li className='text-md'>Cable Length: 2.1 m</li>
                    </ul>

                    <p className='font-semibold w-full text-left text-lg'>Gesture Buttons : Yes</p>
                    <p className='font-semibold w-full text-left text-lg'>Battery Required : No </p>
                </div>

                <div className='flex flex-col items-center border border-zinc-500 py-6 px-12'>
                    <h3 className='font-semibold text-2xl mb-6'>Technical Specification</h3>
                    <div className='w-full'>
                        <h4 className='w-full text-left text-lg mb-2 font-semibold'>General Specifications</h4>
                        <ul className='flex flex-col gap-3 list-disc pl-5 mb-10'>
                            <li className='text-md'>Onboard memory: Up to 5 profiles (requires firmware 127.1.7)</li>
                            <li className='text-md'>LIGHTSYNC RGB: 1 zone</li>
                        </ul>
                    </div>

                    <div className='w-full'>
                        <h4 className='w-full text-left text-lg mb-2 font-semibold'>Tracking</h4>
                        <ul className='flex flex-col gap-3 list-disc pl-5 mb-6'>
                            <li className='text-md'>Sensor: HERO</li>
                            <li className='text-md'>Resolution - Tracking: 100 - 25,600 DPI</li>
                            <li className='text-md'>Max. acceleration: &gt; 40 G</li>
                            <li className='text-md'>Max. speed: &gt; 400 IPS</li>
                            <li className='text-md'>Zero smoothing/acceleration/filtering: Yes</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col justify-items-start items-center border border-zinc-500 py-6 px-12'>
                    <h3 className='font-semibold text-2xl mb-6'>Other Specification</h3>

                    <div className='w-full'>
                        <h4 className='w-full text-left text-lg mb-2 font-semibold'>Responsiveness</h4>
                        <ul className='flex flex-col gap-3 list-disc pl-5 mb-10'>
                            <li className='text-md'>USB data format: 16 bits/axis</li>
                            <li className='text-md'>USB report rate: 1000Hz (1ms)</li>
                            <li className='text-md'>Microprocessor: 32-bit ARM</li>
                        </ul>
                    </div>

                    <div className='w-full'>
                        <h4 className='w-full text-left text-lg mb-2 font-semibold'>Durability</h4>
                        <ul className='flex flex-col gap-3 list-disc pl-5 mb-10'>
                            <li className='text-md'>Button (left/right): 50-million clicks</li>
                            <li className='text-md'>Footsteps: 250 km</li>
                        </ul>
                    </div>

                    <div className='w-full'>
                        <h4 className='w-full text-left text-lg mb-2 font-semibold'>System Requirements</h4>
                        <ul className='flex flex-col gap-3 list-disc pl-5 mb-10'>
                            <li className='text-md'>Windows® 7 or later</li>
                            <li className='text-md'>macOS 10.11 or later</li>
                            <li className='text-md'>ChromeOS</li>
                            <li className='text-md'>USB port</li>
                        </ul>
                    </div>
                </div>



            </div>


        </div>
    )
}

export default Specification






{/*  */ }