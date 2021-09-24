import React from "react";
import {BiChevronRight,BiSearch,BiChevronDown,BiMenu,BiChevronLeft,BiShareAlt} from "react-icons/bi";
const NavSm = () =>{
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-2xl font-bold">It All Starts Here!</h3>
            </div>
            <div>
               <div className="w-7 h-7"> <BiShareAlt className="w-full h-full"/></div>
            </div>
        </div>
        </>
    )
}


const NavLg = () =>{
    return(
        <>
        <div className="container mx-auto px-4 flex items-center justify-around">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-40 h-full py-3">
                    <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="logo"/>
                </div>

                <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
                    <BiSearch/>
                    <input type="search" className="w-full focus:outline-none" placeholder="Search For Movies, Events, Plays, Sports And Activities"/>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <span className="text-gray-300 text-xs flex items-center hover:text-white cursor-pointer">Rajkot<BiChevronDown/></span>
                <button className="bg-red-600 text-white text-sm rounded px-2 py-1">Sign In</button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>
                </div>
            </div>
        </div>
        </>
    )
    
}

const MovieNavbar=()=>{
    return(
        <>
        <nav className="absolute inset-x-0 z-30 bg-opacity-10 lg:bg-opacity-100 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-800 px-4 py-2">
            <div className="md:hidden">{  //hidden for mor then md
                //mobile screen
                <NavSm/>
            }</div>
            <div className="hidden lg:hidden md:block">{  //all hidden
                //Tablet screen
                <NavSm/>
            }</div>
            <div className=" lg:flex hidden">{  //hidden for more then md
                //desktop screen
                <NavLg/>
            }</div>
        </nav>
        </>
    )
}

export default MovieNavbar;



