import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

function HeroContent() {
    return (
        <div className='py-16 flex justify-between items-center w-full min-h-[80vh] relative overflow-hidden'>
            <div className="w-10 flex justify-center items-center">
                {/* Space reservation for fixed LeftAsideBar */}
            </div>

            <div className="w-[40%] pl-10 animate-fade-in-up pt-20">
                <HeroText />
            </div>

            <div className="w-[50%] flex justify-end pr-10 animate-fade-in">
                <HeroImage />
            </div>

            <div className="w-10 flex justify-center items-center">
                {/* Space reservation for fixed RightAsideBar */}
            </div>
        </div>
    )
}

export default HeroContent
