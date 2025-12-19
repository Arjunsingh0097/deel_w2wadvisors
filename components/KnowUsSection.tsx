"use client";

import { motion } from "motion/react";

export default function KnowUsSection() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      detail: "info@w2wadvisors.in",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Address",
      detail: "Plot No 396 Street No 08, Sector 45 Noida, Uttar Pradesh. 201301",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      detail: "+91 92058 38443",
    },
  ];

  return (
    <section 
      id="contact"
      className="relative bg-yellow-600 text-white overflow-hidden my-8 sm:my-12 lg:my-16 rounded-2xl lg:rounded-none"
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
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 py-8 sm:py-12 lg:py-16">
        {/* Heading Section */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Know Us
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Partner with Work Well Advisors today and experience the difference in HR solutions. Contact us to learn more about how we can support your organization's talent needs and accelerate your journey to excellence.
          </motion.p>
        </motion.div>

        {/* Contact Information Cards */}
        <div className="space-y-4">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              className="bg-yellow-500/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex items-start gap-4 hover:bg-yellow-500/30 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              {/* Icon */}
              <motion.div
                className="bg-yellow-500 rounded-lg p-3 flex-shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-white">
                  {contact.icon}
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-white">{contact.label}</h3>
                <p className="text-white/90">{contact.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

