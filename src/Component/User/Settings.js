import React, { useState } from 'react';

const Settings = () => {
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveChanges = () => {
        // Logic to handle password change
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert("New password and confirmation do not match.");
        } else {
            console.log("Password changed:", passwordData);
            // Here you can add logic to send the new password to the server
        }
    };

    return (
        <div className="p-5 bg-gray-50 rounded-lg shadow-md bg-gradient-to-r from-[#ecf5ff] to-[#d1edc4]">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>

            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Change Password</h3>
                
                <div className="mb-4">
                    <label className="block">Current Password:</label>
                    <input
                        type="password"
                        name="currentPassword"
                        value={passwordData.currentPassword}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        required
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block">New Password:</label>
                    <input
                        type="password"
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={passwordData.confirmPassword}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        required
                    />
                </div>

                <button
                    onClick={handleSaveChanges}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Settings;
