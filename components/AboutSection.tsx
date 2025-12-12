"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#faf9f6] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Text Content */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                ABOUT US
              </p>
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Empowering Talent, Accelerating Excellence: Your HR Partner
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Welcome to Work Well Advisors, your trusted partner in HR solutions and talent advisory. Founded by a team of industry veterans with over 15 years of collective experience across diverse sectors. We specialize in end-to-end talent management services, including payroll management, staffing, compliance, recruitment, and training. With a focus on excellence and inclusion, we tailor our solutions to meet your specific workforce needs, accelerating excellence in your organization. Experience the difference of partnering with Work Well Advisors today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/about">
                <motion.button 
                  className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Know More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Images */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Background blue shape */}
              <motion.div 
                className="absolute -top-4 -right-4 w-full h-full bg-blue-200 rounded-lg -z-10 transform rotate-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              ></motion.div>
              
              {/* Image container */}
              <div className="relative flex gap-4">
                {/* First Image */}
                <motion.div 
                  className="relative z-10 transform -rotate-2"
                  initial={{ opacity: 0, x: -30, rotate: -10 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                >
                  <div className="w-64 h-80 bg-gray-300 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="/close-up-happy-business-woman.jpg"
                      alt="Professional working"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                {/* Second Image */}
                <motion.div 
                  className="relative z-20 transform rotate-2 mt-8"
                  initial={{ opacity: 0, x: 30, rotate: 10 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                >
                  <div className="w-64 h-80 bg-gray-300 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

