import React from 'react'
import { Title, Meta } from "react-head";

const TermsConditions = () => {
  return (
    <>
    <Title>Terms & Conditions | Digify America</Title>
<Meta name="description" content="Review our terms and conditions for using Digify America services, website, and digital products." />

    <div className="bg-gray-100 text-gray-800 min-h-screen p-4 md:p-8 font-sans">
     
      <div className="container mx-auto max-w-5xl pt-40">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-[300] text-gray-900 mb-2">Terms & Conditions: Setting clear boundaries</h1>
          <p className="text-md md:text-lg text-gray-600">At Digify America, we believe that great partnerships start with clear expectations. Our Terms and Conditions are the foundation for successful collaborations. By accessing or using our services, you agree to the following terms that govern our professional relationship.</p>
        </header>

        <main className="bg-white p-6 md:p-8 rounded-2xl shadow-lg space-y-8">
          {/* Project Engagement Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Project Engagement</h2>
            
            <h3 className="text-xl text-gray-800 mb-2">Initial Consultation and Proposal</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>All client relationships begin with a complimentary discovery session to understand your needs</li>
              <li>Following this consultation, we will provide a detailed proposal outlining scope, deliverables, timeline, and costs</li>
              <li>Proposals remain valid for 30 days from issuance</li>
              <li>Work commences only after written approval of the proposal and receipt of the specified deposit</li>
            </ul>

            <h3 className="text-xl text-gray-800 mt-6 mb-2">Project Timeline and Milestones</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Each project includes a clear timeline with defined milestones</li>
              <li>Timelines assume prompt client feedback at each review stage</li>
              <li>Delays in client feedback may result in adjusted project completion dates</li>
              <li>Rush services may be available for certain projects at additional cost</li>
            </ul>

            <h3 className="text-xl text-gray-800 mt-6 mb-2">Revision Policy</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Each deliverable includes a specified number of revision rounds</li>
              <li>Additional revisions beyond this allocation will incur hourly charges</li>
              <li>Major scope changes after project initiation may require contract modification</li>
            </ul>
          </section>

          {/* Payment Terms Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Payment Terms</h2>

            <h3 className="text-xl text-gray-800 mb-2">Fee Structure</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Project rates are provided in writing before commencement of any work</li>
              <li>Hourly services are billed in 15-minute increments</li>
              <li>Retainer clients receive priority scheduling and discounted rates</li>
              <li>All prices are quoted in USD unless otherwise specified</li>
            </ul>

            <h3 className="text-xl text-gray-800 mt-6 mb-2">Payment Schedule</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Standard projects require a 50% deposit before work begins</li>
              <li>Remaining balance is due upon project completion, prior to final file delivery</li>
              <li>Ongoing services are billed monthly with payment due within 15 days</li>
              <li>Late payments incur a 1.5% monthly finance charge after 30 days</li>
            </ul>

            <h3 className="text-xl text-gray-800 mt-6 mb-2">Expenses</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Third-party costs (stock photos, fonts, plugins, etc.) are billed separately</li>
              <li>Travel expenses for in-person meetings outside our service area require pre-approval</li>
              <li>All expenses are documented and included in monthly invoices</li>
            </ul>
          </section>

          {/* Intellectual Property and Ownership Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Intellectual Property and Ownership</h2>

            <h3 className="text-xl text-gray-800 mb-2">During Development</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Digify America retains ownership of all work products during development phase</li>
              <li>Work-in-progress materials cannot be used by clients until final payment</li>
              <li>Concept presentations remain property of Digify America unless selected for final development</li>
            </ul>

            <h3 className="text-xl text-gray-800 mt-6 mb-2">Upon Project Completion</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Upon full payment, clients receive exclusive rights to final deliverables</li>
              <li>Custom code, designs, and content become client property</li>
              <li>Digify America retains right to display completed work in portfolio unless confidentiality agreement exists</li>
              <li>Standard licensed elements (fonts, plugins, etc.) remain subject to their original license terms</li>
            </ul>

            <h3 className="text-xl text-gray-800 mt-6 mb-2">Attribution Rights</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Digify America may include discreet credit in website footer unless otherwise agreed</li>
              <li>We reserve the right to reference our work with you in case studies and marketing materials</li>
              <li>Client testimonials may be requested upon project completion</li>
            </ul>
          </section>

          {/* Confidentiality and Data Protection Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Confidentiality and Data Protection</h2>

            <h3 className="text-xl text-gray-800 mb-2">Client Information</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>All proprietary client information is held in strict confidence</li>
              <li>Non-disclosure agreements available upon request</li>
              <li>Internal business practices, strategies, and customer data remain confidential during and after our engagement</li>
              <li>Access to sensitive systems requires signed confidentiality agreements from all team members</li>
            </ul>

            <h3 className="text-xl text-gray-800 mt-6 mb-2">Data Security</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Client assets are stored on secure, encrypted servers</li>
              <li>Regular backups performed during active project phases</li>
              <li>Passwords and access credentials transmitted via secure channels only</li>
            </ul>
          </section>

          {/* Project Termination Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Project Termination</h2>
            
            <h3 className="text-xl text-gray-800 mb-2">Client-Initiated Termination</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Projects may be terminated with 30 days written notice</li>
              <li>Payment required for all completed work and expenses incurred</li>
              <li>Early termination fee may apply as specified in project contract</li>
            </ul>
            
            <h3 className="text-xl text-gray-800 mt-6 mb-2">Agency-Initiated Termination</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Digify America may terminate projects in cases of non-payment or breach of terms</li>
              <li>Termination for creative differences includes delivery of completed components</li>
              <li>We reserve the right to decline service for projects that conflict with our values or capabilities</li>
            </ul>
          </section>
          
          {/* Communication and Support Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Communication and Support</h2>

            <h3 className="text-xl text-gray-800 mb-2">Response Times</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Business hours: Monday-Friday, 9am-6pm Eastern Time</li>
              <li>Standard response time: within 24 business hours</li>
              <li>Emergency support available for website outages and critical issues</li>
              <li>After-hours communications addressed next business day unless urgent</li>
            </ul>

            <h3 className="text-xl text-gray-800 mt-6 mb-2">Preferred Communication Channels</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Project management system for all project-related communications</li>
              <li>Email for contract and billing matters</li>
              <li>Phone/video calls for complex discussions, scheduled in advance</li>
              <li>All significant decisions and approvals must be documented in writing</li>
            </ul>
          </section>

          {/* Limitation of Liability Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Limitation of Liability</h2>
            
            <h3 className="text-xl text-gray-800 mb-2">Performance Guarantees</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>While we implement industry best practices, specific performance outcomes cannot be guaranteed</li>
              <li>Search rankings, conversion rates, and engagement metrics depend on multiple external factors</li>
              <li>Website functionality guaranteed only on current browser versions at time of development</li>
            </ul>
            
            <h3 className="text-xl text-gray-800 mt-6 mb-2">Indemnification</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Clients must provide legal rights to all content provided for projects</li>
              <li>Digify America not liable for copyright or trademark violations in client-provided materials</li>
              <li>Maximum liability limited to total project fees paid</li>
            </ul>
          </section>

          {/* Final Paragraph and Contact Info */}
          <section>
            <p className="mt-6 text-gray-600">
              By engaging our services, you acknowledge that you have read, understood, and agreed to these terms. These conditions ensure a smooth, professional working relationship focused on achieving your digital goals.
            </p>
            <p className="mt-4 text-gray-600">
              Have questions about our terms? Contact our team for clarification before beginning your project.
            </p>
          </section>
        </main>
      </div>
    </div>
      
    </>
  )
}

export default TermsConditions
