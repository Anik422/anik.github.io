import React, { useContext } from "react";
import navbar_info from "../../database/navbar_info.json";
import StateContext from "../Context/StateContext";
import DispatchContext from "../Context/DispatchContext";

function Navbar() {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const { darkMode } = state;

    const firstName = navbar_info.first_name;
    const lastName = navbar_info.last_name;
    const nav_links = navbar_info.nav_links;

    const handleNavigation = (section) => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    };

    const toggleDarkMode = () => {
        dispatch({ type: 'TOGGLE_DARK_MODE' });
    };

    return (
        <nav className="navbar">
            <div className="max-w-[55ch] mx-auto px-4 md:px-0 pb-2">
                <div className="grid grid-cols-12 my-4">
                    <div className="col-span-3">
                        <a href="/" className="font-semibold">
                            <span className="block overflow-hidden group relative h-[24px]">
                                <p className="absolute left-0 top-0 group-hover:-top-[24px] transition-all">
                                    {firstName}
                                </p>
                                <p className="absolute left-0 top-10 group-hover:-top-0 transition-all">
                                    {lastName}
                                </p>
                            </span>
                        </a>
                    </div>
                    <div className="col-span-9 relative">
                        <ul className="list-none absolute right-0">
                            {nav_links.map((link) => (
                                <li 
                                    key={link.id} 
                                    onClick={() => handleNavigation(link.link)} 
                                    className="float-left px-2 md:px-4 hover:text-blue-400 hover:cursor-pointer"
                                >
                                    {link.icon} {link.name}
                                </li>
                            ))}
                            <li 
                                className="mode-toggle float-left px-1 md:px-4 hover:cursor-pointer"
                                onClick={toggleDarkMode}
                            >
                                {darkMode ? '☀︎' : '⏾'}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;