import React, { useEffect, useState } from 'react';

const LeadsEarnings = () => {
    // Sample earnings data
    const allEarnings = [
        { id: 1, acceptedDate: '2024-10-01', requiredViews: 100, receivedViews: 90, videoDate: '2024-10-05', maxAmount: '$200', per1000Amt: '$2.00', payoutAmount: '$180' },
        { id: 2, acceptedDate: '2024-10-02', requiredViews: 150, receivedViews: 150, videoDate: '2024-10-06', maxAmount: '$500', per1000Amt: '$3.33', payoutAmount: '$500' },
        { id: 3, acceptedDate: '2024-10-03', requiredViews: 200, receivedViews: 150, videoDate: '2024-10-07', maxAmount: '$300', per1000Amt: '$1.50', payoutAmount: '$225' },
        { id: 4, acceptedDate: '2024-10-04', requiredViews: 250, receivedViews: 200, videoDate: '2024-10-08', maxAmount: '$150', per1000Amt: '$0.60', payoutAmount: '$120' },
        { id: 5, acceptedDate: '2024-10-05', requiredViews: 300, receivedViews: 250, videoDate: '2024-10-09', maxAmount: '$400', per1000Amt: '$1.33', payoutAmount: '$330' },
        { id: 6, acceptedDate: '2024-10-06', requiredViews: 350, receivedViews: 300, videoDate: '2024-10-10', maxAmount: '$600', per1000Amt: '$1.71', payoutAmount: '$510' },
        { id: 7, acceptedDate: '2024-10-07', requiredViews: 400, receivedViews: 350, videoDate: '2024-10-11', maxAmount: '$250', per1000Amt: '$0.63', payoutAmount: '$220' },
        { id: 8, acceptedDate: '2024-10-08', requiredViews: 450, receivedViews: 400, videoDate: '2024-10-12', maxAmount: '$550', per1000Amt: '$1.22', payoutAmount: '$490' },
        { id: 9, acceptedDate: '2024-10-09', requiredViews: 500, receivedViews: 450, videoDate: '2024-10-13', maxAmount: '$300', per1000Amt: '$0.60', payoutAmount: '$270' },
        { id: 10, acceptedDate: '2024-10-10', requiredViews: 550, receivedViews: 500, videoDate: '2024-10-14', maxAmount: '$700', per1000Amt: '$1.27', payoutAmount: '$650' },
    ];

    useEffect(() => {
        document.title = 'Leads Earnings';
    }, []);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const earningsPerPage = 5; // Number of earnings records per page

    // Calculate total pages
    const totalPages = Math.ceil(allEarnings.length / earningsPerPage);

    // Get current earnings for the page
    const indexOfLastEarning = currentPage * earningsPerPage;
    const indexOfFirstEarning = indexOfLastEarning - earningsPerPage;
    const currentEarnings = allEarnings.slice(indexOfFirstEarning, indexOfLastEarning);

    // Handlers for pagination
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="p-5 bg-gray-50 rounded-lg shadow-md bg-gradient-to-r from-[#ecf5ff] to-[#d1edc4]">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <h5 className="text-xl font-semibold">Leads Earnings</h5>
                <div className="flex space-x-2 mt-2 md:mt-0">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg p-2 w-full md:w-64"
                        placeholder="Search Here"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-2 px-4">Lead Id</th>
                            <th className="py-2 px-4">Accepted Date</th>
                            <th className="py-2 px-4">Required Views</th>
                            <th className="py-2 px-4">Received Views</th>
                            <th className="py-2 px-4">Video Date</th>
                            <th className="py-2 px-4">Max. Amount</th>
                            <th className="py-2 px-4">Per/1000 Amt.</th>
                            <th className="py-2 px-4">Payout Amount</th>
                            <th className="py-2 px-4">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEarnings.map((earning) => (
                            <tr key={earning.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{earning.id}</td>
                                <td className="py-2 px-4 border-b">{earning.acceptedDate}</td>
                                <td className="py-2 px-4 border-b">{earning.requiredViews}</td>
                                <td className="py-2 px-4 border-b">{earning.receivedViews}</td>
                                <td className="py-2 px-4 border-b">{earning.videoDate}</td>
                                <td className="py-2 px-4 border-b">{earning.maxAmount}</td>
                                <td className="py-2 px-4 border-b">{earning.per1000Amt}</td>
                                <td className="py-2 px-4 border-b">{earning.payoutAmount}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col md:flex-row justify-between mt-4">
                <button
                    onClick={prevPage}
                    className={`px-4 py-2 text-white rounded ${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="self-center mt-2 md:mt-0">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={nextPage}
                    className={`px-4 py-2 text-white rounded ${currentPage === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default LeadsEarnings;
    