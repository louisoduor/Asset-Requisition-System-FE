import { Link } from 'react-router-dom';

const NavUser = () => {
    return (
        <aside
            className={`aside | bg-blue-950 text-white  flex flex-col gap-4`}
        >
            <div className="flex items-center justify-center px-4 py-6">
                <img
                    src="../src/assets/logo2.png"
                    alt="Logo"
                    className="h-26 w-29 mb-12"
                />
            </div>

            <div className="flex items-center justify-center mb-2">
                <div className="h-8 w-8 bg-gray-300 rounded-full" />
            </div>

            <div className="text-center mb-2 text-lg font-bold cursor-pointer">
                Account
            </div>

            <nav className="flex-1 flex flex-col">
                <ul>
                    <li className="flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-blue-900">
                        <Link to="" className="text-lg font-bold">Dashboard</Link>
                    </li>
                    <li className="flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-blue-900">
                        <Link to="user-requests" className="text-lg font-bold">Requests</Link>
                    </li>
                    <li className="flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-blue-900">
                        <span className="text-lg font-bold">A. Available</span>
                    </li>
                </ul>
            </nav>
            <button className="text-lg font-bold mt-auto px-4 py-2 bg-orange-500 hover:bg-orange-600">
                Logout
            </button>
        </aside>
    );
};

export default NavUser;
