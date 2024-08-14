import "./index.css";
import menu from "/src/assets/menu.png"


import { useState } from "react";
function Navbar({ nameLogo, items }) {

    window.onscroll = function () { scrollVerify() };
    function scrollVerify() {

        if (window.scrollY >= 400) {
            setMenuON(false)
        }
    }

    const [menuON, setMenuON] = useState(false)

    const handlerClickMenu = () => {
        setMenuON(prevState => !prevState)
    }

    const renderItems = (href, name,index) => {
        return (
            <li key={index}>
                <a className="nav__menu-item font-bold text-black dark:text-yellow-50 dark:hover:text-gray-50" 
                target="_blank" rel="noopener noreferrer" href={href}>{name}</a>
            </li>
        )
    }

    return (
        <>
            <nav className="container m-0-auto flex gap-1 items-center justify-between h-10  p-6 rounded-full relative z-50">
                <div className="flex items-center">
                    <h5 className="text-gray-900 dark:text-white text-2xl">{nameLogo}</h5>
                </div>
                <div className={`${menuON ? "max-md:opacity-100" : "max-md:opacity-0 max-md:-translate-y-full"} right-0 transition-all flex flex-col md:flex-row gap-6 max-md:gap-8 items-center  max-md:absolute max-md:pt-14 top-0 max-md:bg-black fill-transparent rounded-md max-md:h-screen max-md:w-2/5`}>
                    <div className="md:hidden">
                        <h4 className="text-white text-3xl font-poppins font-extrabold">Menu</h4>
                    </div>
                    <ul className="font-poppins nav__menu-items max-md:self-start max-md:m-3 flex gap-4 flex-col md:flex-row">
                        {

                            items.map((item,index) => {
                                return (
                                    renderItems(item.href, item.name,index)
                                )
                            })}

                    </ul>

                    <div className="nav__social md:hidden">
                        <ul className="flex gap-5 flex-wrap text-gray-900 dark:text-white ">
                            <li><a href="https://www.instagram.com/brayan_tech22/" target="_blank" rel="noopener noreferrer"><i className="social__svg hover:scale-125 transition-transform fa-brands fa-instagram fa-2x xl:fa-2x"></i></a></li>
                            <li><a href="https://github.com/brayanty" target="_blank" rel="noopener noreferrer"><i className="social__svg hover:scale-125 transition-transform fa-brands fa-github fa-2x"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/el-brayan-p-4b9210261/" target="_blank" rel="noopener noreferrer"><i className="social__svg hover:scale-125 transition-transform fa-brands fa-linkedin fa-2x"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div onClick={handlerClickMenu} className="cursor-pointer md:hidden" aria-expanded={menuON}>
                    <img className='nav__menu nav__menu--blank' src={menu} alt="Logo de menu" />
                </div>
            </nav>
        </>
    )
}

export default Navbar