import { useState, useEffect } from 'react';
import LOGO from "/src/assets/LOGO.png";

function MyRequestPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [requests, setRequests] = useState([]);
    const [assetId, setAssetId] = useState('');
    const [searchId, setSearchId] = useState('');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSearchChange = (event) => {
        setSearchId(event.target.value);
    };

    const handleSearch = () => {
        setAssetId(searchId);
    };

    const fetchRequests = async (assetId) => {
        try {
            const response = await fetch(`http://localhost:8000/requests?asset_id=${assetId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch requests');
            }
            const data = await response.json();
            setRequests(data);
        } catch (error) {
            console.error('Failed to fetch requests:', error);
        }
    };

    useEffect(() => {
        if (assetId) {
            fetchRequests(assetId);
        }
    }, [assetId]);

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
                <div className="flex mt-4">
                    <input
                        type="text"
                        placeholder="Enter Asset ID"
                        className="border rounded-l px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        value={searchId}
                        onChange={handleSearchChange}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                <div className="overflow-x-auto mt-4">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="text-left border px-4 py-2">ID</th>
                                <th className="text-left border px-4 py-2">ASSET</th>
                                <th className="text-left border px-4 py-2">S/NO</th>
                                <th className="text-left border px-4 py-2">BRAND</th>
                                <th className="text-left border px-4 py-2">MODEL</th>
                                <th className="text-left border px-4 py-2">STATUS</th>
                                <th className="text-left border px-4 py-2">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map(request => (
                                <tr key={request.id} className="bg-white">
                                    <td className="border px-4 py-2">{request.id}</td>
                                    <td className="border px-4 py-2">{request.asset_name}</td>
                                    <td className="border px-4 py-2">{request.serial_no}</td>
                                    <td className="border px-4 py-2">{request.brand_name}</td>
                                    <td className="border px-4 py-2">{request.model_no}</td>
                                    <td className="border px-4 py-2">{request.status}</td>
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
