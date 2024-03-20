import React, { useState } from 'react';

function AdminMainPage() {
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
            <div className={`bg-blue-950 text-white w-64 flex flex-col ${isSidebarOpen ? '' : 'hidden sm:flex'}`}>
                <div className="flex items-center justify-center px-4 py-6">
                    <img src="./src/assets/logo2.png" alt="Logo" className="h-26 w-29 mb-12" />
                </div>

                <div className="flex items-center justify-center mb-2">
                    <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                </div>

                <div className="text-center mb-2 text-lg font-bold cursor-pointer">Account</div>

                <nav className="flex-1 flex flex-col">
                    <ul>
                        <li className="flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-blue-900">
                            <span className="text-lg font-bold" onClick={handleLinkClick}>Dashboard</span>
                        </li>
                        <li className="flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-blue-900">
                            <span className="text-lg font-bold" onClick={handleLinkClick}>Requests</span>
                        </li>
                        <li className="flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-blue-900">
                            <span className="text-lg font-bold" onClick={handleLinkClick}>A. Available</span>
                        </li>
                    </ul>
                </nav>
                <button className="text-lg font-bold mt-auto px-4 py-2 bg-orange-500 hover:bg-orange-600">Logout</button>
            </div>

            {/* Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src="./src/assets/LOGO.png" alt="Logo" className="h-80 w-80 opacity-30" />
            </div>

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
                    Home (ADMIN)
                </div>

                <div className="flex-1 bg-gray-200 p-4">
                    {/* Main Content Goes Here */}
                </div>
            </div>
        </div>
    );
}

export default AdminMainPage;
