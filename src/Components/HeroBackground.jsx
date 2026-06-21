import React from 'react'

function HeroBackground() {
    return (
        <div className='flex w-full h-screen -z-10'>
            <div className='w-[65%] h-full bg-radial-[at_56%_100%] from-stone-950 to-neutral-900'></div>
            <div className='bg-radial-[at_16%_100%] from-stone-950 to-neutral-900 w-[35%] h-full'></div>
        </div>
    )
}

export default HeroBackground