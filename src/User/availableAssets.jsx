import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function AvailableAssets() {
    
    const [devices, setDevices] = useState([]);

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
        <div className="relative flex grow mr-5 h-screen">
       
            <div className="flex flex-col flex-1 ml-5">
                <div className="text-lg font-bold pl-4 py-2 text-orange-500">
                AVAILABLE  ASSETS (USER)
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
                                        <Link to ="/available-assets/request-form" className="text-lg font-bold" >Request</Link>   
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
