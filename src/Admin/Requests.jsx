import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavAdmin from './NavAdmin';

function RequestAdminPage() {
    const [requests, setRequests] = useState([]); // State to hold requests data
    const [selectedAsset, setSelectedAsset] = useState(null); // State to hold selected asset

    // Fetch data from the API when the component mounts
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                // Replace '123' with the actual ID of the asset you want to fetch requests for
                const response = await fetch('http://localhost:8000/requests?asset_id=123');
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched requests:', data);
                    setRequests(data);
                } else {
                    console.error('Failed to fetch requests');
                }
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };
    
        fetchRequests();
    }, []);

    // Function to handle "Assign" button click
    const handleAssignClick = (request) => {
        setSelectedAsset(request); // Update selected asset state with the clicked request data
    };

    return (
        <div className="relative flex grow">
            {/* Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src="../src/assets/LOGO.png" alt="Logo" className="h-80 w-80 opacity-30" />
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                <div className="text-lg font-bold pl-4 py-2 text-orange-500">Requests (ADMIN)</div>
                <div className="flex-1 bg-gray-200 p-4">
                    {/* Request Table */}
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Asset ID
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300">
                            {/* Map through requests and render rows */}
                            {requests.map((request) => (
                                <tr key={request.id}>
                                    <td className="px-6 py-4 whitespace-no-wrap">{request.id}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">{request.asset_id}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">{request.status}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <button
                                            className="text-orange-500 hover:underline focus:outline-none"
                                            onClick={() => handleAssignClick(request)}
                                        >
                                            <Link to="/admin-assign" className="capitalize">assign</Link>
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

export default RequestAdminPage;
