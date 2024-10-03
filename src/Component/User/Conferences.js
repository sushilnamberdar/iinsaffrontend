import React, { useState } from 'react';

const Conferences = () => {
    // Sample conferences data (10 dummy entries)
    const conferences = [
        {
            id: 1,
            userEmail: 'user1@example.com',
            date: '2024-09-01',
            state: 'California',
            city: 'Los Angeles',
            budget: '$5000',
            reporters: 5,
            adminStatus: 'Approved',
            finalStatus: 'Confirmed',
        },
        {
            id: 2,
            userEmail: 'user2@example.com',
            date: '2024-09-02',
            state: 'New York',
            city: 'New York City',
            budget: '$3000',
            reporters: 3,
            adminStatus: 'Pending',
            finalStatus: 'Awaiting Confirmation',
        },
        {
            id: 3,
            userEmail: 'user3@example.com',
            date: '2024-09-03',
            state: 'Texas',
            city: 'Dallas',
            budget: '$4000',
            reporters: 4,
            adminStatus: 'Approved',
            finalStatus: 'Confirmed',
        },
        {
            id: 4,
            userEmail: 'user4@example.com',
            date: '2024-09-04',
            state: 'Florida',
            city: 'Miami',
            budget: '$3500',
            reporters: 2,
            adminStatus: 'Rejected',
            finalStatus: 'Cancelled',
        },
        {
            id: 5,
            userEmail: 'user5@example.com',
            date: '2024-09-05',
            state: 'Illinois',
            city: 'Chicago',
            budget: '$6000',
            reporters: 6,
            adminStatus: 'Approved',
            finalStatus: 'Confirmed',
        },
        {
            id: 6,
            userEmail: 'user6@example.com',
            date: '2024-09-06',
            state: 'Nevada',
            city: 'Las Vegas',
            budget: '$8000',
            reporters: 8,
            adminStatus: 'Pending',
            finalStatus: 'Awaiting Confirmation',
        },
        {
            id: 7,
            userEmail: 'user7@example.com',
            date: '2024-09-07',
            state: 'Georgia',
            city: 'Atlanta',
            budget: '$5000',
            reporters: 4,
            adminStatus: 'Approved',
            finalStatus: 'Confirmed',
        },
        {
            id: 8,
            userEmail: 'user8@example.com',
            date: '2024-09-08',
            state: 'Arizona',
            city: 'Phoenix',
            budget: '$2500',
            reporters: 2,
            adminStatus: 'Pending',
            finalStatus: 'Awaiting Confirmation',
        },
        {
            id: 9,
            userEmail: 'user9@example.com',
            date: '2024-09-09',
            state: 'Colorado',
            city: 'Denver',
            budget: '$7000',
            reporters: 7,
            adminStatus: 'Approved',
            finalStatus: 'Confirmed',
        },
        {
            id: 10,
            userEmail: 'user10@example.com',
            date: '2024-09-10',
            state: 'Washington',
            city: 'Seattle',
            budget: '$4000',
            reporters: 3,
            adminStatus: 'Rejected',
            finalStatus: 'Cancelled',
        },
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const conferencesPerPage = 5; // Number of conferences per page

    // Calculate total pages
    const totalPages = Math.ceil(conferences.length / conferencesPerPage);

    // Get current conferences for the page
    const indexOfLastConference = currentPage * conferencesPerPage;
    const indexOfFirstConference = indexOfLastConference - conferencesPerPage;
    const currentConferences = conferences.slice(indexOfFirstConference, indexOfLastConference);

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

    // Function to set background color based on status
    const getStatusClass = (status) => {
        switch (status) {
            case 'Approved':
            case 'Confirmed':
                return 'bg-green-100 text-green-700';
            case 'Pending':
            case 'Awaiting Confirmation':
                return 'bg-yellow-100 text-yellow-700';
            case 'Rejected':
            case 'Cancelled':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="p-5 bg-gray-50 rounded-lg shadow-md bg-gradient-to-r from-[#ecf5ff] to-[#d1edc4]">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <h5 className="text-xl font-semibold">Conferences</h5>
                <div className="flex space-x-2 mt-2 md:mt-0">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg p-2 w-full md:w-64"
                        placeholder="Search Here"
                    />
                    <button className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded">Search</button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-2 px-4">Conference Id</th>
                            <th className="py-2 px-4">User Email</th>
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">State</th>
                            <th className="py-2 px-4">City</th>
                            <th className="py-2 px-4">Budget</th>
                            <th className="py-2 px-4">Reporters</th>
                            <th className="py-2 px-4">Admin Status</th>
                            <th className="py-2 px-4">Final Status</th>
                            <th className="py-2 px-4">Action</th>
                            <th className="py-2 px-4">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentConferences.map((conference) => (
                            <tr key={conference.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{conference.id}</td>
                                <td className="py-2 px-4 border-b">{conference.userEmail}</td>
                                <td className="py-2 px-4 border-b">{conference.date}</td>
                                <td className="py-2 px-4 border-b">{conference.state}</td>
                                <td className="py-2 px-4 border-b">{conference.city}</td>
                                <td className="py-2 px-4 border-b">{conference.budget}</td>
                                <td className="py-2 px-4 border-b">{conference.reporters}</td>
                                {/* Conditionally styled Admin Status */}
                                <td className={`py-2 px-4 border-b ${getStatusClass(conference.adminStatus)}`}>
                                    {conference.adminStatus}
                                </td>
                                {/* Conditionally styled Final Status */}
                                <td className={`py-2 px-4 border-b ${getStatusClass(conference.finalStatus)}`}>
                                    {conference.finalStatus}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Action</button>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
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
                <span className="self-center my-2 md:my-0">
                    Page {currentPage} of {totalPages}
                </span>
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

export default Conferences;
