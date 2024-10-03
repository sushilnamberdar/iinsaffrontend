import React, { useEffect, useState } from 'react';

const ConferencesEarnings = () => {
    // Sample conference earnings data
    const allConferences = [
        { id: 1, acceptedDate: '2024-10-01', payoutAmount: '$500' },
        { id: 2, acceptedDate: '2024-10-02', payoutAmount: '$750' },
        { id: 3, acceptedDate: '2024-10-03', payoutAmount: '$300' },
        { id: 4, acceptedDate: '2024-10-04', payoutAmount: '$450' },
        { id: 5, acceptedDate: '2024-10-05', payoutAmount: '$600' },
        { id: 6, acceptedDate: '2024-10-06', payoutAmount: '$800' },
        { id: 7, acceptedDate: '2024-10-07', payoutAmount: '$250' },
        { id: 8, acceptedDate: '2024-10-08', payoutAmount: '$900' },
        { id: 9, acceptedDate: '2024-10-09', payoutAmount: '$350' },
        { id: 10, acceptedDate: '2024-10-10', payoutAmount: '$700' },
    ];

    useEffect(() => {
        document.title = 'Conference Earnings';
    }, []);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const earningsPerPage = 5; // Number of earnings records per page

    // Calculate total pages
    const totalPages = Math.ceil(allConferences.length / earningsPerPage);

    // Get current conference earnings for the page
    const indexOfLastConference = currentPage * earningsPerPage;
    const indexOfFirstConference = indexOfLastConference - earningsPerPage;
    const currentConferences = allConferences.slice(indexOfFirstConference, indexOfLastConference);

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
                <h5 className="text-xl font-semibold">Conference Earnings</h5>
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
                            <th className="py-2 px-4">Conference Id</th>
                            <th className="py-2 px-4">Accepted Date</th>
                            <th className="py-2 px-4">Payout Amount</th>
                            <th className="py-2 px-4">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentConferences.map((conference) => (
                            <tr key={conference.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{conference.id}</td>
                                <td className="py-2 px-4 border-b">{conference.acceptedDate}</td>
                                <td className="py-2 px-4 border-b">{conference.payoutAmount}</td>
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

export default ConferencesEarnings;
