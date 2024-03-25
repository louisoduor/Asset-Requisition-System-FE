import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AvailableAssets() {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await fetch('http://localhost:8000/get-all-assets');
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched devices:', data);
                    // Convert object to array
                    const devicesArray = Object.values(data);
                    setDevices(devicesArray);
                } else {
                    console.error('Failed to fetch devices');
                }
            } catch (error) {
                console.error('Error fetching devices:', error);
            }
        };
    
        fetchDevices();
    }, []);

    return (
        <div className="relative flex grow mr-5 h-screen">
            <div className="flex flex-col flex-1 ml-5">
                <div className="text-lg font-bold pl-4 py-2 text-orange-500">
                    AVAILABLE ASSETS (USER)
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
                                    <td className="border px-4 py-2">{device.serial}</td>
                                    <td className="border px-4 py-2">{device.brand}</td>
                                    <td className="border px-4 py-2">{device.status}</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                                            <Link to="request-form" className="text-lg font-bold">Request</Link>
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

export default AvailableAssets;
