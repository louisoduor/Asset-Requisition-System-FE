import { useState} from 'react';
import LOGO from "/src/assets/LOGO.png"


function MyRequestPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [devices, setDevices] = useState([]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLinkClick = () => {
        setIsSidebarOpen(false);
       
        const fetchedDevices = [
            { id: 1, name: 'Device 1', serialNumber: 'SN001', brand: 'Brand 1', status: 'Pending' },
            { id: 2, name: 'Device 2', serialNumber: 'SN002', brand: 'Brand 2', status: 'Approved' },
            { id: 3, name: 'Device 3', serialNumber: 'SN003', brand: 'Brand 3', status: 'Approved' },
            { id: 4, name: 'Device 4', serialNumber: 'SN004', brand: 'Brand 4', status: 'Pending' },
            { id: 5, name: 'Device 5', serialNumber: 'SN005', brand: 'Brand 5', status: 'Approved' },
            { id: 6, name: 'Device 6', serialNumber: 'SN006', brand: 'Brand 6', status: 'Approved' },
        ];4
        setDevices(fetchedDevices);
    };

    return (
        <div className="relative grow mr-10 flex h-screen">
       

           
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src={LOGO} alt="Logo" className="h-80 w-80 opacity-30" />
            </div>

           
            <div className="flex flex-col flex-1 ml-5">
                <div className="text-lg font-bold pl-4 py-2 text-orange-500">
                    Home (USER)  
                    <h1>MY REQUESTS</h1>
                </div>

              
                <div className="overflow-x-auto">
                    <table className="w-full ml-5">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="text-left border px-4 py-2">ID</th>
                                <th className="text-left border px-4 py-2">ASSET</th>
                                <th className="text-left border px-4 py-2">S/NO</th>
                                <th className="text-left border px-4 py-2">BRAND</th>
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
                                            REVOK
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

export default MyRequestPage;
