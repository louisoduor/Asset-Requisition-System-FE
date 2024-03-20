import React, { useState } from 'react';

function AssignFormPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [employeeName, setEmployeeName] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [assetName, setAssetName] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [dateOfAssignment, setDateOfAssignment] = useState('');
    const [dateOfReturn, setDateOfReturn] = useState('');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLinkClick = () => {
        setIsSidebarOpen(false);
    };

    const handleAssignAsset = () => {
        // Perform actions to assign the asset, such as sending data to a backend API
        console.log('Assigning asset:', {
            employeeName,
            department,
            email,
            assetName,
            serialNumber,
            brand,
            model,
            dateOfAssignment,
            dateOfReturn
        });

        // Clear input fields after assigning the asset
        setEmployeeName('');
        setDepartment('');
        setEmail('');
        setAssetName('');
        setSerialNumber('');
        setBrand('');
        setModel('');
        setDateOfAssignment('');
        setDateOfReturn('');
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
                    ASSIGN ASSET FORM (ADMIN)
                </div>

                <div className="flex-1 bg-gray-200 p-4">
                    {/* Assign Asset Form */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Employee Name"
                            className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                            value={employeeName}
                            onChange={(e) => setEmployeeName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Department"
                            className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Asset Name"
                            className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                            value={assetName}
                            onChange={(e) => setAssetName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Serial Number"
                            className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                            value={serialNumber}
                            onChange={(e) => setSerialNumber(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Brand"
                            className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Model"
                            className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        />
                        <input
                            type="date"
                            placeholder="Date of Assignment"
                            className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                            value={dateOfAssignment}
                            onChange={(e) => setDateOfAssignment(e.target.value)}
                        />
                        <input
                            type="date"
                            placeholder="Date of Return"
                            className="form-input mt-2 mb-4 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                            value={dateOfReturn}
                            onChange={(e) => setDateOfReturn(e.target.value)}
                        />
                        <button
                            className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
                            onClick={handleAssignAsset}
                        >
                            Assign Asset
                        </button>
                    </div>

                    {/* Main Content Goes Here */}
                </div>
            </div>
        </div>
    );
}

export default AssignFormPage;
