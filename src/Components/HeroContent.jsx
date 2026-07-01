import HeroImage from "./HeroImage";
import { HeroTitle, HeroDetails } from "./HeroText";
import { motion } from "framer-motion"

function HeroContent() {
    return (
        <div className='py-20 md:py-24 lg:py-16 flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full min-h-[80vh] relative overflow-hidden text-white'>
            <div className="hidden lg:flex w-10 justify-center items-center">
                {/* Space reservation for fixed LeftAsideBar */}
            </div>

            <motion.div className="w-full lg:w-[40%] px-6 sm:px-10 lg:pl-10 mt-8 lg:mt-0 pt-10 lg:pt-20 flex flex-col justify-center lg:block text-center lg:text-left z-10 order-1 lg:order-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}>
                <HeroTitle />
                <div className="hidden lg:block mt-6">
                    <HeroDetails />
                </div>
            </motion.div>

            <div className="w-full lg:w-[50%] mt-8 lg:mt-0 flex justify-center lg:justify-end px-6 sm:px-10 lg:pr-10 animate-fade-in z-10 pb-4 lg:pb-0 order-2 lg:order-0">
                <HeroImage />
            </div>

            <div className="w-full lg:hidden px-6 sm:px-10 flex flex-col justify-center text-center z-10 order-3 pb-10">
                <HeroDetails />
            </div>

            <div className="hidden lg:flex w-10 justify-center items-center">
                {/* Space reservation for fixed RightAsideBar */}
            </div>
        </div>
    )
}

export default HeroContent
