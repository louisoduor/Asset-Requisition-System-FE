import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import RequestAdminPage from './Admin/Requests';
import MyRequestPage from './User/myRequest';
import SignUp from './Auth/Signup';
import Login from './Auth/Login';
import AssignFormPage from './Admin/assign';
import UserSharedComponent from './User/UserSharedComponent';
import AuthSharedComponent from './Auth/AuthSharedComponent';
import AvailableAssets from './User/availableAssets';
import AdminDashboard from './Admin/AdminDashboard';
import AdminProfile from './Admin/accountAdmin';
import AddAssetPage from './Admin/add';
import AdminAssets from './Admin/Assets';
import AdminSharedComponent from './Admin/AdminSharedComponent';
import Usermodal1 from './User/Usermodal';
import Request from './User/RequestForm';

function App() {
    const [user,setUser] = useState(null);
    return (
        <BrowserRouter>
            <Routes>
                {/* Authentication Routes */}
                <Route path="/" element={<AuthSharedComponent/>}>
                    <Route index element={<Login setUser ={setUser}/>} />
                    <Route path="signup" element={<SignUp />} />
                </Route>

                {/* Admin Routes */}
                <Route path="admin" element={<AdminSharedComponent />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="admin-dashboard" element={<AdminDashboard />} />
                    <Route path="admin-account" element={<AdminProfile />} />
                    <Route path="admin-assets" element={<AdminAssets />} />
                    <Route path="admin-requests" element={<RequestAdminPage />} />
                    <Route path="admin-requests/admin-assign" element={<AssignFormPage />} />
                    <Route path="admin-addform" element={<AddAssetPage />} />
                </Route>

                {/* User Routes */}
                <Route path="user" element={<UserSharedComponent/>}>
                    <Route index element={<AvailableAssets />} />
                    <Route path="user-account" element={<Usermodal1 />} />
                    <Route path="user-requests" element={<MyRequestPage />} />
                    <Route path="available-assets" element={<AvailableAssets />} />
                    <Route path="available-assets/request-form" element={<Request />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
