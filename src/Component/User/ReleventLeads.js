import React, { useEffect, useState } from 'react';

const RelevantLeads = () => {
    // Sample lead data
    const allLeads = [
        { id: 1, date: '2024-10-01', location: 'New York', viewsRequired: 100, adType: 'Banner', adLength: '30 sec', maxAmount: '$200' },
        { id: 2, date: '2024-10-02', location: 'Los Angeles', viewsRequired: 150, adType: 'Video', adLength: '60 sec', maxAmount: '$500' },
        { id: 3, date: '2024-10-03', location: 'Chicago', viewsRequired: 200, adType: 'Banner', adLength: '30 sec', maxAmount: '$300' },
        { id: 4, date: '2024-10-04', location: 'Houston', viewsRequired: 250, adType: 'Audio', adLength: '15 sec', maxAmount: '$150' },
        { id: 5, date: '2024-10-05', location: 'Phoenix', viewsRequired: 300, adType: 'Banner', adLength: '30 sec', maxAmount: '$400' },
        { id: 6, date: '2024-10-06', location: 'Philadelphia', viewsRequired: 350, adType: 'Video', adLength: '60 sec', maxAmount: '$600' },
        { id: 7, date: '2024-10-07', location: 'San Antonio', viewsRequired: 400, adType: 'Banner', adLength: '30 sec', maxAmount: '$250' },
        { id: 8, date: '2024-10-08', location: 'San Diego', viewsRequired: 450, adType: 'Video', adLength: '60 sec', maxAmount: '$550' },
        { id: 9, date: '2024-10-09', location: 'Dallas', viewsRequired: 500, adType: 'Audio', adLength: '15 sec', maxAmount: '$300' },
        { id: 10, date: '2024-10-10', location: 'San Jose', viewsRequired: 550, adType: 'Banner', adLength: '30 sec', maxAmount: '$700' },
    ];

    useEffect(() => {
        document.title = 'Relevant Leads';
    }, []);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const leadsPerPage = 5; // Number of leads per page

    // Calculate total pages
    const totalPages = Math.ceil(allLeads.length / leadsPerPage);

    // Get current leads for the page
    const indexOfLastLead = currentPage * leadsPerPage;
    const indexOfFirstLead = indexOfLastLead - leadsPerPage;
    const currentLeads = allLeads.slice(indexOfFirstLead, indexOfLastLead);

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
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h5 className="text-xl font-semibold">Relevant Leads</h5>
                <div className="flex space-x-2 mt-4 md:mt-0">
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
                            <th className="py-2 px-4">Lead Id</th>
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">State/City</th>
                            <th className="py-2 px-4">Required Views</th>
                            <th className="py-2 px-4">Ad Type</th>
                            <th className="py-2 px-4">Required Ad Length</th>
                            <th className="py-2 px-4">Max. Amount</th>
                            <th className="py-2 px-4">Accept</th>
                            <th className="py-2 px-4">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentLeads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{lead.id}</td>
                                <td className="py-2 px-4 border-b">{lead.date}</td>
                                <td className="py-2 px-4 border-b">{lead.location}</td>
                                <td className="py-2 px-4 border-b">{lead.viewsRequired}</td>
                                <td className="py-2 px-4 border-b">{lead.adType}</td>
                                <td className="py-2 px-4 border-b">{lead.adLength}</td>
                                <td className="py-2 px-4 border-b">{lead.maxAmount}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>
                                </td>
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

export default RelevantLeads;
