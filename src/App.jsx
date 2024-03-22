import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import AdminMainPage from './Admin/AdminMainPage';
import RequestAdminPage from './Admin/Requests';


import UserMainPage from './User/mainpageUser';
import MyRequestPage from './User/myRequest';
import RequestFormPage from './User/requestForm';


import SignUp from './Auth/Signup';
import Login from './Auth/Login';

import AdminSharedComponent from './Admin/AdminSharedComponent';
import AdminDashboard from './Admin/AdminDashboard';
import AssignFormPage from './Admin/assign';
import UserSharedComponent from './User/UserSharedComponent';
import AuthSharedComponent from './Auth/AuthSharedComponent';

function App() {
    return (
        <BrowserRouter>
            <Routes>
            {/* LOGIN */}
                <Route path="/" element={<AuthSharedComponent/>}>
                    <Route index element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
                {/* ADMIN */}
                <Route path="admin" element={<AdminSharedComponent />}>
                    <Route index element={<AdminMainPage />} />
                    <Route
                        path="admin-dashboard"
                        element={<AdminDashboard />}
                    />
                    <Route
                        path="admin-requests"
                        element={<RequestAdminPage />}
                    />
                    <Route
                        path="admin-requests/admin-assign"
                        element={<AssignFormPage />}
                    />
                </Route>
            {/* USER */}
                <Route path="user" element={<UserSharedComponent />}>
                    <Route index element={<UserMainPage />} />
                    {/* <Route path ="user-dashboard" element={<Dashboard/>}/> */}
                    <Route path="user-requests" element={<MyRequestPage />} />
                    <Route
                        path="request-form"
                        element={<RequestFormPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
