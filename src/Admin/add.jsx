import React, { useState } from 'react';
import LOGO from "/src/assets/LOGO.png";

function AddAssetPage() {
    const [assetName, setAssetName] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [status, setStatus] = useState(''); 

    const handleAddAsset = async () => {
        try {
            const response = await fetch('http://localhost:8000/create-asset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: assetName,
                    serial: serialNumber,
                    brand: brand,
                    model: model,
                    status: status // Include status in the request payload
                }),
            });
            if (response.ok) {
                console.log('Asset added successfully');
                
                setAssetName('');
                setSerialNumber('');
                setBrand('');
                setModel('');
                setStatus(''); 
                window.alert('Asset added successfully'); 
            } else {
                console.error('Failed to add asset');
            }
        } catch (error) {
            console.error('Error adding asset:', error);
        }
    };

    return (
        <div className="relative flex h-screen grow">
            {/* Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src={LOGO} alt="Logo" className="h-80 w-80 opacity-30" />
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                <div className="text-lg font-bold pl-4 py-2 text-orange-500">
                    ADD ASSET (ADMIN)
                </div>

                <div className="flex-1 bg-gray-200 p-4">
                    {/* Add Asset Form */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name"
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
                            placeholder="Status"
                            className="form-input mt-2 mb-4 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                        
                        <button
                            className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
                            onClick={handleAddAsset}
                        >
                            Add Asset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddAssetPage;
