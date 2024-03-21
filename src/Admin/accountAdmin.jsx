import  { useState } from 'react';

function AdminMainPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    // Dummy data for user information and assigned assets
    const userData = {
        profilePicture: "./src/assets/profile_picture.jpg",
        username: "John Doe",
        email: "john.doe@example.com",
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


            {/* Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src="../src/assets/LOGO.png" alt="Logo" className="h-80 w-80 opacity-30" />
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
                    Home (ADMIN)
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

export default AdminMainPage;

