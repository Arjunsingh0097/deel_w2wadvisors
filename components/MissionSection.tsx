"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function MissionSection() {
  return (
    <section 
      className="relative bg-gray-200 text-gray-900 overflow-hidden my-8 sm:my-12 lg:my-16 rounded-2xl lg:rounded-none"
      style={{
        borderTopLeftRadius: 'clamp(1rem, 5vw, 30rem)',
        borderTopRightRadius: 'clamp(1rem, 2vw, 4rem)',
        borderBottomRightRadius: 'clamp(1rem, 5vw, 20rem)',
        borderBottomLeftRadius: 'clamp(1rem, 10vw, 50rem)',
        paddingTop: 'clamp(2rem, 5vw, 5rem)',
        paddingBottom: 'clamp(2rem, 5vw, 5rem)',
        paddingLeft: 'clamp(1rem, 3vw, 4rem)',
        paddingRight: 'clamp(1rem, 3vw, 8rem)'
      }}
    >
      {/* Background Pattern/Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Text Content */}
          <motion.div
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
                OUR MISSION
              </p>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At Work Well Advisors, our mission is to revolutionize talent management through cutting-edge technology and personalized service.
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We empower organizations to build high-performing teams by providing comprehensive HR solutions that streamline operations, ensure compliance, and drive growth.
            </motion.p>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We are committed to fostering innovative HR practices that create inclusive workplaces where talent thrives. Through our expertise in payroll management, staffing, compliance, recruitment, and training, we help businesses unlock their full potential and achieve sustainable success.
            </motion.p>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Our vision is to be the most trusted HR partner, transforming how organizations manage their workforce and enabling them to focus on what matters most—their core business objectives.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
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

          {/* Right Side: Visual Elements */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative shapes */}
              <motion.div 
                className="absolute -top-8 -right-8 w-64 h-64 bg-blue-100 rounded-full blur-2xl opacity-50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.5, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-8 -left-8 w-64 h-64 bg-green-100 rounded-full blur-2xl opacity-50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.5, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              ></motion.div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <motion.div 
                  className="bg-blue-50 rounded-xl p-6 border border-blue-100 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative w-full h-32 bg-blue-600 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
                      alt="Innovation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 200px"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">Cutting-edge technology solutions</p>
                </motion.div>

                <motion.div 
                  className="bg-green-50 rounded-xl p-6 border border-green-100 mt-8 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative w-full h-32 bg-green-600 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                      alt="Excellence"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 200px"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-sm text-gray-600">High-performing teams</p>
                </motion.div>

                <motion.div 
                  className="bg-yellow-50 rounded-xl p-6 border border-yellow-100 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative w-full h-32 bg-yellow-600 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
                      alt="Growth"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 200px"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Growth</h3>
                  <p className="text-sm text-gray-600">Drive sustainable success</p>
                </motion.div>

                <motion.div 
                  className="bg-purple-50 rounded-xl p-6 border border-purple-100 mt-8 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative w-full h-32 bg-purple-600 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop"
                      alt="Trust"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 200px"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Trust</h3>
                  <p className="text-sm text-gray-600">Most trusted HR partner</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

