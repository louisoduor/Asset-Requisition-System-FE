import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavAdmin from './NavAdmin';


function RequestAdminPage() {

    // Sample data dictionary
    const requests = [
        { id: 1, staff: 'John Doe', brand: 'Apple', model: 'iPhone 12', serialNo: 'ABC123', action: 'Assign' },
        { id: 2, staff: 'Jane Smith', brand: 'Samsung', model: 'Galaxy S21', serialNo: 'XYZ789', action: 'Assign' },
        { id: 3, staff: 'Alex Johnson', brand: 'Google', model: 'Pixel 5', serialNo: 'DEF456', action: 'Assign' },
        { id: 4, staff: 'Emily Brown', brand: 'OnePlus', model: '8T', serialNo: 'GHI789', action: 'Assign' }
    ];

    return (
        <div className="relative flex grow"> 
        
            {/* Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src="../src/assets/LOGO.png" alt="Logo" className="h-80 w-80 opacity-30" />
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                <div className="text-lg font-bold pl-4 py-2 text-orange-500">
                    Requests (ADMIN)
                </div>

                <div className="flex-1 bg-gray-200 p-4">
                    {/* Request Table */}
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Staff</th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Model</th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Serial No</th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300">
                            {/* Map through requests and render rows */}
                            {requests.map(request => (
                                <tr key={request.id}>
                                    <td className="px-6 py-4 whitespace-no-wrap">{request.id}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">{request.staff}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">{request.brand}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">{request.model}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">{request.serialNo}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <button className="text-orange-500 hover:underline focus:outline-none">{request.action =="Assign" ?<Link to = "admin-assign" className='capitalize'>assign</Link> :request.action}</button>
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
