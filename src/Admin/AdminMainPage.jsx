import  { useState } from 'react';

function AdminMainPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="relative flex grow main">          

            {/* Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src="../src/assets/LOGO.png" alt="Logo" className="h-80 w-80 opacity-30" />
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                <div className="text-lg font-bold pl-4 py-2 text-orange-500">
                    {/* Three Dots */}
                    <button onClick={toggleSidebar} className="sm:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-4 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    Home (ADMIN)
                </div>

                <div className="flex-1 bg-gray-200 p-4">
                    {/* Main Content Goes Here */}
                </div>
            </div>
        </div>
    );
}

export default AdminMainPage;
