"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Staffing() {
  useEffect(() => {
    // Handle hash navigation after page load
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="w-full pt-16 sm:pt-24 pb-32 sm:pb-64 px-4 sm:px-6 lg:px-8 min-h-[600px] sm:min-h-[800px] flex flex-col relative z-10 mt-16 overflow-hidden rounded-b-3xl lg:rounded-b-none bg-blue-800"
        style={{
          borderBottomLeftRadius: 'clamp(1.5rem, 5vw, 20rem)',
          borderBottomRightRadius: 'clamp(1.5rem, 10vw, 50rem)',
        }}
      >
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="Staffing Solutions - Team Collaboration"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Split Overlay: Dark Blue on Left, Transparent on Right */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 via-blue-800/50 to-blue-800/20"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex-1 flex items-center relative z-20">
          <div className="w-full max-w-3xl">
            {/* Text Content with White Text on Blue Overlay */}
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
                    STAFFING
                  </h1>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 uppercase tracking-tight">
                    SOLUTIONS
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
                Find the Right Talent for Your Organization
              </motion.h2>
              
              <motion.p 
                className="text-base lg:text-lg text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our comprehensive staffing solutions help you find, recruit, and retain the best talent. Whether you need general staffing or specialized expertise, we provide flexible solutions tailored to meet your organization's unique workforce requirements.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/#hero">
                  <motion.button 
                    className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mb-8"
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
                  { label: "Expert Recruitment", value: "Quality Talent" },
                  { label: "Flexible Solutions", value: "Quick Placement" },
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
            {/* Left Side: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Introduction
              </motion.h2>
              
              <motion.div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p>
                  At Work Well Advisors, our Temporary/Contractual Staffing services offer a seamless and cost-effective solution for managing the end-to-end recruitment process. Our comprehensive approach covers every aspect of HR, from recruitment to exit modalities, ensuring efficient manpower outsourcing tailored to your needs.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                {/* Background decorative shape */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-full h-full bg-blue-200 rounded-lg -z-10 transform rotate-3"
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
                    alt="Staffing Solutions - Team Recruitment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
            alt="Office background"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>
        
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gray-100/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading */}
            <motion.div
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-800 mb-4">
                Key Features
              </h2>
              <div className="w-24 h-1 bg-green-800 mx-auto rounded-full"></div>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {/* Card 1: Recruitment Strategy */}
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                    alt="Recruitment Strategy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-green-800 mb-4 text-center">
                    Recruitment Strategy
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    We employ effective and unconventional recruitment strategies to source the best talent for your temporary staffing needs.
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Intelligent Process Automation */}
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
                    alt="Intelligent Process Automation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-green-800 mb-4 text-center">
                    Intelligent Process Automation
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Our intelligent automation tools ensure better turnaround time and resource quality, streamlining the recruitment process.
                  </p>
                </div>
              </motion.div>

              {/* Card 3: SLA Driven Process Management */}
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="SLA Driven Process Management"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-green-800 mb-4 text-center">
                    SLA Driven Process Management
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    With SLA-based service delivery and project management, we ensure accountability and transparency throughout the staffing process.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* General Staffing Section */}
      <section id="general-staffing" className="w-full bg-[#faf9f6] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
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
                General Staffing
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                From Sales and Logistics to Procurement and Retail to Hospitality Executives, we cover a wide spectrum of Industries including FMCD/CG, Warehouse & Logistics, Retail Industry, Hospitality, Sales Organizations etc.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                By providing flexible and scalable workforce solutions, We helps companies address fluctuations in demand, fill temporary or seasonal positions, and maintain operational efficiency.
              </motion.p>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                {/* Background decorative shape */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-full h-full bg-blue-200 rounded-lg -z-10 transform rotate-3"
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
                    src="/group-business-people-walking-outside-office-building.jpg"
                    alt="General Staffing - Team Collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialized Staffing Section */}
      <section 
        id="specialized-staffing"
        className="relative bg-gray-200 text-gray-900 overflow-hidden my-8 sm:my-12 lg:my-16 rounded-2xl lg:rounded-none scroll-mt-20"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 py-6 sm:py-8 lg:py-12">
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
                  className="absolute -top-4 -right-4 w-full h-full bg-blue-200 rounded-lg -z-10 transform rotate-3"
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
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                    alt="Specialized Staffing - Professional Experts"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
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
                Specialized Staffing
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We specialize in meeting the unique requirements of organizations seeking Finance & Accounts professionals and engineering experts, catering to the specific demands of both small and large enterprises.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                By leveraging industry expertise and extensive networks, specialized staffing services help organizations find top talent efficiently, ensuring that they have the right people in place to drive success in their specialized areas of operation.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Does Gig Workforce Work Section */}
      <section className="w-full bg-blue-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
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
              How Does Gig Workforce Work?
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Corporates engage in contractual staffing services when they require talented professionals for short-term projects. After setting clear expectations, our recruiters source, screen, and interview candidates to find the ideal fit.
            </motion.p>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Once selected, a contract is signed between the staffing agency and the hire, facilitating seamless remuneration.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How Does Gig Workforce Help Employees Section */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 py-6 sm:py-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              How Does Gig Workforce Help Employees?
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Contractual staffing provides professionals with opportunities for potentially higher incomes and greater flexibility.
            </motion.p>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Part-time employees often receive higher wages than full-time counterparts, aligning with recent trends in the workforce.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 sm:mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Advantages
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {/* Cost Optimization */}
              <motion.div
                className="bg-blue-50 rounded-xl p-6 sm:p-8 border border-blue-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Cost Optimization</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Temporary staffing helps businesses optimize resources and reduce costs by hiring manpower as per specific project requirements.
                </p>
              </motion.div>

              {/* Compliance */}
              <motion.div
                className="bg-blue-50 rounded-xl p-6 sm:p-8 border border-blue-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Compliance</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Our staffing services ensure compliance with statutory norms, relieving employers of complex employment processes and legal obligations.
                </p>
              </motion.div>

              {/* Finding the Right Fit */}
              <motion.div
                className="bg-blue-50 rounded-xl p-6 sm:p-8 border border-blue-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Finding the Right Fit</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We assist in finding the right talent for short-term projects, offering flexibility and reducing the risks associated with permanent hiring.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 py-6 sm:py-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  question: "How does temporary staffing benefit my business?",
                  answer: "Temporary staffing provides flexibility to scale your workforce based on project needs, reduces hiring costs, minimizes administrative burden, and allows you to access specialized talent without long-term commitments. It helps maintain operational efficiency during peak periods and seasonal fluctuations."
                },
                {
                  question: "What industries do you specialize in for temporary staffing solutions?",
                  answer: "We serve a wide range of industries including FMCD/CG, Warehouse & Logistics, Retail, Hospitality, Sales Organizations, Finance & Accounts, and Engineering sectors. Our expertise spans both general staffing needs and specialized professional requirements."
                },
                {
                  question: "How do you ensure the quality of temporary staff placed with our organization?",
                  answer: "We employ rigorous screening processes including skill assessments, background checks, and interviews. Our intelligent automation tools help match candidates to your specific requirements, and our SLA-driven process management ensures accountability and quality standards throughout the placement process."
                },
                {
                  question: "What is the duration of temporary staffing assignments?",
                  answer: "Temporary staffing assignments can vary based on your project needs - from short-term assignments of a few weeks to longer contractual positions spanning several months. We work with you to determine the optimal duration for your specific requirements."
                },
                {
                  question: "How does the contractual arrangement work between our organization and the temporary staff?",
                  answer: "Once we source and screen candidates, a contract is signed between the staffing agency and the hire. This arrangement facilitates seamless remuneration, compliance with statutory norms, and clear expectations for all parties. We handle all employment-related processes, relieving you of complex administrative tasks."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
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

