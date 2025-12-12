"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Advisors() {
  const coreStrengths = [
    { letter: "C", word: "Connectedness", description: "Building meaningful relationships and connections" },
    { letter: "R", word: "Responsibility", description: "Taking ownership and accountability" },
    { letter: "A", word: "Achiever", description: "Driving results and excellence" },
    { letter: "E", word: "Empathy", description: "Understanding and supporting others" },
    { letter: "L", word: "Learner", description: "Continuously growing and adapting" },
    { letter: "I", word: "Integrity", description: "Upholding ethical standards" },
  ];

  const education = [
    { title: "PhD in Transpersonal Psychology", institution: "Sofia University, California", status: "Currently pursuing" },
    { title: "Graduated in Philosophy", institution: "Miranda House (Delhi University)", status: "Completed" },
    { title: "MBA in HR", institution: "Maharishi University of Management, Iowa", status: "Completed" },
    { title: "Strategic Human Resource Practices", institution: "Cornell University", status: "Completed" },
    { title: "ICF Certified Coach", institution: "International Coach Federation", status: "Certified" },
  ];

  const professionalRoles = [
    { role: "CHRO", company: "Lenskart", period: "Last corporate role" },
    { role: "Asia Pacific Head of HR", company: "UnitedLex", period: "Startup experience" },
    { role: "Head of HR", company: "ExclusivelyIn", period: "Startup experience" },
    { role: "Head of HR", company: "IBM Global Technology Services", period: "10 years at IBM Daksh" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="w-full bg-blue-100 pt-16 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 min-h-[400px] sm:min-h-[500px] flex flex-col relative z-10 mt-16 overflow-hidden rounded-b-3xl lg:rounded-b-none"
        style={{
          borderBottomLeftRadius: 'clamp(1.5rem, 5vw, 20rem)',
          borderBottomRightRadius: 'clamp(1.5rem, 10vw, 50rem)',
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex-1 flex items-center">
          <motion.div 
            className="text-center w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-sm lg:text-base font-semibold text-blue-600 uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              OUR ADVISOR
            </motion.p>
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Suruchi Maitra
            </motion.h1>
            <motion.h2 
              className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our Advisor
            </motion.h2>
            <motion.a
              href="https://www.linkedin.com/in/suruchi-maitra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-[#faf9f6] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
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
                    src="/suchi_mitra.jpeg"
                    alt="Suruchi Maitra"
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
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Suruchi
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Suruchi Maitra is the Co-Founder of <span className="font-semibold text-gray-900">Artha School of Entrepreneurship</span>, a company focused on solving the problem of scale for entrepreneurs. Artha School of Entrepreneurship runs the Artha Scale Program to impact the lives of 1,00,000 founders across India over the next few years with the mission to create economic and social prosperity for entrepreneurs and their communities. Artha also offers coaching and consulting services to help individuals and organizations scale.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Her core strengths include Connectedness, Responsibility, Achiever, Empathy, Learner, and Integrity. She is an <span className="font-semibold text-gray-900">ICF (International Coach Federation) certified coach</span>. She coaches through an integral approach covering all aspects of human existence i.e., mental, emotional, physical, and spiritual.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-700 leading-relaxed italic border-l-4 border-blue-500 pl-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                &quot;Suruchi&apos;s intention statement defines her, and she does everything through its lens. Her intention is to live a life of gratitude, compassion, self-awareness, and oneness, thereby purposefully supporting others to create breakthroughs for themselves.&quot;
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Journey Section */}
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
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional Journey
            </motion.h2>
            
            <motion.p 
              className="text-lg lg:text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Over a career spanning <span className="font-bold text-gray-900">26 years</span> in growth companies, Suruchi has played several leadership roles and has served as a Head of HR since 2007 until she moved on to start Artha School of Entrepreneurship in 2021.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {professionalRoles.map((role, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{role.role}</h3>
                      <p className="text-lg text-blue-600 font-semibold mb-1">{role.company}</p>
                      <p className="text-sm text-gray-600">{role.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Qualifications Section */}
      <section className="w-full bg-blue-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Education & Qualifications
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-blue-200 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{edu.title}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      edu.status === "Currently pursuing" 
                        ? "bg-yellow-100 text-yellow-700" 
                        : "bg-green-100 text-green-700"
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="w-full bg-yellow-600 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 rounded-2xl lg:rounded-none"
        style={{
          borderTopLeftRadius: 'clamp(1rem, 5vw, 30rem)',
          borderTopRightRadius: 'clamp(1rem, 2vw, 4rem)',
          borderBottomRightRadius: 'clamp(1rem, 5vw, 20rem)',
          borderBottomLeftRadius: 'clamp(1rem, 10vw, 50rem)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Core Strengths
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {coreStrengths.map((strength, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-3xl font-extrabold text-yellow-600">{strength.letter}</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">{strength.word}</h3>
                  </div>
                  <p className="text-white/90 text-sm lg:text-base">{strength.description}</p>
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

