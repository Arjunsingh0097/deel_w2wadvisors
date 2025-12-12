"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { DemoForm } from "@/components/DemoForm";
import EggSection from "@/components/EggSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import WhySection from "@/components/WhySection";
import AdvisorSection from "@/components/AdvisorSection";
import KnowUsSection from "@/components/KnowUsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section 
        id="hero"
        className="w-full bg-blue-100 pt-16 sm:pt-24 pb-32 sm:pb-64 px-4 sm:px-6 lg:px-8 min-h-[600px] sm:min-h-[800px] flex flex-col relative z-10 mt-16 overflow-hidden rounded-b-3xl lg:rounded-b-none"
        style={{
          borderBottomLeftRadius: 'clamp(1.5rem, 5vw, 20rem)',
          borderBottomRightRadius: 'clamp(1.5rem, 10vw, 50rem)',
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Welcome to Work Well Advisors
              </motion.h1>
              <motion.h2 
                className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Work Well Advisors: Empowering Excellence in HR Solutions
              </motion.h2>
              <motion.p 
                className="text-base lg:text-lg text-gray-700 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Experience Work Well Advisors: Your Premier HR Partner. With over 15 years of collective experience, we specialize in custom HR solutions that drive excellence. From payroll and staffing to compliance and recruitment, we're dedicated to empowering your team for success.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="#hero">
                  <motion.button 
                    className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors mb-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
              
              {/* Statistics Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 mt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* Total Headcount */}
                <motion.div 
                  className="text-center md:text-left relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-5xl lg:text-6xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent tracking-tight">
                    10k
                  </div>
                  <div className="text-sm lg:text-base text-gray-700 font-medium uppercase tracking-wider">Total Headcount Manage</div>
                  <div className="mt-2 flex gap-1 justify-center md:justify-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Total Cost */}
                <motion.div 
                  className="text-center md:text-left relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-5xl lg:text-6xl font-extrabold mb-2 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent tracking-tight">
                    100M+
                  </div>
                  <div className="text-sm lg:text-base text-gray-700 font-medium uppercase tracking-wider">Total Cost for Payroll</div>
                  <div className="mt-2 flex gap-1 justify-center md:justify-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-200 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Business Client */}
                <motion.div 
                  className="text-center md:text-left relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-5xl lg:text-6xl font-extrabold mb-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 bg-clip-text text-transparent tracking-tight">
                    10+
                  </div>
                  <div className="text-sm lg:text-base text-gray-700 font-medium uppercase tracking-wider">Business Clients</div>
                  <div className="mt-2 flex gap-1 justify-center md:justify-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <DemoForm />
            </motion.div>
          </div>
        </div>
      </section>
      <EggSection />
      <AboutSection />
      <MissionSection />
      <WhySection />
      <AdvisorSection />
      <KnowUsSection />
      <Footer />
    </div>
  );
}
