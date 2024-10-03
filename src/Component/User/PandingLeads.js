import React, { useEffect, useState } from 'react';

const PendingLeads = () => {
    // Sample pending leads data
    const pendingLeads = [
        { id: 1, acceptedDate: '2024-10-01', viewsRequired: 100, maxAmount: '$200', receivedViews: 80, per1000Amt: '$2.50', status: 'Pending' },
        { id: 2, acceptedDate: '2024-10-02', viewsRequired: 150, maxAmount: '$500', receivedViews: 120, per1000Amt: '$3.50', status: 'Pending' },
        { id: 3, acceptedDate: '2024-10-03', viewsRequired: 200, maxAmount: '$300', receivedViews: 150, per1000Amt: '$2.00', status: 'Pending' },
        { id: 4, acceptedDate: '2024-10-04', viewsRequired: 250, maxAmount: '$150', receivedViews: 200, per1000Amt: '$1.50', status: 'Pending' },
        { id: 5, acceptedDate: '2024-10-05', viewsRequired: 300, maxAmount: '$400', receivedViews: 250, per1000Amt: '$1.33', status: 'Pending' },
        { id: 6, acceptedDate: '2024-10-06', viewsRequired: 350, maxAmount: '$600', receivedViews: 300, per1000Amt: '$2.00', status: 'Pending' },
        { id: 7, acceptedDate: '2024-10-07', viewsRequired: 400, maxAmount: '$250', receivedViews: 350, per1000Amt: '$1.50', status: 'Pending' },
        { id: 8, acceptedDate: '2024-10-08', viewsRequired: 450, maxAmount: '$550', receivedViews: 400, per1000Amt: '$1.22', status: 'Pending' },
        { id: 9, acceptedDate: '2024-10-09', viewsRequired: 500, maxAmount: '$300', receivedViews: 450, per1000Amt: '$0.60', status: 'Pending' },
        { id: 10, acceptedDate: '2024-10-10', viewsRequired: 550, maxAmount: '$700', receivedViews: 500, per1000Amt: '$1.40', status: 'Pending' },
    ];

    useEffect(() => {
        document.title = "Pending Leads";
    }, []);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const leadsPerPage = 5; // Number of leads per page

    // Calculate total pages
    const totalPages = Math.ceil(pendingLeads.length / leadsPerPage);

    // Get current leads for the page
    const indexOfLastLead = currentPage * leadsPerPage;
    const indexOfFirstLead = indexOfLastLead - leadsPerPage;
    const currentLeads = pendingLeads.slice(indexOfFirstLead, indexOfLastLead);

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
                <h5 className="text-xl font-semibold">Pending Leads</h5>
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
                            <th className="py-2 px-4 text-left">Lead Id</th>
                            <th className="py-2 px-4 text-left">Accepted Date</th>
                            <th className="py-2 px-4 text-left">Required Views</th>
                            <th className="py-2 px-4 text-left">Max. Amount</th>
                            <th className="py-2 px-4 text-left">Received Views</th>
                            <th className="py-2 px-4 text-left">Per/1000 Amt.</th>
                            <th className="py-2 px-4 text-left">Status</th>
                            <th className="py-2 px-4 text-left">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentLeads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{lead.id}</td>
                                <td className="py-2 px-4 border-b">{lead.acceptedDate}</td>
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

export default PendingLeads;
