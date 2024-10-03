import React from 'react'
import Dashboard from './Dashboard'
import Leads from './Leads'
import RelevantLeads from './ReleventLeads'
import PendingConferences from './PendingConferences'
import AcceptedConferences from './AcceptedConferences'
import CompletedConferences from './ CompletedConferences'
import Conferences from './Conferences'
import PendingLeads from './PandingLeads'
import AcceptedLeads from './AcceptedLeads'
import CompletedLeads from './CompletedLeads'
import LeadsEarnings from './LeadsEarnings'
import ConferencesEarnings from './ConferencesEarnings'
import WithdrawalHistory from './WithdrawlHistory'
import PaymentWithdraw from './PaymentWithdraw'

const UserDashboard = () => {
  return (
    <div>
     <Dashboard/>

     {/* LEADS */}
     <Leads/>
     <RelevantLeads/>
     <PendingLeads/>
     <AcceptedLeads/>
     <CompletedLeads/>

     {/* CONFERENCES  */}
      <Conferences/>
      <PendingConferences/>
      <AcceptedConferences/>
      <CompletedConferences/>

      {/* PAYMENT  */}
      <LeadsEarnings/>
      <ConferencesEarnings/>
      <PaymentWithdraw/>
      <WithdrawalHistory/>
  
    </div>
  )
}

export default UserDashboard
