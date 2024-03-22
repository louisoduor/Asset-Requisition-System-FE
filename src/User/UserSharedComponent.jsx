import { Outlet } from "react-router-dom"

import NavUser from "./NavUser"


const UserSharedComponent = () =>{
            
return <div className="flex">

<NavUser/>
<Outlet/>

</div>


}

export default UserSharedComponent 
