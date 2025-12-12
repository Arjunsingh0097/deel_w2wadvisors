"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ContractLabourCompliances() {
  const services = [
    "Registration & license under Contract Labour Regulation and Abolition Act",
    "Advise on the minimum wages to be paid to contract labourers",
    "Maintaining records, registers, forms & notices under various legislations for our clients",
    "Audit of contractors to ensure our clients are risk free",
    "Timely submission of annual/half-yearly/quarterly returns under various Labour Laws"
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
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80"
            alt="Contract Labour Compliances - Professional Team"
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
                    CONTRACT LABOUR
                  </h1>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 uppercase tracking-tight">
                    COMPLIANCES
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
                Comprehensive Compliance Solutions for Contract Labour
              </motion.h2>
              
              <motion.p 
                className="text-base lg:text-lg text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Specialized compliance services to ensure your contract labour engagements remain compliant with all statutory requirements and regulations.
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
                  { label: "Expert Team", value: "Risk-Free Solutions" },
                  { label: "Comprehensive", value: "End-to-End Services" },
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

      {/* Contract Labour Section */}
      <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
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
                Contract Labour
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Engagement of Contract Labour is an age old practice. With the introduction of new economic policy, this has assumed greater importance. Even today, in the business world, this is the most talked about subject.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Employers of various industries – from micro to large – do depend on this workforce in order to sustain and as Principal Employers, they need to take utmost care when they engage a contractor. Besides being compliant, they have to ensure that the contractors engaged by them to stay compliant.
              </motion.p>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
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
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Contract Labour Compliance"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
                </motion.div>
              </div>
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
