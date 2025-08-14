import React from 'react';
import { Palette, MessageSquare, Briefcase, FileText, RefreshCw, CheckCircle, Lightbulb, Star, Award, TrendingUp } from 'lucide-react';
import heroImage from "../../assets/service-vector/brading.png"
const BrandingSection = () => {
  return (
    <section className="bg-white pt-30">
      {/* Hero Section */}
      <div className="container mx-auto max-w-7xl pt-16 pb-24 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Content Area */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-[300] text-gray-900 leading-tight mb-6">
              Your business is more than the logo, color palette, or the mission statement.
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              This is just the tip of the iceberg. What people feel about your business is your brand. Branding is how a company shows who they are so people remember them. Like how a superhero has a costume and catchphrase, companies have their own look and style. That’s branding.
            </p>
            <p className='text-lg text-gray-700 mb-8'>
              At Digify America, we help build brands that are experiences. Let’s see how we make sure your brand walks, talks, and behaves the way it should, consistently and confidently.
            </p>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={heroImage}
              alt="Branding Illustration"
              className="w-full max-w-[70vh] h-auto rounded-lg  object-cover"
            />
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-[300] text-black mb-6 text-center">
            What We Offer
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 text-center mb-10">
            We take a comprehensive approach to branding that sets you up to win across every customer touchpoint. From the first impression to the follow-up email, we have the complete list.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                <Lightbulb className="text-[#1c75bc] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[400] text-gray-900">Brand Strategy & Positioning</h3>
                <p className="text-gray-700">We help you figure out your brand identity and how it is different from the sea of same services out there. This includes audience research, market positioning, and competitive analysis. In short: CLARITY.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                <MessageSquare className="text-[#1c75bc] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[400] text-gray-900">Voice & Messaging Development</h3>
                <p className="text-gray-700">What does your brand sound like? Is it bold or calm or conversational? We craft tone and messaging guidelines that give your brand a recognizable voice, no matter who is writing.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                <Palette className="text-[#1c75bc] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[400] text-gray-900">Visual Identity Design</h3>
                <p className="text-gray-700">Color palettes, typography, iconography, image style, all these tell your story without words. And yes, we will design you a knockout logo that is memorable.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                <FileText className="text-[#1c75bc] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[400] text-gray-900">Brand Guidelines</h3>
                <p className="text-gray-700">Your brand should be consistent everywhere—website, social, ads, packaging, the works. We create a full brand guide to keep everything aligned.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                <RefreshCw className="text-[#1c75bc] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[400] text-gray-900">Brand Refresh Packages</h3>
                <p className="text-[#1c75bc]">It’s time to get rid of old logo. We will evolve your brand without losing its roots, giving you a modern look that still feels like you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Digify America? */}
      <div className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-[300] text-gray-900 mb-6 text-center">
            Why Digify America?
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 text-center mb-8">
            Here’s what makes us different from every freelancer or template-hawking design agency:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#1c75bc] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Lead with Strategy: Your branding is more than looking good. It’s about saying the right thing to the right people.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#1c75bc] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Listen Like Humans: Your brand has history, goals, and quirks. We don’t flatten that but amplify it.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#1c75bc] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Build to Scale: You can be a solo owner or a big team, we create brand systems that grow with you.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#1c75bc] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Keep It Cohesive: Visuals, tone, messaging, and experience, all working in harmony, not fighting for attention.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#1c75bc] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-[#1c75bc]">We keep it in budget: High-end branding without high-end pricing. Our services are investment to expand your business and not mere expense.</p>
            </div>
          </div>
           <div className="text-center bg-[#1c75bc] text-white p-8 md:p-12 mt-30 rounded-xl shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-[300] mb-4">
          Let’s build a Brand that means something
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Your brand exists already, but are you shaping that, or letting it happen by accident? Let’s define, design, and deliver a brand that’s impossible to ignore and impossible to forget.
        </p>
        {/* <a
          href="#"
          className="inline-block bg-white text-purple-700 font-semibold py-4 px-12 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Schedule a FREE CONSULTATION today!
        </a> */}
      </div>
        </div>
      </div>

      {/* Final CTA Section */}
     
    </section>
  );
};

export default BrandingSection;
