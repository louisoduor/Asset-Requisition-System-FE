import {  useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import {auth} from '../config/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({setUser}) => {
    
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });

    // Firebase authentication 
console.log(auth?.currentUser?.email)
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,formData.email,formData.password)
        }catch(error){
            alert(error)
            console.error(error)
        } 
        
        if(auth?.currentUser?.email){
            setUser({email:auth?.currentUser?.email})
            if(auth?.currentUser?.email == "admin@gmail.com" ){
                navigate('/admin')
            }else{
                navigate("/user")
            }
        }
        
    };

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData((prev)=>{

            return {...prev,[name]:value }})
    };
    
    return (
        <div className=''>
        <div className="form-container mt-20 ">
         <div className=" p-14 rounded-lg shadow-md w-50 bg-gray-200">
        
         <img src="src/assets/LOGO.png" alt="" />
                <div className="pb-5">
                    <h1 className="text-blue-950 font-extrabold text-2xl">ASSET REQUISITION APPLICATION</h1>
                </div>
            <form
                onSubmit={handleSubmit}
                className="form flex flex-col items-center bg-grey-200 "
            >
                
                <div className="flex flex-col gap-y-2">
                    <input 
                        onChange={handleChange}
                        className="form-input mt-4 mb-2 block w-80 h-10 placeholder-gray-600 font-bold text-lg pl-3 rounded-lg"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <div className="flex flex-col gap-y-3">
                    <input 
                        onChange={handleChange}
                        className="form-input mt-4 mb-2 block w-80 h-10 placeholder-gray-600 font-bold text-lg pl-3 rounded-lg"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <div className="mt-4 text-sm font-bold">
                <button type="submit" className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300">
                        LOGIN
                    </button>
                </div>
                <div><Link to="/signup"className="text-blue-950 hover:text-orange-400 font-bold underline">Create an account?</Link></div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Login;
