"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function PayrollSolutions() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="w-full pt-16 sm:pt-24 pb-32 sm:pb-64 px-4 sm:px-6 lg:px-8 min-h-[600px] sm:min-h-[800px] flex flex-col relative z-10 mt-16 overflow-hidden rounded-b-3xl lg:rounded-b-none bg-green-800"
        style={{
          borderBottomLeftRadius: 'clamp(1.5rem, 5vw, 20rem)',
          borderBottomRightRadius: 'clamp(1.5rem, 10vw, 50rem)',
        }}
      >
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
            alt="Payroll Solutions - Office Presentation"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Split Overlay: Dark Green on Left, Transparent on Right */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/70 via-green-800/50 to-green-800/20"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex-1 flex items-center relative z-20">
          <div className="w-full max-w-3xl">
            {/* Text Content with White Text on Green Overlay */}
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
                    PAYROLL
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
                Streamline Your Payroll Operations
              </motion.h2>
              
              <motion.p 
                className="text-base lg:text-lg text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our comprehensive payroll solutions ensure accurate and timely processing of employee payments, tax deductions, and compliance with all regulatory requirements. Experience seamless payroll management with our advanced technology and expert support.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/#hero">
                  <motion.button 
                    className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mb-8"
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
                  { label: "Accurate Processing", value: "Precision" },
                  { label: "Expert Support", value: "Dedicated Team" },
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                Businesses across the globe are becoming more and more employee-centric. Unlike the past, they are more sensitive towards the needs of their employees, as they believe employee satisfaction is their biggest strength and is an asset for the growth of their organization. Outsourcing payroll to a payroll agency is a pre-dominant step in this aspect.
              </p>
              <p>
                Businesses have realized that in-house payroll activities consume a great amount of critical time and focus on &quot;need of the hour&quot; activities. As a leading third-party employee service provider and payroll management specialists, we combine a highly skilled team, who use advanced technology to ensure flawless payroll processing for your company.
              </p>
              <p>
                We provide payroll services to small, medium and large organizations. Our payroll consulting services give you time to focus on your business and help you organize, analyse and add clarity to your core business operations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Offerings Section */}
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl z-0"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Text Block */}
            <motion.p 
              className="text-base lg:text-lg text-gray-700 mb-8 leading-relaxed text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At Work Well Advisors, we offer comprehensive and flexible payroll services tailored to meet the evolving needs of growing companies. Our solutions are designed to enhance operational efficiency while ensuring compliance with regulations.
            </motion.p>

            {/* White Card with Employee Self-Service Content */}
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-10 mb-8 border border-white/50 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Subtle gradient overlay on card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10">
                {/* Icon */}
              <div className="w-16 h-16 bg-green-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Employee Self-Service (ESS)
              </h2>

              {/* Introductory Paragraph */}
              <p className="text-base lg:text-lg text-gray-700 mb-8 leading-relaxed">
                Empower your employees with online access to view salary slips, submit IT declarations, manage flexible benefit plans, and raise queries conveniently.
              </p>

              {/* Feature List */}
              <ul className="space-y-4">
                {[
                  "Online Access to View/Print Salary Slip - Provide employees with easy access to their salary information anytime, anywhere.",
                  "Automated Attendance and Leave Management - Streamline attendance tracking and leave management processes with our automated solutions.",
                  "Reimbursement Management - Simplify and manage employee reimbursements efficiently.",
                  "Web-based Processing - Replace manual processes with our web-based platform for payroll, reimbursement, full and final settlement, report generation, and e-challan generation."
                ].map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base lg:text-lg text-gray-700 leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              </div>
            </motion.div>

            {/* Bottom Text Blocks */}
            <motion.p 
              className="text-base lg:text-lg text-gray-700 mb-4 leading-relaxed italic text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Effective payroll administration is pivotal for business transformation. If managing payroll in-house poses challenges, outsourcing to an experienced agency like Work Well Advisors can yield significant benefits.
            </motion.p>
            
            <motion.p 
              className="text-base lg:text-lg text-gray-700 leading-relaxed font-semibold text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Partner with us to optimize your payroll processes and propel your business towards success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-blue-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
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
              Why Choose Us
            </motion.h2>
            
            <motion.p 
              className="text-lg lg:text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We combine expertise, technology, and personalized service to deliver payroll solutions that drive your business forward.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Accuracy",
                  description: "Our team of HR professionals brings extensive experience and expertise in handling diverse HR functions, ensuring high-quality service delivery.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Confidentiality",
                  description: "We prioritize data security, employing encryption and best practices to safeguard sensitive payroll information.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                },
                {
                  title: "Compliance",
                  description: "We ensure compliance with local, state, and federal labour laws and regulations, mitigating the risk of legal issues and penalties for your business.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: "Customization",
                  description: "We tailor our HR outsourcing solutions to meet your specific business needs, providing flexible and scalable services that adapt to your evolving requirements.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  ),
                },
                {
                  title: "Efficiency",
                  description: "Our team of seasoned HR professionals brings extensive industry experience and expertise to every project, ensuring high-quality service delivery.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: "Transparency",
                  description: "Transparent reporting and communication channels keep you informed about payroll processes, maintaining clarity on financial commitments.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ),
                },
                {
                  title: "Client-centric Approach",
                  description: "We prioritize client satisfaction and strive to exceed expectations by delivering customized solutions tailored to meet their specific needs.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Compliance and Integrity",
                  description: "We adhere to the highest standards of integrity and compliance, ensuring that all our services are delivered ethically and in accordance with relevant regulations.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-200 hover:border-green-300 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              How It Works?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Document Submission",
                  description: "To initiate an effective payroll management system, we require specific documents from your end, including PAN, TAN, PF, ESI Registration, and Certificate of Registration. These documents ensure compliance with tax and labor regulations.",
                },
                {
                  step: "02",
                  title: "Payment Schedule",
                  description: "We work with you to set a payment schedule for salary transfers, whether weekly, monthly, or quarterly. This ensures timely salary credits for all employees, enhancing satisfaction and compliance.",
                },
                {
                  step: "03",
                  title: "Pay Calculation",
                  description: "Our payroll agency calculates pay based on employee categorization, considering factors like full-time, part-time, consultants, or interns. Accurate categorization ensures fair compensation alignment.",
                },
                {
                  step: "04",
                  title: "Establishing Rules",
                  description: "Clear rules regarding leaves, loss of pay, overtime, office hours, and salary deductions or additions need to be communicated to us in advance. This ensures accurate and compliant payroll processing.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 lg:p-8 shadow-lg border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 mt-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 py-6 sm:py-8 lg:py-12">
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
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  question: "How does outsourcing payroll benefit my business?",
                  answer: "Outsourcing payroll allows you to focus on core business activities while ensuring accurate, compliant, and timely payroll processing. It reduces administrative burden, minimizes errors, and provides access to expert knowledge and advanced technology.",
                },
                {
                  question: "What measures do you have in place to ensure compliance with tax regulations and labor laws?",
                  answer: "We maintain a dedicated compliance team that stays updated with all local, state, and federal regulations. Our systems are regularly audited, and we ensure all payroll processes adhere to the latest tax and labor law requirements.",
                },
                {
                  question: "Can your payroll management system integrate with our existing HR software?",
                  answer: "Yes, our payroll management system is designed to integrate seamlessly with most popular HR software platforms. We work with you to ensure smooth data flow and synchronization between systems.",
                },
                {
                  question: "How do you handle confidential employee data and ensure data security?",
                  answer: "We employ industry-standard encryption protocols, secure data storage, and strict access controls. All our team members are bound by confidentiality agreements, and we comply with data protection regulations to safeguard sensitive information.",
                },
                {
                  question: "What level of support do you provide for resolving payroll-related inquiries or issues?",
                  answer: "We provide dedicated support channels for both employers and employees. Our support team is available to address queries, resolve issues, and provide assistance throughout the payroll process. We also offer self-service portals for common inquiries.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-white/90 leading-relaxed">{faq.answer}</p>
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
