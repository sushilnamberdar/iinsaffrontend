import React, { useEffect, useState } from 'react';

const CompletedLeads = () => {
    // Sample completed leads data
    const completedLeads = [
        { id: 1, completedDate: '2024-08-21', viewsRequired: 120, maxAmount: '$250', receivedViews: 120, per1000Amt: '$2.00', status: 'Completed' },
        { id: 2, completedDate: '2024-08-22', viewsRequired: 180, maxAmount: '$300', receivedViews: 180, per1000Amt: '$1.90', status: 'Completed' },
        { id: 3, completedDate: '2024-08-23', viewsRequired: 210, maxAmount: '$500', receivedViews: 210, per1000Amt: '$2.50', status: 'Completed' },
        { id: 4, completedDate: '2024-08-24', viewsRequired: 160, maxAmount: '$350', receivedViews: 160, per1000Amt: '$2.33', status: 'Completed' },
        { id: 5, completedDate: '2024-08-25', viewsRequired: 100, maxAmount: '$100', receivedViews: 100, per1000Amt: '$1.50', status: 'Completed' },
        { id: 6, completedDate: '2024-08-26', viewsRequired: 300, maxAmount: '$600', receivedViews: 300, per1000Amt: '$2.10', status: 'Completed' },
        { id: 7, completedDate: '2024-08-27', viewsRequired: 250, maxAmount: '$400', receivedViews: 250, per1000Amt: '$1.80', status: 'Completed' },
        { id: 8, completedDate: '2024-08-28', viewsRequired: 350, maxAmount: '$700', receivedViews: 350, per1000Amt: '$2.20', status: 'Completed' },
        { id: 9, completedDate: '2024-08-29', viewsRequired: 400, maxAmount: '$800', receivedViews: 400, per1000Amt: '$2.00', status: 'Completed' },
        { id: 10, completedDate: '2024-08-30', viewsRequired: 500, maxAmount: '$900', receivedViews: 500, per1000Amt: '$1.80', status: 'Completed' },
    ];

    useEffect(() => {
        document.title = 'Completed Leads';
    }, []);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const leadsPerPage = 5; // Number of leads per page

    // Calculate total pages
    const totalPages = Math.ceil(completedLeads.length / leadsPerPage);

    // Get current leads for the page
    const indexOfLastLead = currentPage * leadsPerPage;
    const indexOfFirstLead = indexOfLastLead - leadsPerPage;
    const currentLeads = completedLeads.slice(indexOfFirstLead, indexOfLastLead);

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
                <h5 className="text-xl font-semibold">Completed Leads</h5>
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
                            <th className="py-2 px-4">Completed Date</th>
                            <th className="py-2 px-4">Required Views</th>
                            <th className="py-2 px-4">Max. Amount</th>
                            <th className="py-2 px-4">Received Views</th>
                            <th className="py-2 px-4">Per/1000 Amt.</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentLeads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{lead.id}</td>
                                <td className="py-2 px-4 border-b">{lead.completedDate}</td>
                                <td className="py-2 px-4 border-b">{lead.viewsRequired}</td>
                                <td className="py-2 px-4 border-b">{lead.maxAmount}</td>
                                <td className="py-2 px-4 border-b">{lead.receivedViews}</td>
                                <td className="py-2 px-4 border-b">{lead.per1000Amt}</td>
                                <td className="py-2 px-4 border-b">{lead.status}</td>
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

export default CompletedLeads;
