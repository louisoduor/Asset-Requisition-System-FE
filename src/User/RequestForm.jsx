import { useRef, useState, useEffect } from 'react';
import LOGO from "/src/assets/LOGO.png";
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';

function Request() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const form = useRef();
    const location = useLocation();
    const [assetId, setAssetId] = useState(null); // State to store the asset ID

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const updatedAssetData = {
            asset_name: form.current.asset_name.value,
            serial_no: form.current.serial_no.value,
            brand_name: form.current.brand_name.value,
            model_no: form.current.model_no.value,
            staff_no: form.current.staff_no.value,
            email: form.current.email.value,
            department: form.current.department.value,
            return_date: form.current.return_date.value,
        };

        emailjs
            .sendForm('service_gwwblky', 'template_h29807b', form.current,'70kgRie4_ZFmLD-PK')
            .then(
                () => {
                    alert('REQUEST SUBMITTED SUCCESSFULLY!');
                    form.current.reset();
                },
                (error) => {
                    console.error('Failed to send email:', error);
                    alert('Failed to send email. Please try again.');
                }
            )
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Failed to send email. Please try again.');
            });
    };

    const updateAsset = async (updatedData) => {
        try {
            const response = await fetch(`http://localhost:8000/update-asset/${assetId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
            if (!response.ok) {
                throw new Error('Failed to update asset');
            }
            return response.json();
        } catch (error) {
            throw new Error('Failed to update asset');
        }
    };

    const selectedAsset = location.state && location.state.selectedAsset;

    useEffect(() => {
        if (selectedAsset && form.current) {
            if (form.current.asset_name) {
                form.current.asset_name.value = selectedAsset.name || '';
            }
            if (form.current.serial_no) {
                form.current.serial_no.value = selectedAsset.serial || '';
            }
            if (form.current.brand_name) {
                form.current.brand_name.value = selectedAsset.brand || '';
            }
            if (form.current.model_no) {
                form.current.model_no.value = selectedAsset.model || '';
            }
            if (form.current.staff_no) {
                form.current.staff_no.value = selectedAsset.staff_no || '';
            }
            if (form.current.email) {
                form.current.email.value = selectedAsset.email || '';
            }
            if (form.current.department) {
                form.current.department.value = selectedAsset.department || '';
            }
            if (form.current.return_date) {
                form.current.return_date.value = selectedAsset.return_date || '';
            }
            setAssetId(selectedAsset.id); // Set the asset ID
        }
    }, [selectedAsset]);

    return (
        <div className="relative flex grow h-screen">
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
                            {/* Input fields */}
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
                                placeholder="Staff Number"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                name='staff_no'
                                required
                            />
                            <input
                                type="email"
                                placeholder="Staff Email"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                name='email'
                                required
                            />
                            <input
                                type="text"
                                placeholder="Department"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                name='department'
                                required
                            />
                            <input
                                type="date"
                                placeholder="Return Date"
                                className="form-input mt-2 mb-2 block w-full h-10 placeholder-gray-500 font-bold text-lg pl-3"
                                name='return_date'
                                required
                            />
                            <textarea
                                placeholder="Additional Comments"
                                className="form-textarea mt-2 mb-4 block w-full h-20 placeholder-gray-500 font-bold text-lg pl-3"
                                name='additional_comments'
                            ></textarea>
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
