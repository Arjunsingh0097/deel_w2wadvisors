"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function HRAdvisoryOutsourcing() {
  const elevateFeatures = [
    {
      title: "Repositioning HR as Strategic Partner",
      description: "Repositioning HR as a strategic partner rather than merely administrative support.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
      title: "HR Organization Assessment",
      description: "Evaluating and communicating data regarding your HR organization current status.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
    },
    {
      title: "Human Capital Strategy",
      description: "Crafting a human capital strategy that seamlessly aligns with your overarching business goals.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
    },
    {
      title: "HR & Talent Initiatives",
      description: "Creating, refining, and implementing HR and talent initiatives tailored to realize your human capital strategy.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
    },
    {
      title: "Employee Journey Optimization",
      description: "Optimizing the employee journey to cultivate deeper engagement and bolster retention rates.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    },
    {
      title: "Talent Acquisition Frameworks",
      description: "Developing innovative talent acquisition and selection frameworks to attract top-tier candidates.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
    },
    {
      title: "Cost-Effectiveness Management",
      description: "Evaluating optimal strategies for managing the cost-effectiveness of service delivery.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "Technology Integration",
      description: "Harnessing the power of cloud-based platforms, automation, and artificial intelligence to streamline operational workflows.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      title: "Future of Work",
      description: "Introducing cutting-edge concepts and technologies related to the Future of Work, harnessing the potential of blended, hybrid, or remote work arrangements.",
      image: "https://images.unsplash.com/photo-1521791136064-7986b292a6a0?w=800&h=600&fit=crop"
    }
  ];

  const ourServices = [
    {
      title: "Talent Management",
      description: "Talent is a critical success factor for every organization. Being a leader in talent solutions, we take pride in what we do, connecting great people to great opportunities and helping businesses win and careers soar. We aim to connect talent potential to business outcomes and advance your business goals.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
      title: "Organizational Development",
      description: "We engage end-to-end with the client right from identification of the opportunity/sizing problem(s), customized diagnostics, data-driven decisions for changes, and implementing solutions through systematic change management & management of change frameworks.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
    },
    {
      title: "Organizational Design",
      description: "Understand anchors influencing the current organizational design, identify gaps against strategic intent, adopt benchmark framework(s) to identify ideal design / re-design, and partner throughout the implementation cycle Job Evaluation (point factor method) and cohort results with total rewards & other people's practice areas.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
    },
    {
      title: "HR Team Coaching & Mentoring",
      description: "HR Team moves beyond teams of high performers in the field of HR to high-performing HR teams that create sustainable competitive advantage! It is the program to activate the potential of HR teams through validated techniques that will support HR teams to successfully overcome any challenges, instigate change and create business impact.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
    },
    {
      title: "HR Audit / Diagnostic Assessment",
      description: "The HR audit/diagnostic assessment is organised according to the key human resource components in a matrix showing four stages of development. It will be administered by the consultant in close collaboration with at least one organisation representative, in conjunction with comprehensive interviews with key staff members.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    },
    {
      title: "Job Analysis & Job Evaluation Services",
      description: "Job analysis is the process of identifying and determining in detail the contents of a particular job, thereby clearly defining Key Result Areas/Key Responsibilities Areas (KRAs) such as knowledge, technical, communication and personal skills, mental, aptitude, physical and emotional abilities to perform a particular task.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
    },
    {
      title: "Workforce Planning & Restructuring",
      description: "We are here to provide flexible solutions for diverse needs, ensuring the smoothest possible transition for all stakeholders, i.e. employers, employees who will leave the organization, employees who will continue working in the company and business continuity.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "Total Rewards Advisory",
      description: "Leveraging Total Rewards to drive growth, Drafting Statutory & Regulatory compliance guidelines.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="w-full pt-16 sm:pt-24 pb-32 sm:pb-64 px-4 sm:px-6 lg:px-8 min-h-[600px] sm:min-h-[800px] flex flex-col relative z-10 mt-16 overflow-hidden rounded-b-3xl lg:rounded-b-none bg-purple-600"
        style={{
          borderBottomLeftRadius: 'clamp(1.5rem, 5vw, 20rem)',
          borderBottomRightRadius: 'clamp(1.5rem, 10vw, 50rem)',
        }}
      >
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=1080&fit=crop&q=80"
            alt="HR Advisory & Outsourcing - Professional Team"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={90}
            unoptimized={false}
          />
        </div>

        {/* Split Overlay: Dark Purple on Left, Transparent on Right */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/70 via-purple-800/50 to-purple-800/20"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex-1 flex items-center relative z-20">
          <div className="w-full max-w-3xl">
            {/* Text Content with White Text on Purple Overlay */}
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
                    HR ADVISORY
                  </h1>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 uppercase tracking-tight">
                    & OUTSOURCING
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
                Streamline Your HR Operations
              </motion.h2>
              
              <motion.p 
                className="text-base lg:text-lg text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Comprehensive HR outsourcing solutions designed to streamline your HR operations and drive organizational success. From recruitment to employee engagement and compliance management.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/#hero">
                  <motion.button 
                    className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mb-8"
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
                  { label: "Expert Team", value: "HR Specialists" },
                  { label: "Comprehensive", value: "End-to-End Solutions" },
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
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Introduction
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                At Work Well Advisors, we offer comprehensive HR outsourcing solutions designed to streamline your HR operations and drive organizational success. From recruitment to employee engagement and compliance management, our dedicated team of HR experts handles all aspects of HR, allowing you to focus on your core business activities.
              </motion.p>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Background decorative shape */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-full h-full bg-purple-200 rounded-lg -z-10 transform rotate-3"
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
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
                    alt="HR Advisory Services - Team Meeting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started CTA Section */}
      <section 
        className="relative bg-purple-600 text-white overflow-hidden my-8 sm:my-12 lg:my-16 rounded-2xl lg:rounded-none"
        style={{
          borderTopLeftRadius: 'clamp(1rem, 5vw, 20rem)',
          borderTopRightRadius: 'clamp(1rem, 10vw, 50rem)',
          borderBottomRightRadius: 'clamp(1rem, 5vw, 30rem)',
          borderBottomLeftRadius: 'clamp(1rem, 2vw, 4rem)',
          paddingTop: 'clamp(2rem, 5vw, 5rem)',
          paddingBottom: 'clamp(2rem, 5vw, 5rem)',
          paddingLeft: 'clamp(1rem, 3vw, 4rem)',
          paddingRight: 'clamp(1rem, 3vw, 8rem)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 py-6 sm:py-8 lg:py-12">
          <motion.div
            className="text-center"
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
              Get Started with Work Well Advisors Today!
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 sm:mb-10 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Experience the benefits of efficient and reliable HR outsourcing solutions with Work Well Advisors. Let us handle your HR responsibilities so you can focus on growing your business and achieving your organizational goals.
            </motion.p>

            <motion.button 
              className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Focus On Your Core Business Section */}
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
                  className="absolute -top-4 -right-4 w-full h-full bg-purple-200 rounded-lg -z-10 transform rotate-3"
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
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                    alt="Focus On Your Core Business"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
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
                Focus On Your Core Business With Our HR Advisory Services
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our clientele highly values our adeptness in guiding them through the intricacies of reimagining their HR function – where they seek our counsel on pioneering, dynamic, and streamlined solutions. We firmly believe that our methodology is rooted in comprehending the precise requirements of our clientele and the nuances of the local landscape.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our extensive reach and capacity to operate globally, coupled with our reservoir of local expertise, empower us to engage individuals wherever they may be. We are committed to continually investing in technology and nurturing our talent to ensure unparalleled customer satisfaction.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                We curate and deploy a cadre of versatile professionals to spearhead strategic endeavours at our partner establishments. Whether serving as consultants or seamlessly integrating into the fabric of partner organizations, we drive transformative change.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Our offerings encompass bespoke HR consultancy services and holistic advisory solutions spanning organizational and personnel practices tailored to the unique needs of our partners. Together, these competencies serve as a definitive competitive edge, generating substantial value and influence in the market landscape.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Elevate Your HR Effectiveness Section */}
      <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              How We Elevate Your HR Effectiveness
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-12 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Work Well Advisors collaborates closely with your leadership team to strategize, orchestrate, and execute enhancements precisely where your organization requires them most.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {elevateFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Image */}
                  <div className="relative w-full h-48 lg:h-56 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
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
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8 sm:mt-12">
              {ourServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Image */}
                  <div className="relative w-full h-48 lg:h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
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
