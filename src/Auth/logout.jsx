
import {  auth } from '../config/firebaseConfig'
import {sighOut } from "firebase/auth" ;

const logOut = async () =>{
try {
    await sighOut(auth)
} catch (error) {
    alert(error)
    console.error(error)    
}
}

export {logOut}