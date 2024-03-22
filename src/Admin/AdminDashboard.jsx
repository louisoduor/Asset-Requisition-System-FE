import React from 'react';
import NavAdmin from './NavAdmin';


const AdminDashboard = () => {
    return (
        <div className="relative flex grow h-screen">
           
        {/* Main Content */}
        <div className="flex flex-col flex-1">
            
            <div className="text-lg font-bold pl-4 py-2 text-orange-500">
            DASHBOARD (ADMIN)
            </div>

            <div className="flex-1 bg-gray-200 p-4">
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-orange-500 mb-8">Dashboard</h1>
                    <div className="bg-white text-blue-800 rounded-lg shadow-md p-8">
                        <p className="text-lg text-gray-700">Welcome to the Admin Dashboard!</p>
                    </div>
                </div>
                </div> 
                
                
            </div>
        </div>
    </div>
    );
};

export default AdminDashboard;

