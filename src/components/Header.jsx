import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo.png"


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="text-white flex py-5  z-20 justify-between items-center bg-black px-2 h-24 fixed top-0 w-full  overflow-hidden">
                <div>
                    <img src={logo} width={100} height={100} alt="logo" />
                </div>
                
                {/* {isMenuOpen && ( */}
                    <div className={`flex flex-col fixed  top-0 px-6 h-[100vh] ${isMenuOpen ? '-left-80' : 'left-0'} transition-all duration-300  w-72   text-left bg-black border-gray-800 border-[1px] md:hidden `}>
                        <div className="bg-black">
                            <img
                                className="w-36 bg-inherit py-4"
                                src={logo}
                                width={100}
                                height={100}
                                alt="logo"
                            />
                        </div>
                        <a
                            className="bg-transparent font-Roboto font-medium py-3 pt-10 border-gray-400 border-b-[1px]"
                            href="#home"
                        >
                            Home
                        </a>
                        <a
                            className="bg-transparent  font-Roboto font-medium py-3 border-gray-400 border-b-[1px]"
                            href="#about"
                        >
                            About
                        </a>
                        <a
                            className="bg-transparent font-Roboto font-medium py-3 border-gray-400 border-b-[1px]"
                            href="#projects"
                        >
                            Projects
                        </a>
                        <a
                            className="bg-transparent font-Roboto font-medium py-3 border-gray-400 border-b-[1px]"
                            href="#services"
                        >
                            Services
                        </a>
                    </div>
                {/* )} */}
                <div className="text-3xl mr-6 cursor-pointer md:hidden" onClick={toggleMenu}>
                    <RxHamburgerMenu />
                </div>
                <div className="hidden md:block space-x-6 mx-4 lg:mx-24 lg:space-x-9 font-Roboto bg-black">
                    <a
                        href="#home"
                        className="opacity-50 hover:opacity-100 hover:text-[#fd4766]"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="hover:text-[#fd4766] bg-black"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-[#fd4766] bg-black"
                    >
                        Projects
                    </a>
                    <a
                        href="#services"
                        className="hover:text-[#fd4766] bg-black"
                    >
                        Services
                    </a>
                   
                </div>
            </div>
        </>
    );
};

export default Header;