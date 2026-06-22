import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

function HeroContent() {
    return (
        <div className='py-10 flex justify-start w-full h-full relative gap-10'>
            <div className="w-10 flex justify-center items-center">
                {/* Space reservation for fixed LeftAsideBar */}
            </div>
            <div className=" font-semibold w-[45%]">
                <HeroText />
            </div>
            <div className="">
                <HeroImage />
            </div>

            <div className="w-10 flex justify-center items-center">
                {/* Space reservation for fixed RightAsideBar */}
            </div>
        </div>
    )
}

export default HeroContent