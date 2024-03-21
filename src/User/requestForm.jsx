import { useState } from 'react';

function  RequestFormPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    // State for request form fields
    const [assetName, setAssetName] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [staffNo, setStaffNo] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [dateOfRequest, setDateOfRequest] = useState('');

    // Function to handle form submission
    const handleSubmitRequest = (e) => {
        e.preventDefault();
        // Perform actions with form data, e.g., send it to the backend
        console.log('Request submitted:', {
            assetName,
            serialNumber,
            brand,
            model,
            staffNo,
            email,
            department,
            dateOfRequest
        });
        // Reset form fields after submission
        setAssetName('');
        setSerialNumber('');
        setBrand('');
        setModel('');
        setStaffNo('');
        setEmail('');
        setDepartment('');
        setDateOfRequest('');
    };

    return (
        <div className="relative flex grow h-screen">


            {/* Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src="../src/assets/LOGO.png" alt="Logo" className="h-80 w-80 opacity-30" />
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
                    REQUEST FORM (USER)
                </div>

                <div className="flex-1 bg-gray-200 p-4">
                    {/* Request Form */}
                    <form onSubmit={handleSubmitRequest}>
                        <div className="mb-4">
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
                                type="text"
                                placeholder="Staff No"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                value={staffNo}
                                onChange={(e) => setStaffNo(e.target.value)}
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
                                placeholder="Department"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Date of Request"
                                className="form-input mt-2 mb-4 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                value={dateOfRequest}
                                onChange={(e) => setDateOfRequest(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RequestFormPage;
