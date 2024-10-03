import React, { useEffect, useState } from 'react';

const UserProfile = () => {

    useEffect(()=> {
        document.title = 'Settings'
    })
    // Sample user data state
    const [userData, setUserData] = useState({
        username: "sushilnamberdar000@gmail.com",
        fullName: "Sushil",
        email: "sushilnamberdar000@gmail.com",
        address: "Address",
        phone: "1234567890",
        secondaryPhone: "Secondary Phone",
        whatsapp: "Whatsapp",
        website: "Website",
        channelName: "Channel Name",
        youtubeUrl: "YouTube Channel Url",
        facebookUrl: "Facebook Page Url",
        instagramUrl: "Instagram Page Url",
        state: "Haryana",
        city: "Hisar",
        upiLabel: "UPI Label",
        upiId: "UPI Id",
        withdrawalUpiNumber: "Withdrawal UPI Number",
        ifscCode: "IFSC Code",
        bankName: "Bank Name",
        accountHolderName: "Account Holder Name",
        accountNumber: "Account Number"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateProfile = () => {
        // Here you can add logic to send the updated profile data to the server or handle it as needed
        console.log("Profile updated:", userData);
    };

    const handleSaveUPI = () => {
        // Logic to save UPI details
        console.log("UPI details saved:", {
            upiLabel: userData.upiLabel,
            upiId: userData.upiId,
            withdrawalUpiNumber: userData.withdrawalUpiNumber,
        });
    };

    const handleSaveBanking = () => {
        // Logic to save banking details
        console.log("Banking details saved:", {
            ifscCode: userData.ifscCode,
            bankName: userData.bankName,
            accountHolderName: userData.accountHolderName,
            accountNumber: userData.accountNumber,
        });
    };

    return (
        <div className="p-5 bg-gray-50 rounded-lg shadow-md bg-gradient-to-r from-[#ecf5ff] to-[#d1edc4]">
            <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold mb-2">Personal Information</h3>
                    <p><strong>Username:</strong> {userData.username}</p>
                    <div className="mb-2">
                        <label className="block">Full Name:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={userData.fullName}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={userData.address}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={userData.phone}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Secondary Phone:</label>
                        <input
                            type="text"
                            name="secondaryPhone"
                            value={userData.secondaryPhone}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Whatsapp:</label>
                        <input
                            type="text"
                            name="whatsapp"
                            value={userData.whatsapp}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Website:</label>
                        <input
                            type="text"
                            name="website"
                            value={userData.website}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <button
                        onClick={handleUpdateProfile}
                        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Update Profile
                    </button>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold mb-2">Channel Information</h3>
                    <div className="mb-2">
                        <label className="block">Channel Name:</label>
                        <input
                            type="text"
                            name="channelName"
                            value={userData.channelName}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">YouTube Channel URL:</label>
                        <input
                            type="text"
                            name="youtubeUrl"
                            value={userData.youtubeUrl}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Facebook Page URL:</label>
                        <input
                            type="text"
                            name="facebookUrl"
                            value={userData.facebookUrl}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Instagram Page URL:</label>
                        <input
                            type="text"
                            name="instagramUrl"
                            value={userData.instagramUrl}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">State:</label>
                        <input
                            type="text"
                            name="state"
                            value={userData.state}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">City:</label>
                        <input
                            type="text"
                            name="city"
                            value={userData.city}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
                    <h3 className="font-semibold mb-2">UPI Details</h3>
                    <div className="mb-2">
                        <label className="block">UPI Label:</label>
                        <input
                            type="text"
                            name="upiLabel"
                            value={userData.upiLabel}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">UPI Id:</label>
                        <input
                            type="text"
                            name="upiId"
                            value={userData.upiId}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Withdrawal UPI Number:</label>
                        <input
                            type="text"
                            name="withdrawalUpiNumber"
                            value={userData.withdrawalUpiNumber}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <button
                        onClick={handleSaveUPI}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Save UPI Details
                    </button>
                </div>

                <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
                    <h3 className="font-semibold mb-2">Banking Details</h3>
                    <div className="mb-2">
                        <label className="block">IFSC Code:</label>
                        <input
                            type="text"
                            name="ifscCode"
                            value={userData.ifscCode}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Bank Name:</label>
                        <input
                            type="text"
                            name="bankName"
                            value={userData.bankName}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Account Holder Name:</label>
                        <input
                            type="text"
                            name="accountHolderName"
                            value={userData.accountHolderName}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Account Number:</label>
                        <input
                            type="text"
                            name="accountNumber"
                            value={userData.accountNumber}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <button
                        onClick={handleSaveBanking}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Save Banking Details
                    </button>
                </div>
            </div>

            <button
                onClick={handleUpdateProfile}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Update Profile
            </button>
        </div>
    );
};

export default UserProfile;
