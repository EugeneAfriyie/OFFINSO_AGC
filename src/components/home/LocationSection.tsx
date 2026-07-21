"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Car, Navigation, ArrowRight } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-24 bg-white border-t border-borderline">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>VISIT OUR CAMPUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-body tracking-tight">
            Where to <span className="text-primary-600">Find Us</span>
          </h2>
          <p className="mt-4 text-base text-subtext">
            We are conveniently located in Offinso. We can't wait to welcome you in person!
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 bg-canvas rounded-3xl p-8 border border-borderline flex flex-col justify-between shadow-subtle">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-body mb-1">Assemblies of God Church</h3>
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Offinso Main Campus</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-subtext uppercase">Physical Address</div>
                    <div className="text-sm font-semibold text-body">123 Faith Avenue, Offinso, Ashanti Region</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-subtext uppercase">Service Schedules</div>
                    <div className="text-sm font-semibold text-body">Sunday Mornings: 9:00 AM & 11:00 AM</div>
                    <div className="text-xs text-subtext">Wednesday Bible Study: 7:00 PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-subtext uppercase">Church Office Hours</div>
                    <div className="text-sm font-semibold text-body">Monday – Thursday: 9:00 AM – 4:00 PM</div>
                    <div className="text-xs text-subtext">Phone: (555) 019-2831</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-subtext uppercase">Parking Instructions</div>
                    <div className="text-xs text-subtext">Dedicated visitor parking is available directly facing the main entrance doors.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-borderline">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Map Container */}
          <div className="lg:col-span-7 relative min-h-[380px] rounded-3xl overflow-hidden shadow-card border border-borderline bg-slate-100">
            <iframe
              title="Church Campus Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31682.49392238475!2d-1.666667!3d6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDAuMCJOIDHCsDQwJzAwLjAiVw!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
