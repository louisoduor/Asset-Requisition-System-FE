import { useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig'

const SignUp = () => {
    

    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        admin:'false'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await  createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {               
                console.log(userCredential.user);
                
            })
            .catch((error) => {
                alert(error.errorMessage)
            
            });
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
                className="form flex flex-col items-center gap-y-3 bg-white shadow "
            >
                <img src="src/assets/LOGO.png" alt="" />
                <div className="flex flex-col gap-y-3">
                    <label
                        htmlFor="email"
                        className="capitalize font-semi-bold "
                    >
                        email:
                    </label>
                    <input
                        onChange={handleChange}
                        className=" py-1.5 px-2.5 bg-gray-100 outline-orange-400"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="donjoe@mail.com"
                    />
                </div>
                <div className="flex flex-col gap-y-3">
                    <label
                        htmlFor="password"
                        className="capitalize font-semi-bold"
                    >
                        password:
                    </label>
                    <input
                        onChange={handleChange}
                        className=" py-1.5 px-2.5 bg-gray-100 outline-orange-400"
                        type="password"
                        id="password"
                        name="password"
                    />
                </div>
                <div className="mt-4 text-sm font-bold">
                    <button
                        type="submit"
                        className="px-5 py-2 hover:bg-blue-900 bg-orange-500 text-white uppercase rounded border-0"
                    >
                        sign up
                    </button>
                </div>
                <div>
                    <Link
                        to="/"
                        className="text-blue-900 hover:text-orange-400 font-bold capitalize underline"
                    >
                        log in
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
