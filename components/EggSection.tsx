"use client";

import { motion } from "motion/react";

export default function EggSection() {
  return (
    <section 
      className="relative bg-yellow-600 text-white overflow-hidden my-8 sm:my-12 lg:my-16 rounded-2xl lg:rounded-none"
      style={{
        borderTopLeftRadius: 'clamp(1rem, 5vw, 20rem)',
        borderTopRightRadius: 'clamp(1rem, 10vw, 50rem)',
        borderBottomRightRadius: 'clamp(1rem, 2vw, 4rem)',
        borderBottomLeftRadius: 'clamp(1rem, 5vw, 30rem)',
        paddingTop: 'clamp(2rem, 5vw, 5rem)',
        paddingBottom: 'clamp(2rem, 5vw, 5rem)',
        paddingLeft: 'clamp(1rem, 3vw, 4rem)',
        paddingRight: 'clamp(1rem, 3vw, 8rem)'
      }}
    >
      {/* Background Pattern/Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10 py-8 sm:py-12 lg:py-16">
        {/* Top Section: Platform Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-12 lg:mb-16">
          {/* Left Side: Heading and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon/Graphic */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-20 blur-2xl"></div>
                <motion.div 
                  className="relative w-full h-full bg-yellow-500 rounded-full flex items-center justify-center border-4 border-yellow-400"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
            {/* Main Heading */}
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-5 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              An all-in-one platform for HR excellence.
            </motion.h2>
            {/* CTA Button */}
            <motion.button 
              className="px-6 py-3 sm:px-7 sm:py-3.5 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Meeting
            </motion.button>
          </motion.div>
          {/* Right Side: Four Feature Blocks */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Hire Block */}
            <motion.div 
              className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/10 hover:bg-yellow-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Hire</h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Expand your workforce with confidence. We provide comprehensive staffing solutions, from general to specialized roles, ensuring compliance and seamless onboarding across all positions.
              </p>
            </motion.div>
            {/* Manage Block */}
            <motion.div 
              className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/10 hover:bg-yellow-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Manage</h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Streamline your HR operations with our advanced HRMS automation. Manage onboarding, time off, expenses, and compliance with tools tailored to your business needs and location requirements.
              </p>
            </motion.div>
            {/* Pay Block */}
            <motion.div 
              className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/10 hover:bg-yellow-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Pay</h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Consolidate payroll for all employees and contractors. Our payroll solutions ensure accurate, on-time payments with built-in tax calculations, benefits management, and full compliance coverage.
              </p>
            </motion.div>
            {/* Engage Block */}
            <motion.div 
              className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/10 hover:bg-yellow-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Engage</h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Foster a thriving workplace culture with our HR advisory services. Drive productivity through talent management, career development, training programs, and employee engagement initiatives.
              </p>
            </motion.div>
          </motion.div>
        </div>
        {/* Bottom Section: Cost and Admin Time Savings */}
        <motion.div 
          className="border-t border-white/20 pt-10 sm:pt-12 lg:pt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Save on costs and admin time.
          </motion.h3>
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Metric 1: Time Saved */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">150 hrs</div>
              <p className="text-white/80 text-base sm:text-lg">saved on hiring compliance</p>
            </motion.div>
            {/* Metric 2: Fee Savings */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">52%</div>
              <p className="text-white/80 text-base sm:text-lg">saving in fees</p>
            </motion.div>
            {/* Metric 3: Yearly Savings */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">$500K</div>
              <p className="text-white/80 text-base sm:text-lg">saved yearly</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

