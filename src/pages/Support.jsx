import React from 'react'
import { Helmet } from "react-helmet-async"; 


const Support = () => {
  return (
    <>
    <Helmet>
      <title>24/7 Support | Digify America Customer Assistance</title>
      <meta name="description" content="Get 24/7 customer support for all your service needs including branding, marketing, SEO, and web development." />

    </Helmet>

      <div className="bg-gray-100 text-gray-800 min-h-screen p-4 md:p-8 font-sans">

        <div className="container mx-auto max-w-5xl pt-40">
          <header className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-[300] text-gray-900 mb-2">24/7 Support: Always there when you need us</h1>
            <p className="text-md md:text-lg text-gray-600">In the digital world, problems don't stick to business hours and neither do we. At Digify America, we understand that website issues, campaign questions, or sudden digital opportunities can arise at any hour. That's why our support team operates around the clock, ensuring you are never left waiting when minutes matter.</p>
          </header>

          <main className="bg-white p-6 md:p-8 rounded-2xl shadow-lg space-y-8">
            {/* Always-On Assistance Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Always-On Assistance</h2>
              <p className="text-xl text-gray-800 mb-2">Our dedicated support team is available through multiple channels:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Live Chat: Instant assistance through our website or client portal</li>
                <li>Emergency Hotline: Direct access to on-call specialists for critical issues</li>
                <li>Ticket System: Comprehensive tracking for complex requests</li>
                <li>Email Support: Detailed documentation of your concerns with quick response times</li>
              </ul>
              <p className="mt-4 text-gray-700 ml-4">
                Whether it's midnight or midday, weekday or weekend, your digital presence remains our priority.
              </p>
            </section>

            {/* What Our Support Covers Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">What Our Support Covers</h2>

              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Technical Emergencies: Website outages, security alerts, or functionality failures</li>
                <li>Content Updates: Time-sensitive changes to your digital platforms</li>
                <li>Campaign Adjustments: Quick modifications to running marketing initiatives</li>
                <li>Performance Questions: Real-time insight into metrics and analytics</li>
                <li>Training Refreshers: Guidance on using tools and platforms we have implemented</li>
              </ul>
              <p className="mt-4 text-gray-700 ml-4">
                Our support team doesn't just answer questions—they solve problems with a level of ownership that makes them an extension of your business.
              </p>
            </section>

            {/* Response Time Commitment Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Response Time Commitment</h2>

              <p className="text-xl text-gray-800 mb-2">We don't believe in keeping you waiting:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Critical Issues: Initial response within 15 minutes, with regular updates until resolution</li>
                <li>Standard Requests: Acknowledgment within 1 hour, resolution or plan within 4 hours</li>
                <li>General Inquiries: Complete response within 1 business day</li>
              </ul>
              <p className="mt-4 text-gray-700 ml-4">
                Every request is tracked, documented, and followed through to completion. No issue is closed until you confirm it's resolved to your satisfaction.
              </p>
            </section>

            {/* Proactive Monitoring Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Proactive Monitoring</h2>

              <p className="text-xl text-gray-800 mb-2">Great support isn't just reactive—it's preventive. Our systems continuously monitor your digital assets for:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Server uptime and performance</li>
                <li>Security vulnerabilities</li>
                <li>Site speed metrics</li>
                <li>Broken links or functionality</li>
                <li>Form submission errors</li>
              </ul>
              <p className="mt-4 text-gray-700 ml-4">
                We will resolve issues before you even notice them, keeping your digital presence running smoothly around the clock.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default Support
