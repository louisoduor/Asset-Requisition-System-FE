import React, { useState } from 'react';

function UserAccountPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLinkClick = () => {
        setIsSidebarOpen(false);
    };

    // Dummy data for user information and assigned assets
    const userData = {
        profilePicture: "./src/assets/profile_picture.jpg",
        username: "Steph Doe",
        email: "Steph.doe@example.com",
        assignedAssets: [
            {
                id: 1,
                assetName: "Laptop",
                serialNumber: "ABC123",
                brand: "Dell",
                model: "Latitude E7450"
            },
            {
                id: 2,
                assetName: "Monitor",
                serialNumber: "DEF456",
                brand: "Samsung",
                model: "S24F350"
            }
        ]
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

            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src="./src/assets/LOGO.png" alt="Logo" className="h-80 w-80 opacity-30" />
            </div>

            
            <div className="flex flex-col flex-1">
                <div className="text-lg font-bold pl-4 py-2 text-orange-500">
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
                    USER (ADMIN)
                </div>

                <div className="flex-1 bg-gray-200 p-4">
                    {/* User Profile Card */}
                    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
                        <div className="p-6">
                            <div className="flex justify-center">
                                <img className="h-32 w-32 rounded-full" src={userData.profilePicture} alt="Profile" />
                            </div>
                            <div className="text-center mt-4">
                                <h1 className="text-xl font-bold">{userData.username}</h1>
                                <p className="text-gray-500">{userData.email}</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-200">
                            <ul>
                                {userData.assignedAssets.map(asset => (
                                    <li key={asset.id} className="p-4 border-b border-gray-200">
                                        <h2 className="text-lg font-bold">{asset.assetName}</h2>
                                        <p>Serial Number: {asset.serialNumber}</p>
                                        <p>Brand: {asset.brand}</p>
                                        <p>Model: {asset.model}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAccountPage;
