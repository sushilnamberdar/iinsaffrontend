import React, { useEffect } from 'react';

const PaymentWithdraw = () => {

    useEffect(()=> {
        document.title = 'Payout Request'
    },[])

    return (
        <div className="p-5 bg-gray-50 rounded-lg shadow-md bg-gradient-to-r from-[#ecf5ff] to-[#d1edc4]">
            <h2 className="text-2xl font-semibold mb-4">Payout Request</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Side: UPI and Banking Details */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">UPI Details</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-gray-700">UPI Id</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-2 w-full"
                                    placeholder="Enter UPI Id"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">UPI App Name</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-2 w-full"
                                    placeholder="Enter UPI App Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">UPI Mobile Number</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-2 w-full"
                                    placeholder="Enter UPI Mobile Number"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Banking Details</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-gray-700">Bank Name</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-2 w-full"
                                    placeholder="Enter Bank Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Account Holder Name</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-2 w-full"
                                    placeholder="Enter Account Holder Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Account Number</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-2 w-full"
                                    placeholder="Enter Account Number"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">IFSC Code</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-2 w-full"
                                    placeholder="Enter IFSC Code"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Change Details and Notes */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Change Details</h3>
                        <div className="mb-4">
                            <span className="font-medium">Available Balance:</span> ₹ 0
                        </div>
                        <div className="mb-4">
                            <span className="font-medium">Total Lead Earnings:</span> ₹ 0
                        </div>
                        <div className="mb-4">
                            <span className="font-medium">Total Conference Earnings:</span> ₹ 0
                        </div>
                        <div className="mb-4">
                            <span className="font-medium">Total Withdrawal:</span> ₹ 0
                        </div>
                        <div className="mb-4">
                            <span className="font-medium">Available Balance:</span> ₹ 0
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Your Note</h3>
                        <textarea
                            rows="3"
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="Add your note here"
                        ></textarea>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Admin Note</h3>
                        <textarea
                            rows="3"
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="Admin's note will appear here"
                            disabled
                        ></textarea>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Get Amount in:</h3>
                        <select className="border border-gray-300 rounded-lg p-2 w-full">
                            <option value="accountTransfer">Account Transfer</option>
                            {/* Add other options as necessary */}
                        </select>
                    </div>

                    {/* Request Button Centered at the Bottom */}
                    <div className="flex justify-center mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Request Payout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentWithdraw;
