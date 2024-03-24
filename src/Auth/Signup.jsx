import { useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import {  auth } from '../config/firebaseConfig'

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await  createUserWithEmailAndPassword(auth, formData.email, formData.password)
        }catch (error){
            alert(error)
            console.error(error)
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    return (
        <div className="form-container my-20 ">
            <form
                onSubmit={handleSubmit}
                className="form flex flex-col items-center bg-grey-200 "
            >
                <img src="src/assets/LOGO.png" alt="" />
                <div className="pb-5">
                    <h1 className="text-blue-950 font-extrabold text-2xl">ASSET REQUISITION APPLICATION</h1>
                </div>
                <div className="pb-5">
                    <h1 className="text-blue-950 font-extrabold text-1xl">Create Your Account</h1>
                </div>
                <div className="flex flex-col gap-y-3">
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
                        placeholder='Password'
                    />
                </div>
                <div className="mt-4 text-sm font-bold">
                    <button
                        type="submit"
                        className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300"
                    >
                        Sign up
                    </button>
                </div>
                <div>
                    <Link
                        to="/"
                        className="text-blue-950 hover:text-orange-400 font-bold capitalize underline"
                    >
                        Back
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
