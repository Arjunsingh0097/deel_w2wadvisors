"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function AuditAndConsultation() {
  const services = [
    "Business start-ups to Mergers & acquisitions to Closures",
    "Comprehensive audit of all labour related records for an establishment",
    "Due Diligence",
    "Criticality analysis of risk exposure or liability",
    "Expert consultation and solution based presentation for decision making and course correction",
    "Consultation for course corrections",
    "Legal opinions",
    "Drafting the various policies with respect to HR/IR/ER"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="w-full pt-16 sm:pt-24 pb-32 sm:pb-64 px-4 sm:px-6 lg:px-8 min-h-[600px] sm:min-h-[800px] flex flex-col relative z-10 mt-16 overflow-hidden rounded-b-3xl lg:rounded-b-none bg-indigo-600"
        style={{
          borderBottomLeftRadius: 'clamp(1.5rem, 5vw, 20rem)',
          borderBottomRightRadius: 'clamp(1.5rem, 10vw, 50rem)',
        }}
      >
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80"
            alt="Audit & Consultation - Professional Team"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={90}
            unoptimized={false}
          />
        </div>

        {/* Split Overlay: Dark Indigo on Left, Transparent on Right */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/70 via-indigo-800/50 to-indigo-800/20"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex-1 flex items-center relative z-20">
          <div className="w-full max-w-3xl pb-16">
            {/* Text Content with White Text on Indigo Overlay */}
            <motion.div 
              className="text-left relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="mb-6">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-2 uppercase tracking-tight">
                    AUDIT &
                  </h1>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 uppercase tracking-tight">
                    CONSULTATION
                  </h1>
                  <div className="w-32 h-1 bg-white rounded-full"></div>
                </div>
              </motion.div>

              <motion.h2 
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Expert Consultation and Audit Services for Corporate Governance
              </motion.h2>
              
              <motion.p 
                className="text-base lg:text-lg text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Comprehensive audit and consultation services on labour legislative & HR/IR compliance, an integral component of corporate governance.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/#hero">
                  <motion.button 
                    className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mb-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
              
              {/* Key Features */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {[
                  { label: "Expert Team", value: "Comprehensive Solutions" },
                  { label: "Risk Analysis", value: "Due Diligence" },
                ].map((feature, index) => (
                  <div key={index} className="text-white">
                    <div className="text-2xl font-bold">{feature.value}</div>
                    <div className="text-sm text-white/80">{feature.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side: Image */}
            <motion.div
              className="order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Background decorative shape */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-full h-full bg-indigo-200 rounded-lg -z-10 transform rotate-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                ></motion.div>
                
                {/* Image */}
                <motion.div 
                  className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                    alt="Audit & Consultation Services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side: Text Content */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Corporate Governance Excellence
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                The focus on both local and global markets for mobilization of resources has made Corporate Governance increasingly difficult. We offer Consultation and Audit Services on the labour legislative & HR/IR part of compliance which is an integral component of corporate governance.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section className="w-full bg-indigo-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Services we Offer
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 border border-indigo-200 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                    {service}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
