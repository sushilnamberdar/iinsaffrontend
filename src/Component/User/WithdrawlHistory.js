import React, { useEffect, useState } from 'react';

const WithdrawalHistory = () => {
    // Sample withdrawal history data
    const sampleData = [
        { requestDate: '2024-09-01', orderId: 'ORD001', txnId: 'TXN001', amount: '₹ 500', payoutDate: '2024-09-02', payoutMethod: 'UPI', status: 'Completed' },
        { requestDate: '2024-09-15', orderId: 'ORD002', txnId: 'TXN002', amount: '₹ 1000', payoutDate: '2024-09-16', payoutMethod: 'Bank Transfer', status: 'Pending' },
        { requestDate: '2024-09-20', orderId: 'ORD003', txnId: 'TXN003', amount: '₹ 750', payoutDate: '2024-09-21', payoutMethod: 'UPI', status: 'Completed' },
        { requestDate: '2024-09-25', orderId: 'ORD004', txnId: 'TXN004', amount: '₹ 300', payoutDate: '2024-09-26', payoutMethod: 'Bank Transfer', status: 'Failed' },
        { requestDate: '2024-09-28', orderId: 'ORD005', txnId: 'TXN005', amount: '₹ 1200', payoutDate: '2024-09-29', payoutMethod: 'UPI', status: 'Completed' },
    ];

    const [withdrawalHistory, setWithdrawalHistory] = useState(sampleData);

    useEffect(() => {
        document.title = 'Withdrawal History';
    }, []);

    return (
        <div className="p-5 bg-gray-50 rounded-lg shadow-md bg-gradient-to-r from-[#ecf5ff] to-[#d1edc4]">
            <h2 className="text-2xl font-semibold mb-4">Withdrawal History</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-2 px-4">Request Date</th>
                            <th className="py-2 px-4">Order Id</th>
                            <th className="py-2 px-4">Txn Id</th>
                            <th className="py-2 px-4">Amount</th>
                            <th className="py-2 px-4">Payout Date</th>
                            <th className="py-2 px-4">Payout Method</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {withdrawalHistory.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{item.requestDate}</td>
                                <td className="py-2 px-4 border-b">{item.orderId}</td>
                                <td className="py-2 px-4 border-b">{item.txnId}</td>
                                <td className="py-2 px-4 border-b">{item.amount}</td>
                                <td className="py-2 px-4 border-b">{item.payoutDate}</td>
                                <td className="py-2 px-4 border-b">{item.payoutMethod}</td>
                                <td className="py-2 px-4 border-b">{item.status}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WithdrawalHistory;
