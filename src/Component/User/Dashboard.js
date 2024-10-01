import React, { useEffect } from 'react'
import todapng from './icons/today.png'
import toalleadspng from './icons/leads.png'
import alpng from './icons/al.png'
import cleadpng from './icons/clead.png'
import todayconfgpng from './icons/todayConfo.png'
import confrancepng from './icons/conferences.png'
import acceptedConfrancepng from './icons/accepted_conf.png'
import completedconfrance from './icons/completeconfo.png'


const Dashboard = () => {

    useEffect(() => {
        document.title = 'User Dashboard';
    }, []);
    

  return (
    <div className="bg-gradient-to-r from-[#ecf5ff] to-[#d1edc4]">
    <section className="flex justify-center">
      <div className="w-full max-w-screen-xl px-4">

        {/* Top Section: User ID and Verification Status */}
        <div className="flex justify-center">
          <div className="w-full">
            <div className="text-center mt-5 mb-5">
              <h5 className="mb-0">Your iinsaf id is:
                <span id="ContentPlaceHolder1_iinsaf_id_lbl">087474</span>
                &nbsp;|&nbsp;
                {/* Verification Badge */}
                <span className="border border-green-500 bg-green-500 text-white px-3 py-1 rounded-lg inline-flex items-center">
                  <i className="mdi mdi-checkbox-marked-circle text-white"></i>
                  <span className="ml-2 text-white">Verified Account</span>
                </span>
              </h5>
            </div>
          </div>
        </div>

        {/* Cards Section: Displays various statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Leads Today Card */}
          <div className="bg-white shadow rounded-lg p-5">
            <h5 className="text-xl font-medium mb-2">Leads Today</h5>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={todapng} alt="Today's Leads Icon" className="w-12 h-12" />
              </div>
              <div className="pl-3">
                <h6 className="text-lg font-semibold">
                  <span id="ContentPlaceHolder1_today_leads_lbl">0</span>
                  <a href="today-leads.aspx" className="bg-blue-500 text-white px-2 py-1 rounded ml-2">
                    <i className="bi  items-center bi-patch-plus-fill"></i> View
                  </a>
                </h6>
              </div>
            </div>
          </div>

          {/* Total Leads Card */}
          <div className="bg-white shadow rounded-lg p-5">
            <h5 className="text-xl font-medium mb-2">Total Leads</h5>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={toalleadspng} alt="Total Leads Icon" className="w-12 h-12" />
              </div>
              <div className="pl-3">
                <h6 className="text-lg font-semibold">
                  <span id="ContentPlaceHolder1_all_leads_lbl">18</span>
                  <a href="leads.aspx" className="bg-blue-500 text-white px-2 py-1 rounded ml-2">
                    <i className="bi bi-patch-plus-fill"></i> View
                  </a>
                </h6>
              </div>
            </div>
          </div>

          {/* Accepted Leads Card */}
          <div className="bg-white shadow rounded-lg p-5">
            <h5 className="text-xl font-medium mb-2">Accepted Leads</h5>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={alpng} alt="Accepted Leads Icon" className="w-12 h-12" />
              </div>
              <div className="pl-3">
                <h6 className="text-lg font-semibold">
                  <span id="ContentPlaceHolder1_accepted_leads_lbl">0</span>
                  <a href="accepted-leads.aspx" className="bg-blue-500 text-white px-2 py-1 rounded ml-2">
                    <i className="bi bi-patch-plus-fill"></i> View
                  </a>
                </h6>
              </div>
            </div>
          </div>

          {/* Completed Leads Card */}
          <div className="bg-white shadow rounded-lg p-5">
            <h5 className="text-xl font-medium mb-2">Completed Leads</h5>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={cleadpng} alt="Completed Leads Icon" className="w-12 h-12" />
              </div>
              <div className="pl-3">
                <h6 className="text-lg font-semibold">
                  <span id="ContentPlaceHolder1_completed_leads_lbl">0</span>
                  <a href="completed-leads.aspx" className="bg-blue-500 text-white px-2 py-1 rounded ml-2">
                    <i className="bi bi-patch-plus-fill"></i> View
                  </a>
                </h6>
              </div>
            </div>
          </div>

          {/* Today's Conferences Card */}
          <div className="bg-white shadow rounded-lg p-5">
            <h5 className="text-xl font-medium mb-2">Today's Conferences</h5>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={todayconfgpng} alt="Today's Conferences Icon" className="w-12 h-12" />
              </div>
              <div className="pl-3">
                <h6 className="text-lg font-semibold">
                  <span id="ContentPlaceHolder1_today_conferences_lbl">0</span>
                  <a href="today-conferences.aspx" className="bg-blue-500 text-white px-2 py-1 rounded ml-2">
                    <i className="bi bi-patch-plus-fill"></i> View
                  </a>
                </h6>
              </div>
            </div>
          </div>

          {/* Total Conferences Card */}
          <div className="bg-white shadow rounded-lg p-5">
            <h5 className="text-xl font-medium mb-2">Total Conferences</h5>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={confrancepng} alt="Total Conferences Icon" className="w-12 h-12" />
              </div>
              <div className="pl-3">
                <h6 className="text-lg font-semibold">
                  <span id="ContentPlaceHolder1_all_conferences_lbl">9</span>
                  <a href="conferences.aspx" className="bg-blue-500 text-white px-2 py-1 rounded ml-2">
                    <i className="bi bi-patch-plus-fill"></i> View
                  </a>
                </h6>
              </div>
            </div>
          </div>

          {/* Accepted Conferences Card */}
          <div className="bg-white shadow rounded-lg p-5">
            <h5 className="text-xl font-medium mb-2">Accepted Conferences</h5>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={acceptedConfrancepng} alt="Accepted Conferences Icon" className="w-12 h-12" />
              </div>
              <div className="pl-3">
                <h6 className="text-lg font-semibold">
                  <span id="ContentPlaceHolder1_accepted_conferences_lbl">0</span>
                  <a href="accepted-conferences.aspx" className="bg-blue-500 text-white px-2 py-1 rounded ml-2">
                    <i className="bi bi-patch-plus-fill"></i> View
                  </a>
                </h6>
              </div>
            </div>
          </div>

          {/* Completed Conferences Card */}
          <div className="bg-white shadow rounded-lg p-5">
            <h5 className="text-xl font-medium mb-2">Completed Conferences</h5>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={completedconfrance} alt="Completed Conferences Icon" className="w-12 h-12" />
              </div>
              <div className="pl-3">
                <h6 className="text-lg font-semibold">
                  <span id="ContentPlaceHolder1_completed_conferences_lbl">0</span>
                  <a href="completed-conferences.aspx" className="bg-blue-500 text-white px-2 py-1 rounded ml-2">
                    <i className="bi bi-patch-plus-fill"></i> View
                  </a>
                </h6>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Apply for iinsaf card */}
        <div className="text-center py-8">
          <h5 className="font-semibold">
            <strong>You are eligible to apply for iinsaf card.</strong>
          </h5>
          <a href="apply-card.aspx" className="text-blue-500 underline">
            <strong>Apply Card Here</strong>
          </a>
        </div>

      </div>
    </section>
  </div>
  )
}

export default Dashboard
