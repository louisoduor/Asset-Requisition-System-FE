import React from 'react';



function AdminProfile() {
    const userData = {
        profilePicture: "./src/assets/profile-user.png",
        username: "Steph Doe",
        email: "Steph.doe@example.com",
    };


    return (
        <div className="relative flex grow h-screen">
          
            {/* Logo Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img src="../src/assets/LOGO.png" alt="Logo" className="h-80 w-80 opacity-30" />
                </div>

            {/* Main Content */}
                <div className="flex flex-col flex-1">
                    
                    <div className="text-lg font-bold pl-4 py-2 text-orange-500">
                        ADMIN PROFILE (ADMIN)
                    </div>

                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="max-w-md bg-gray-200 p-8 rounded-lg shadow-lg">
                {/* User Profile Card */}
                    <div className="text-center">
                        <img className="h-32 w-32 rounded-full mx-auto mb-4" src={userData.profilePicture} alt="Profile" />
                        <h1 className="text-xl font-bold">{userData.username}</h1>
                        <p className="text-gray-500">{userData.email}</p>
                    </div>
            </div>
            </div>


            </div>
        </div>
    );
}

export default AdminProfile;

