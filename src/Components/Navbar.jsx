import { FiShoppingBag } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";

import BrandLogo from "../assets/BrandName.png"

function Navbar() {
    return (
        <div className="flex px-20 py-6 items-center justify-between text-white border-b border-[#716d6d]">
            <img src={BrandLogo} alt="LOGO" className="w-40 " />
            <nav className="">
                <ul className='flex gap-22 justify-center'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Support</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="flex gap-3">
                <div className="flex items-center gap-2">
                    <FiShoppingBag />
                    <button className="">Buy Now</button>
                </div>

                <span className="">|</span>

                <div className="flex items-center gap-2">
                    <IoMdPerson />
                    <button className="">Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;