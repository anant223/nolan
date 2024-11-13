import React, { useEffect, useState } from 'react'
import {DashboardHeader, Logo} from "../index"
import { HamBurger } from '../../constant.jsx';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [onScroll, setOnScroll] = useState(0)
  const isDashbord = location.pathname.startsWith("/dashboard");
  const handleHamBurgerBtn = () =>{
    setIsOpen(!isOpen)
  }

  useEffect((()=>{
    const handleScroll = () =>{
      setOnScroll(window.scrollY)
    }
    console.log(onScroll);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)

  }),[])
  return !isDashbord ?
    <header className={`${onScroll > 120 ? "bg-black fixed transition-colors duration-800":"bg-transparent absolute"} w-full h-[60px] py-[2px] z-50 left-0 right-0 top-0  text-white`}>
      <div className="px-6 sm:px-6 h-full flex justify-between items-center mx-auto">
        <div className="flex items-center  relative z-20">
          <button
            className="cursor-pointer mr-4 sm:hidden"
            onClick={handleHamBurgerBtn}
          >
            {HamBurger}
          </button>
          <div>
            <Logo />
          </div>
        </div>
        <nav className="flex items-center flex-1 justify-end">
          <ul className="sm:flex space-x-6 font-semibold hidden mr-6">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">New Project</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>

          <ul
            className={
              isOpen
                ? "w-full fixed bg-gray-700 right-0 bottom-0 left-0 top-0 text-4xl flex flex-col gap-6 font-bold px-10 text-gray-400 items-center justify-center sm:hidden"
                : "sr-only"
            }
          >
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">New Project</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>

          <Link to="/auth">
            <button className="px-[12px] py-[4px] rounded-3xl bg-white text-black font-semibold">
              Log in
            </button>
          </Link>
        </nav>
      </div>
    </header> : <DashboardHeader/>
}

export default Header