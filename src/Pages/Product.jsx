import P1 from '../assets/P1.webp'
import P2 from '../assets/P2.webp'
import P3 from '../assets/P3.webp'
import P4 from '../assets/P4.webp'
import P5 from '../assets/P5.webp'
import P6 from '../assets/P6.webp'
import { IoImageOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { useState } from 'react'
import Preview from '../Components/Preview'

function Product() {
    const [showPreview, setShowPreview] = useState(false)
    const [initialTab, setInitialTab] = useState('3d')

    const openPreview = (tab) => {
        setInitialTab(tab)
        setShowPreview(true)
    }

    return (
        <div id="product" className='h-full w-full flex flex-col items-center px-6 lg:px-20'>
            <h2 className="text-4xl pt-20 font-bold text-center mb-6">
                Product Preview
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mb-20 w-full max-w-7xl'>
                {/* Card 1: P2 with interactive 3D and gallery options */}
                <div 
                    className='h-full w-full bg-zinc-200 rounded-2xl cursor-pointer hover:bg-zinc-300 transition duration-300 ease-in-out'
                    onClick={() => openPreview('3d')}
                >
                    <img src={P2} className='w-[85%] h-[85%] object-cover mx-auto' alt="Logitech G502 Preview" />
                    <div className='flex items-center justify-between mx-4 pb-10'>
                        <div 
                            className='flex flex-col items-center justify-center cursor-pointer hover:text-[#00b0ff] transition-colors duration-200'
                            onClick={(e) => {
                                e.stopPropagation();
                                openPreview(0); // P2 index
                            }}
                        >
                            <IoImageOutline className='text-lg' />
                            <p className='text-sm'>See all</p>
                        </div>
                        <div 
                            className='flex flex-col items-center justify-center cursor-pointer hover:text-[#00b0ff] transition-colors duration-200'
                            onClick={(e) => {
                                e.stopPropagation();
                                openPreview('3d');
                            }}
                        >
                            <IoCubeOutline className='text-lg' />
                            <p className='text-sm'>360 view</p>
                        </div>
                    </div>
                </div>

                {/* Card 2: P5 */}
                <div 
                    className='h-full w-full bg-zinc-200 rounded-2xl cursor-pointer hover:bg-zinc-300 transition duration-300 ease-in-out'
                    onClick={() => openPreview(1)}
                >
                    <img src={P5} className='w-full h-full object-cover' alt="Logitech G502 Side View" />
                </div>

                {/* Card 3: P3 */}
                <div 
                    className='h-full w-full bg-zinc-200 rounded-2xl cursor-pointer hover:bg-zinc-300 transition duration-300 ease-in-out'
                    onClick={() => openPreview(2)}
                >
                    <img src={P3} className='w-full h-full object-cover' alt="Logitech G502 Angled View" />
                </div>

                {/* Card 4: P4 */}
                <div 
                    className='h-full w-full bg-zinc-200 rounded-2xl cursor-pointer hover:bg-zinc-300 transition duration-300 ease-in-out'
                    onClick={() => openPreview(3)}
                >
                    <img src={P4} className='w-full h-full object-cover' alt="Logitech G502 Bottom View" />
                </div>

                {/* Card 5: P1 */}
                <div 
                    className='h-full w-full bg-zinc-200 rounded-2xl cursor-pointer hover:bg-zinc-300 transition duration-300 ease-in-out'
                    onClick={() => openPreview(4)}
                >
                    <img src={P1} className='w-full h-full object-cover' alt="Logitech G502 Angled Front View" />
                </div>

                {/* Card 6: P6 */}
                <div 
                    className='h-full w-full bg-zinc-200 rounded-2xl cursor-pointer hover:bg-zinc-300 transition duration-300 ease-in-out'
                    onClick={() => openPreview(5)}
                >
                    <img src={P6} className='w-full h-full object-cover' alt="Logitech G502 Angled Side View" />
                </div>
            </div>

            {showPreview && (
                <Preview 
                    initialTab={initialTab} 
                    onClose={() => setShowPreview(false)} 
                />
            )}
        </div>
    )
}

export default Product 