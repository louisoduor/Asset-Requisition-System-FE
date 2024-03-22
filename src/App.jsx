import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import RequestAdminPage from './Admin/Requests';



import MyRequestPage from './User/myRequest';


import LandingPage from './Auth/LandingPage';
import SignUp from './Auth/Signup';
import Login from './Auth/Login';



import AssignFormPage from './Admin/assign';


import AvailableAssets from './User/availableAssets';
import AdminDashboard from './Admin/AdminDashboard';
import AdminProfile from './Admin/accountAdmin';
import AddAssetPage from './Admin/add';

import AdminAssets from './Admin/Assets';
import AdminSharedComponent from './Admin/AdminSharedComponent'
import UserSharedComponent from './User/UserSharedComponent'
import Usermodal1 from './User/Usermodal';
import Request from './User/RequestForm';




function App() {
    return (
        <BrowserRouter>
            {/* LOGIN */}
            <Routes>
                <Route path="/" element={<LandingPage />}>
                    <Route index element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>

                

                {/* ADMIN */}

                <Route path="admin"  element= {<AdminSharedComponent/>}>
                    <Route index element={<AdminDashboard/>} />
                   
                    <Route
                        path="admin-account"
                        index element={<AdminProfile />}
                    />
                    <Route
                        path="admin-assets"
                        
                        index element={<AdminAssets />}
                    />
                  
                    <Route
                        path="admin-requests"
                        element={<RequestAdminPage />}
                    />
                    <Route
                        path="admin-requests/admin-assign"
                        element={<AssignFormPage />}
                    />
                    
                     <Route
                        path="admin-addform"
                        index element={<AddAssetPage/>}
                    />
                </Route>



            {/* USER */}
                <Route path="user" element={<UserSharedComponent/>}>
                    <Route index element={<AvailableAssets />} />

                    <Route
                        path="user-account"
                        element={<Usermodal1/>}
                    />

                    <Route 
                        path="user-requests" 
                        element={<MyRequestPage />} />
                  
                    <Route
                        path="available-assets"
                        element={<AvailableAssets/>}
                    />
                    
                    <Route
                        path="available-assets/request-form"
                        element={<Request/>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>

        // <AdminMainPage/>
        // <RequestAdminPage/>
        // <AddAssetPage/>
        // <AssignFormPage/>
        // <AdminSharedComponent/>
        // <AccountAdminPage/>
    );
}

export default App;
// import { BrowserRouter as Router } from 'react-router-dom';
// import NavAdmin from './Admin/NavAdmin';
// import AssignFormPage from './Admin/assign';
// import AdminMainPage from './Admin/accountAdmin';
// import NavUser from './User/NavUser';
// import AvailableAssets from './Admin/Assets';
// import AddAssetPage from './Admin/add';
// import RequestAdminPage from './Admin/Requests';
// import AdminProfile from './Admin/accountAdmin';
// import AdminDashboard from './Admin/AdminDashboard';

// function App() {
//   return (
//     <Router>
//       <AdminDashboard/>
//       {/* Other components */}
//     </Router>
//   );
// }

// export default App;