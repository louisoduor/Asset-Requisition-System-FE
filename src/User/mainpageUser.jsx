import React, { useState, useEffect } from 'react';
import UserAccountPage from './accountUser'; // Import the AccountPage component


function UserMainPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [devices, setDevices] = useState([]);
    const [showAccountPage, setShowAccountPage] = useState(false); // State to control whether to show the account page

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLinkClick = () => {
        setIsSidebarOpen(false);
        setShowAccountPage(true); // Set showAccountPage to true when clicking the account link
    };

    useEffect(() => {
        const fetchedDevices = [
            { id: 1, name: 'Device 1', serialNumber: 'SN001', brand: 'Brand 1', status: 'Active' },
            { id: 2, name: 'Device 2', serialNumber: 'SN002', brand: 'Brand 2', status: 'Inactive' },
            { id: 3, name: 'Device 3', serialNumber: 'SN003', brand: 'Brand 3', status: 'Active' },
            { id: 4, name: 'Device 4', serialNumber: 'SN004', brand: 'Brand 4', status: 'Active' },
            { id: 5, name: 'Device 5', serialNumber: 'SN005', brand: 'Brand 5', status: 'Active' },
            { id: 6, name: 'Device 6', serialNumber: 'SN006', brand: 'Brand 6', status: 'Active' },
        ];
        setDevices(fetchedDevices);
    }, []);

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

                <div className="text-center mb-2 text-lg font-bold cursor-pointer" onClick={handleLinkClick}>Account</div>

                <nav className="flex-1 flex flex-col">
                    <ul>
                        <li className="flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-blue-900">
                            <span className="text-lg font-bold">Dashboard</span>
                        </li>
                        <li className="flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-blue-900">
                            <span className="text-lg font-bold">MyRequests</span>
                        </li>
                       
                    </ul>
                </nav>
                <button className="text-lg font-bold mt-auto px-4 py-2 bg-orange-500 hover:bg-orange-600">Logout</button>
            </div>

            {/* Conditional rendering of the AccountPage component */}
            {showAccountPage && <UserAccountPage />}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src="./src/assets/LOGO.png" alt="Logo" className="h-80 w-80 opacity-30" style={{ margin: 'auto' }} />
            </div>

            <div className="flex flex-col flex-1 ml-5">
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
                    Home (USER)
                </div>

              
                <div className="overflow-x-auto">
                    <table className="w-full ml-5">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="text-left border px-4 py-2">ID</th>
                                <th className="text-left border px-4 py-2">Name</th>
                                <th className="text-left border px-4 py-2">S/No</th>
                                <th className="text-left border px-4 py-2">Brand</th>
                                <th className="text-left border px-4 py-2">Status</th>
                                <th className="text-left border px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {devices.map(device => (
                                <tr key={device.id} className="bg-white">
                                    <td className="border px-4 py-2">{device.id}</td>
                                    <td className="border px-4 py-2">{device.name}</td>
                                    <td className="border px-4 py-2">{device.serialNumber}</td>
                                    <td className="border px-4 py-2">{device.brand}</td>
                                    <td className="border px-4 py-2">{device.status}</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                                            Request
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserMainPage;
