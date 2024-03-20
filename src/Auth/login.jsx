import React, { useState } from 'react';

function LoginPage() {
    const [isSignup, setIsSignup] = useState(false);

    const toggleMode = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div className="bg-gray-200 flex justify-center items-center h-screen">
            <div className=" p-14 rounded-lg shadow-md w-50"> 
                <div className="flex justify-center mb-6">
                    <img src="./src/assets/LOGO.png" alt="Logo" className="h-25 w-30" />
                </div>
                <div className="pb-10">
                    <h1 className="text-blue-950 font-extrabold text-2xl">ASSET REQUISITION APPLICATION</h1>
                </div>
                {isSignup ? (
                    <form>
                        <div className="mb-6">
                            <input type="email" id="email" name="email" placeholder="Email" className="form-input mt-4 mb-2 block w-full h-10 placeholder-gray-600 font-bold text-lg pl-3" /> 
                        </div>
                        <div className="pb-6">
                            <input type="password" id="password" name="password" placeholder="Password" className="form-input mt-4 mb-2 block w-full h-10 placeholder-gray-600 font-bold text-lg pl-3" /> 
                        </div>
                        <div className="flex justify-center"> 
                            <button type="submit" className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300">Signup</button>
                        </div>
                    </form>
                ) : (
                    <form>
                        <div className="mb-6">
                            <input type="text" id="username" name="username" placeholder="Username" className="form-input mt-4 mb-2 block w-full h-10 placeholder-gray-600 font-bold text-lg pl-3" /> 
                        </div>
                        <div className="pb-6">
                            <input type="password" id="password" name="password" placeholder="Password" className="form-input mt-4 mb-2 block w-full h-10 placeholder-gray-600 font-bold text-lg pl-3" /> 
                        </div>
                        <div className="flex justify-center"> 
                            <button type="submit" className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300">Login</button>
                        </div>

                        <div className="flex justify-center mt-4">
                    <button onClick={toggleMode} className="text-blue-500 hover:underline focus:outline-none">Create an account?</button>
                </div>
                    </form>
                    
                )}
               
            </div>
        </div>
    );
}

export default LoginPage;
