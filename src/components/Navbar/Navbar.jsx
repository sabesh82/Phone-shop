import React from "react";
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About Us",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    name: "Top Sellers",
    link: "/#",
  },
  {
    name: "New Arrivals",
    link: "/#",
  },
  {
    name: "Trending Now",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="container py-3 md:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10 uppercase" />
                <span className="font-bold">Phone</span>Store
              </a>
            </div>
            <div className="flex justify-between items-center gap-2 lg:gap-8">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden md:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-purple-600 duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                {/* Simple Dropdown and Links */}
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-purple-100"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
              <button
                onClick={() => handleOrderPopup()}
                className="hover:bg-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:scale-105 duration-200 py-1 px-4 rounded-full"
              >         
                <FaCartShopping className="text-xl text-black dark:text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
