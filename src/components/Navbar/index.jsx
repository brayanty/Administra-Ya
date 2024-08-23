import "./index.css";
import React from "react";
import { useState } from "react";
function Navbar({ nameLogo, items, isSelectModeDark, onDarkMode }) {
  window.onscroll = function () {
    scrollVerify();
  };
  function scrollVerify() {
    if (window.scrollY >= 400) {
      setMenuON(false);
    }
  }

  const [menuON, setMenuON] = useState(false);

  const handlerClickMenu = () => {
    setMenuON((prevState) => !prevState);
  };

  const renderItems = (href, name, icon, index) => {
    return (
      <li key={index}>
        <a
          className="nav__menu-item font-bold text-black dark:text-white max-md:text-white"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          <i className={`mr-1 ${icon}`}> </i> {name}
        </a>
      </li>
    );
  };

  return (
    <>
      <nav className="flex gap-1 items-center justify-between h-10  p-6 relative z-50 dark:bg-slate-800">
        <div className="flex items-center">
          <h5 className="text-gray-900 font-extrabold dark:text-white text-2xl">
            {nameLogo}
          </h5>
        </div>
        <div
          className={`${
            menuON
              ? "max-md:opacity-100"
              : "max-md:opacity-0 max-md:-translate-y-full"
          } right-0 transition-all flex flex-col md:flex-row gap-6 max-md:gap-8 items-center  max-md:absolute max-md:pt-14 top-0 max-md:bg-black fill-transparent rounded-md max-md:h-screen max-md:w-2/5`}
        >
          <div className="md:hidden">
            <h4 className="text-white text-3xl font-poppins font-extrabold">
              Menu
            </h4>
          </div>
          <ul className="font-poppins nav__menu-items max-md:self-start flex ml-4 gap-4 max-md:gap-7 flex-col md:flex-row">
            {items.map((item, index) => {
              return renderItems(item.href, item.name, item.icon, index);
            })}
            <li>
              <button
                aria-label="Modedark"
                className="w-2"
                type="button"
                onClick={() => onDarkMode()}
              >
                {isSelectModeDark === "light" ? (
                  <i className="fa-regular fa-moon fa-xl text-slate-950 max-md:text-stone-50"></i>
                ) : (
                  <i className="fa-regular fa-sun fa-xl text-stone-50"></i>
                )}
              </button>
            </li>
          </ul>

          <div className="nav__social md:hidden">
            <ul className="flex gap-5 flex-wrap text-gray-900 dark:text-white ">
              <li>
                <a
                  href="https://www.instagram.com/brayan_tech22/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-white hover:scale-125 transition-transform fa-brands fa-instagram fa-2x xl:fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/brayanty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-white hover:scale-125 transition-transform fa-brands fa-github fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/el-brayan-p-4b9210261/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-white hover:scale-125 transition-transform fa-brands fa-linkedin fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={handlerClickMenu}
          className={`cursor-pointer md:hidden z-50 ${
            menuON ? "max-md:text-white" : "text-black dark:text-white"
          }`}
        >
          <i className="fa-solid fa-bars fa-3x"></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
