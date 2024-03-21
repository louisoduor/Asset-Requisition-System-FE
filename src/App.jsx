

import './App.css'
import AdminMainPage from './Admin/mainpageAdmin'
import RequestAdminPage from './Admin/requests'
import AddAssetPage from './Admin/add'
import AssignFormPage from './Admin/assign'
import AccountAdminPage from './Admin/accountAdmin'
import UserAccountPage from './User/accountUser'
import UserMainPage from './User/mainpageUser'
import MyRequestPage from './User/myRequest'
import RequestFormPage from './User/requestForm'
import Login from './Auth/Login'

function App() {


  return (
    <div className='bg-gray-50'>
    {/* LOGIN */}
    
    <Login/>
    {/* ADMIN */}
    <AdminMainPage/>
    <RequestAdminPage/>
    <AddAssetPage/>
    <AssignFormPage/>
    <AccountAdminPage/>

    {/* USER */}
    <UserMainPage/>
    <UserAccountPage/>
    <MyRequestPage/>
    <RequestFormPage/>

    </div>
  )
}

export default App
