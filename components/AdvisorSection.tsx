"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function AdvisorSection() {
  return (
    <section className="w-full bg-blue-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Section - Image (Blank for now) */}
            <motion.div
              className="relative h-64 lg:h-auto min-h-[400px] bg-blue-100 overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-blue-200/20"></div>
              
              {/* Blank space - image to be added later */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Empty space for future image */}
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 bg-blue-300 rounded-full opacity-30 blur-xl"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute bottom-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-30 blur-xl"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>

            {/* Right Section - Text Content */}
            <motion.div
              className="p-8 lg:p-12 flex flex-col justify-center bg-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-blue-700 mb-3">
                  Our Team
                </h2>
                <motion.div
                  className="w-20 h-1 bg-blue-600 rounded-full mb-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.div>
              </motion.div>

              <motion.p
                className="text-gray-700 leading-relaxed mb-4 text-base lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                At Work Well Advisors, our team is comprised of experienced HR professionals dedicated to delivering exceptional solutions. With over 15 years of collective experience, we bring together expertise in payroll management, staffing, compliance, recruitment, and HR automation to serve our clients with excellence.
              </motion.p>

              <motion.p
                className="text-gray-700 leading-relaxed mb-8 text-base lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Our team is committed to understanding your unique business needs and providing tailored HR solutions that drive growth and success. We combine industry knowledge with innovative approaches to help organizations optimize their human resources and achieve their strategic goals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link href="/advisors">
                  <motion.button
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-fit group relative overflow-hidden hover:bg-blue-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Know More
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </motion.svg>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-blue-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-30 -mr-16 -mb-16"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

