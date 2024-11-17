import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const menus = [
    { name: "HOME" },
    { name: "SCORE BOARD" },
    { name: "RESULT" },
    { name: "CONTACT" },
  ];

  return (
    <>
      {/* Header Section */}
      <nav className="flex items-center justify-between pt-8 px-6">
        {/* Toggle Icon */}
        <img
          src={open ? "../src/assets/icon-close.svg" : "../src/assets/icon-hamburger.svg"}
          className="md:hidden cursor-pointer z-20" // Removed `fixed` class here
          onClick={() => setOpen(!open)}
        />
        
        {/* Logo */}
        <img src="../src/assets/logo.svg" alt="logo" className="w-10 ml-7" />

        {/* Menu Items */}
        <ul
          className={`bg-[#ffffff14] backdrop-blur-md md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${
            !open ? "right-[-100%]" : "right-0"
          }`}
        >
          {menus.map((menu, index) => (
            <li
              key={index}
              className="md:inline-block md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-black duration-300"
            >
              <a className="text-black cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
