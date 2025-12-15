"use client";

import { motion } from "motion/react";

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
            {/* Left Section - Blank */}
            <motion.div
              className="relative h-64 lg:h-auto min-h-[400px] bg-blue-100 overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-blue-200/20"></div>
              
              {/* Blank space */}
              <div className="relative w-full h-full flex items-center justify-center">
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
              </div>
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
                At <span className="font-semibold text-gray-900">Work Well Advisors</span>, we are a team of seasoned HR professionals with over 15 years of collective experience across diverse industries and global markets. Our team brings together expertise in payroll management, staffing solutions, compliance, recruitment, and HR technology to deliver comprehensive solutions that drive organizational success.
              </motion.p>

              <motion.p
                className="text-gray-700 leading-relaxed mb-4 text-base lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Our dedicated professionals are committed to understanding your unique business needs and providing tailored HR solutions that enhance operational efficiency, ensure compliance, and empower your workforce. With a focus on excellence, innovation, and client satisfaction, we work collaboratively to transform your HR operations and accelerate your journey to organizational excellence.
              </motion.p>

              <motion.p
                className="text-gray-700 leading-relaxed mb-8 text-base lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Partner with Work Well Advisors and experience the difference that a knowledgeable, experienced, and dedicated team can make for your organization. We are here to support your growth, manage your talent needs, and help you achieve your business objectives.
              </motion.p>

              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-30 -mr-16 -mb-16"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

