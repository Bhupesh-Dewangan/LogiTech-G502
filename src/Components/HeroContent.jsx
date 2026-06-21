import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

function HeroContent() {
    return (
        <div className='px-20 py-5 grid grid-cols-2 gap-2 w-full h-full relative '>
            <div className=" font-semibold">
                <HeroText />
            </div>
            <div className="">
                <HeroImage />
            </div>
        </div>
    )
}

export default HeroContent