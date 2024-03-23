import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import UserIcon from '../assets/user.png';
import requestsIcon from '../assets/request.png';
import availableIcon from '../assets/available.png';
import logo2 from "/src/assets/logo2.png";

function NavUser() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLinkClick = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="relative flex h-screen">
            {/* Sidebar */}
            <aside className={`bg-blue-950 text-white w-64 flex flex-col ${isSidebarOpen ? '' : 'hidden sm:flex'}`}>
                <div className="flex items-center justify-center px-4 py-6">
                    <img src={logo2} alt="Logo" className="h-26 w-29 mb-12" />
                </div>

                <nav className="flex-1 flex flex-col">
                    <div>
                        <li className="flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-blue-900">
                            <img src={UserIcon} alt="Dashboard" className="h-11 w-11 mr-2" />
                            <Link to="user-account" className="text-lg font-bold" onClick={handleLinkClick}>Account</Link>
                        </li>
                    </div>
                    <ul>
                        <li className="flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-blue-900">
                            <img src={requestsIcon} alt="Requests" onClick={handleLinkClick} className="h-16 w-16 mr-2" />
                            <Link to="user-requests" className="text-lg font-bold" onClick={handleLinkClick}>MyRequests</Link>
                        </li>
                        <li className="flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-blue-900">
                            <img src={availableIcon} alt="Available" onClick={handleLinkClick} className="h-14 w-14 mr-2" />
                            <Link to="available-assets" className="text-lg font-bold" onClick={handleLinkClick}>A.Available</Link>
                        </li>
                    </ul>
                </nav>
                <button className="text-lg font-bold mt-auto px-4 py-2 bg-orange-500 hover:bg-orange-600">Logout</button>
            </aside>

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                <div className="text-lg font-bold pl-4 py-2 text-orange-500">
                    {/* Three Dots */}
                    <button onClick={toggleSidebar} className="sm:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-4 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavUser;
