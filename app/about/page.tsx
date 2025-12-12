"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="w-full pt-16 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 min-h-[500px] sm:min-h-[600px] flex flex-col relative z-10 mt-16 overflow-hidden rounded-b-3xl lg:rounded-b-none"
        style={{
          borderBottomLeftRadius: 'clamp(1.5rem, 5vw, 20rem)',
          borderBottomRightRadius: 'clamp(1.5rem, 10vw, 50rem)',
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop"
            alt="About Us Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Blue overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 via-blue-700/70 to-blue-600/60"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex-1 flex items-center relative z-10">
          <motion.div 
            className="text-center w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Work Well Advisors
            </motion.h1>
            <motion.h2 
              className="text-2xl lg:text-3xl font-semibold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Empowering Excellence Through HR Solutions
            </motion.h2>
            <motion.p 
              className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A dynamic organization at the forefront of HR solutions and talent advisory services, founded by seasoned professionals with extensive industry experience.
            </motion.p>
            
            {/* Statistics Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Total Headcount Card */}
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg border border-blue-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">10k</div>
                <div className="text-sm lg:text-base text-gray-700 font-medium">Total Headcount Manage</div>
              </motion.div>

              {/* Total Cost Card */}
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg border border-blue-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">100M+</div>
                <div className="text-sm lg:text-base text-gray-700 font-medium">Total Cost for Payroll</div>
              </motion.div>

              {/* Business Client Card */}
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg border border-blue-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm lg:text-base text-gray-700 font-medium">Business Clients</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
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
                Work Well Advisors Team
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Work Well Advisors is a dynamic organization at the forefront of HR solutions and talent advisory services. Founded by seasoned HR professionals boasting a collective experience of over 15 years, we bring a wealth of knowledge and expertise that spans diverse industry domains and global geographies.
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our mission is clear: to empower businesses like yours to optimize your talent needs effectively. We understand that in today's fast-paced and competitive landscape, having the right people in the right roles is paramount to success. That's why our offerings are meticulously tailored to address your specific workforce requirements, ensuring a steady supply of best in class talent who steer your organisational goals.
              </motion.p>
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
                        alt="Professional team"
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

      {/* Our Mission Section */}
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 py-6 sm:py-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
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
              At Work Well Advisors, our mission is to be a trusted human resource partner in a technology-driven world of talent.
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We strive to deliver tailored HR solutions that enable organizations to achieve their objectives and stay ahead in today's competitive landscape.
            </motion.p>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With a balanced blend of expertise and technology, we drive process excellence and efficiency to empower businesses for success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="w-full bg-blue-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Commitment
            </motion.h2>
            <motion.p 
              className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We believe in more than just providing staffing solutions – we're committed to fostering a culture of excellence, responsibility, and integrity. Our holistic approach to talent management encompasses a range of services designed to support your organization at every stage of its growth journey.
            </motion.p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Excellence Card */}
            <motion.div 
              className="bg-white rounded-xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative w-full h-48 bg-blue-600 rounded-lg mb-6 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
                  alt="Excellence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Delivering exceptional quality in every service we provide, setting the highest standards in HR solutions.
              </p>
            </motion.div>

            {/* Responsibility Card */}
            <motion.div 
              className="bg-white rounded-xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative w-full h-48 bg-blue-600 rounded-lg mb-6 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                  alt="Responsibility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Responsibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Taking ownership of our commitments and ensuring accountability in all our client relationships.
              </p>
            </motion.div>

            {/* Integrity Card */}
            <motion.div 
              className="bg-white rounded-xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative w-full h-48 bg-blue-600 rounded-lg mb-6 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
                  alt="Integrity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-700 leading-relaxed">
                Upholding the highest ethical standards and building trust through transparent and honest practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-yellow-600 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 rounded-2xl lg:rounded-none"
        style={{
          borderTopLeftRadius: 'clamp(1rem, 5vw, 30rem)',
          borderTopRightRadius: 'clamp(1rem, 2vw, 4rem)',
          borderBottomRightRadius: 'clamp(1rem, 5vw, 20rem)',
          borderBottomLeftRadius: 'clamp(1rem, 10vw, 50rem)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Transform Your HR Operations?
            </motion.h2>
            <motion.p 
              className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Partner with Work Well Advisors and experience the difference that expert HR solutions can make for your organization.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/#hero">
                <motion.button 
                  className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
              <motion.button 
                className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-base sm:text-lg border-2 border-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
