import NavAdmin from "./NavAdmin"
import { Outlet } from "react-router-dom"


const AdminSharedComponent = () =>{
            
return <div className="flex">

<NavAdmin/>
<Outlet/>

</div>


}

export default AdminSharedComponent
