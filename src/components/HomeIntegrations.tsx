"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const integrationsList = [
  "Salesforce",
  "HubSpot",
  "Zoho CRM",
  "Zapier",
  "Make",
  "Webhooks",
  "Google Sheets",
  "Microsoft Excel",
  "Web Forms",
  "Facebook Lead Ads",
  "Google Ads",
  "WhatsApp Business",
  "Twilio",
  "Exotel",
  "Plivo",
  "SIP / PRI / IPBX",
  "Razorpay",
  "Odoo",
  "Oracle Opera",
  "eZee",
  "Mews",
  "Mysoft HMS"
];

const HomeIntegrations: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#2AA7D3]">
              Integrations
            </p>
            <h2 className="mt-4 max-w-md text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Keep the tools you already love. We just make them effortlessly smart.
            </h2>
            <div className="mt-6 space-y-4">
              <p className="text-lg leading-relaxed text-slate-600">
                <strong className="text-slate-900 font-semibold">Multi-Source Lead Import.</strong> Seamlessly pull leads from Facebook, Google Ads, your website, or any custom webhook the moment they arrive.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                <strong className="text-slate-900 font-semibold">Zero Disruption.</strong> Keep your existing phone numbers, CRM, and payment stack. We integrate directly into your current setup with no rip-and-replace required.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {integrationsList.map((item) => (
              <span 
                key={item} 
                className="rounded-xl border border-slate-200/80 bg-white px-5 py-3 text-[14px] sm:text-[15px] font-semibold text-slate-700 shadow-sm hover:border-[#2AA7D3]/40 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeIntegrations;

