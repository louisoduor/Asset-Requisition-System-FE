import React from 'react';

const Usermodal1 = ({ closeModal }) => {
    const userData = {
        profilePicture: "./src/assets/profile-user.png",
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

    const handleCloseModal = () => {
        closeModal(); 
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className='bg-white p-8 rounded-lg relative'>
                <div className="max-w-md bg-gray-200 p-8 rounded-lg shadow-lg">
                    {/* User Profile Card */}
                    <div className="text-center">
                        <img className="h-32 w-32 rounded-full mx-auto mb-4" src={userData.profilePicture} alt="Profile" />
                        <h1 className="text-xl font-bold">{userData.username}</h1>
                        <p className="text-gray-500">{userData.email}</p>
                        {/* Assigned Assets */}
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold mb-2">Assigned Assets:</h2>
                            <ul className="list-disc list-inside">
                                <button className='absolute top-2 right-2 text-black bg-red-300 rounded-full p-2' onClick={handleCloseModal}>
                                    X
                                </button>
                                {userData.assignedAssets.map(asset => (
                                    <li key={asset.id}>
                                        <div>{asset.assetName}</div>
                                        <div>Serial Number: {asset.serialNumber}</div>
                                        <div>Brand: {asset.brand}</div>
                                        <div>Model: {asset.model}</div>
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

export default Usermodal1;
