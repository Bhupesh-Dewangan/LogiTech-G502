import React, { useState } from 'react'
import { IoCloseOutline, IoCubeOutline, IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import P1 from '../assets/P1.webp'
import P2 from '../assets/P2.webp'
import P3 from '../assets/P3.webp'
import P4 from '../assets/P4.webp'
import P5 from '../assets/P5.webp'
import P6 from '../assets/P6.webp'

function Preview({ onClose, initialTab = '3d' }) {
    const images = [P2, P5, P3, P4, P1, P6]
    const [activeTab, setActiveTab] = useState(initialTab)

    const handlePrev = () => {
        if (activeTab === '3d') {
            setActiveTab(images.length - 1)
        } else {
            setActiveTab((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
    }

    const handleNext = () => {
        if (activeTab === '3d') {
            setActiveTab(0)
        } else {
            setActiveTab((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            onClick={handleOverlayClick}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300 p-4'
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className='absolute top-6 right-6 text-white/70 hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer focus:outline-none z-50'
                aria-label='Close preview'
            >
                <IoCloseOutline size={42} />
            </button>

            {/* Modal Card */}
            <div className='bg-white rounded-3xl overflow-hidden w-full max-w-4xl h-[80vh] max-h-[660px] shadow-2xl flex flex-col relative transform transition-all duration-300 animate-in fade-in zoom-in-95'>

                {/* Top Section (Main View / 3D Area) */}
                <div className='flex-1 bg-[#eaeaea] relative flex items-center justify-center p-8 select-none overflow-hidden'>

                    {activeTab === '3d' ? (
                        <div className='w-full h-full flex items-center justify-center relative'>
                            <model-viewer
                                src='/3D Model.glb'
                                alt='Logitech G502 3D Model'
                                camera-controls
                                auto-rotate
                                shadow-intensity='1.5'
                                shadow-softness='0.8'
                                exposure='1'
                                style={{ width: '100%', height: '100%', outline: 'none' }}
                                className='w-full h-full cursor-grab active:cursor-grabbing'
                            ></model-viewer>

                            {/* Drag to rotate 3D badge */}
                            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white text-[10px] md:text-[11px] font-semibold tracking-wider uppercase px-4 py-2 rounded-full pointer-events-none flex items-center gap-2 shadow-lg'>
                                <IoCubeOutline className='text-sm animate-spin-slow' />
                                <span>Drag to rotate 3D</span>
                            </div>
                        </div>
                    ) : (
                        <div className='w-full h-full flex items-center justify-center relative'>
                            <img
                                src={images[activeTab]}
                                alt={`Logitech G502 view ${activeTab + 1}`}
                                className='max-w-full max-h-full object-contain drop-shadow-2xl transition-all duration-300 animate-in fade-in'
                            />

                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrev}
                                className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-zinc-800 p-3 rounded-full shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center z-10'
                                aria-label='Previous view'
                            >
                                <IoChevronBackOutline size={20} />
                            </button>
                            <button
                                onClick={handleNext}
                                className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-zinc-800 p-3 rounded-full shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center z-10'
                                aria-label='Next view'
                            >
                                <IoChevronForwardOutline size={20} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Bottom Section (Thumbnail Row) */}
                <div className='h-[120px] flex items-center justify-center bg-white px-6 border-t border-zinc-100'>
                    <div className='flex items-center justify-center gap-4 md:gap-7 w-full overflow-x-auto py-2 scrollbar-none'>

                        {/* 3D Button */}
                        <div
                            onClick={() => setActiveTab('3d')}
                            className='flex flex-col items-center cursor-pointer relative pb-3 px-1'
                        >
                            <div className={`w-14 h-14 rounded-full border flex flex-col items-center justify-center bg-white transition duration-200 ${activeTab === '3d'
                                ? 'border-zinc-300 text-black shadow-sm'
                                : 'border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-black'
                                }`}>
                                <IoCubeOutline size={20} className='mb-0.5' />
                                <span className='text-[9px] font-bold uppercase tracking-wider'>3D</span>
                            </div>
                            {activeTab === '3d' && (
                                <div className='absolute bottom-0 left-0 right-0 h-1 bg-[#00b0ff] rounded-t-full transition-all duration-200' />
                            )}
                        </div>

                        {/* Image Thumbnails */}
                        {images.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className='flex flex-col items-center cursor-pointer relative pb-3 px-1 h-14 w-14 justify-center'
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail view ${index + 1}`}
                                    className={`max-w-full max-h-[85%] object-contain transition duration-200 ${activeTab === index ? 'scale-110 opacity-100' : 'opacity-60 hover:opacity-100 hover:scale-105'
                                        }`}
                                />
                                {activeTab === index && (
                                    <div className='absolute bottom-0 left-0 right-0 h-1 bg-[#00b0ff] rounded-t-full transition-all duration-200' />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview