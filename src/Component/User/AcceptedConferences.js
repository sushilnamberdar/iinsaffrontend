import React, { useEffect, useState } from 'react';

const AcceptedConferences = () => {
    // Sample conference data
    const allConferences = [
        { id: 1, name: 'React Summit', date: '2024-10-01', location: 'Amsterdam', participants: 200, status: 'Accepted' },
        { id: 2, name: 'Vue.js Conference', date: '2024-10-02', location: 'Paris', participants: 150, status: 'Accepted' },
        { id: 3, name: 'JavaScript Conference', date: '2024-10-03', location: 'Berlin', participants: 300, status: 'Accepted' },
        { id: 4, name: 'CSS Day', date: '2024-10-04', location: 'London', participants: 100, status: 'Accepted' },
        { id: 5, name: 'DevFest', date: '2024-10-05', location: 'San Francisco', participants: 250, status: 'Accepted' },
        { id: 6, name: 'DjangoCon', date: '2024-10-06', location: 'Chicago', participants: 120, status: 'Accepted' },
        { id: 7, name: 'PyCon', date: '2024-10-07', location: 'Sydney', participants: 180, status: 'Accepted' },
        { id: 8, name: 'NodeConf', date: '2024-10-08', location: 'Tokyo', participants: 300, status: 'Accepted' },
        { id: 9, name: 'PHP Conference', date: '2024-10-09', location: 'Toronto', participants: 220, status: 'Accepted' },
        { id: 10, name: 'Go Conference', date: '2024-10-10', location: 'New York', participants: 400, status: 'Accepted' },
    ];

    useEffect(() => {
        document.title = 'Accepted Conferences';
    }, []);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const conferencesPerPage = 5; // Number of conferences per page

    // Calculate total pages
    const totalPages = Math.ceil(allConferences.length / conferencesPerPage);

    // Get current conferences for the page
    const indexOfLastConference = currentPage * conferencesPerPage;
    const indexOfFirstConference = indexOfLastConference - conferencesPerPage;
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
                <h5 className="text-xl font-semibold">Accepted Conferences</h5>
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
                            <th className="py-2 px-4">Conference ID</th>
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Location</th>
                            <th className="py-2 px-4">Participants</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentConferences.map((conference) => (
                            <tr key={conference.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{conference.id}</td>
                                <td className="py-2 px-4 border-b">{conference.name}</td>
                                <td className="py-2 px-4 border-b">{conference.date}</td>
                                <td className="py-2 px-4 border-b">{conference.location}</td>
                                <td className="py-2 px-4 border-b">{conference.participants}</td>
                                <td className="py-2 px-4 border-b">{conference.status}</td>
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

export default AcceptedConferences;
