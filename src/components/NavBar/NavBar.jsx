import React, { useState } from "react";
import { LuCigarette } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
const NavBar = () => {
  const Links = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "STOCK",
      link: "/",
    },
    {
      name: "ABOUT US",
      link: "/",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex py-4 md:px-10 px-7 items-center justify-between bg-[#141414]">
        <div className="font-bold px-2 mx-2 text-2x text-white cursor-pointer flex items-center">
          <span className="bg-indigo-300 z-10 h-[35px] w-[35px] rounded-[25px] text-3xl text-indigo-600 mr-2 pt-2">
            <LuCigarette className="ml-[0.1rem] pb-2" />
          </span>
          <span className="ml-2 z-10">E-Cig</span>
        </div>
        <div onClick={() => setOpen(!open)} className={`text-3xl absolute cursor-pointer text-white right-9 top-[1.1rem] md:hidden`}>
          {open ? <IoClose /> : <FiMenu />}
        </div>
        <ul className={`md:flex bg-[#141414] absolute md:z-auto left-0 right-0 z-[-1] w-full md:w-full md:top-auto md:justify-center pl-9 text-white transition-all duration-500 ease-linear ${open ? "top-[100%]" : "top-[-175px]"}`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 mx-5">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
