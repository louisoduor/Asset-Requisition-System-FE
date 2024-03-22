import { useRef, useState } from 'react';
import LOGO from "/src/assets/LOGO.png"
import emailjs from '@emailjs/browser';

function Request() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const form = useRef();

    // Function to handle form submission
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_gwwblky', 'template_h29807b', form.current, {
                publicKey: '-MNWCUnnZC-W7eIVt',
            })
            .then(
                () => {
                    alert('REQUEST SUMBMITED SUCCESSFULLY!');
                    // Reset the form after successful submission
                    form.current.reset();
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="relative flex grow h-screen ">
            {/* Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src={LOGO} alt="Logo" className="h-80 w-80 opacity-30" />
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                <div className="text-lg font-bold pl-4 py-2 text-orange-500">
                    REQUEST FORM (USER)
                </div>

                <div className="flex-1 bg-gray-200 p-4">
                    {/* Request Form */}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Asset Name"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                name='asset_name'
                                required
                            />
                            <input
                                type="text"
                                placeholder="Serial Number"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                name='serial_no'
                                required
                            />
                            <input
                                type="text"
                                placeholder="Brand"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                name='brand_name'
                                required
                            />
                            <input
                                type="text"
                                placeholder="Model"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                name='model_no'
                                required
                            />
                            <input
                                type="text"
                                placeholder="Staff No"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                name='staff_no'
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                name='staff_email'
                                required
                            />
                            <input
                                type="text"
                                placeholder="Department"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                name='department_name'
                                required
                            />
                            <input
                                type="date"
                                placeholder="Date of Request"
                                className="form-input mt-2 mb-4 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                name='date_request'
                                required
                            />
                            <button
                                type="submit"
                                className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Request;
