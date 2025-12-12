"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface ServiceCategory {
  name: string;
  href: string;
  hasSubItems: boolean;
  subItems?: { name: string; href: string }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    name: "Payroll Solutions",
    href: "/services/payroll-solutions",
    hasSubItems: false,
  },
  {
    name: "Staffing",
    href: "/services/staffing",
    hasSubItems: true,
    subItems: [
      { name: "General Staffing", href: "/services/staffing#general-staffing" },
      { name: "Specialized Staffing", href: "/services/staffing#specialized-staffing" },
    ],
  },
  {
    name: "Compliance Management",
    href: "/services/compliance-management",
    hasSubItems: true,
    subItems: [
      { name: "Shop & Establishment Compliance", href: "/services/compliance-management/shop-and-establishment-compliance" },
      { name: "Factory Compliance Services", href: "/services/compliance-management/factory-compliance-services" },
      { name: "Contract Labour Compliances", href: "/services/compliance-management/contract-labour-compliances" },
      { name: "Audit & Consultation", href: "/services/compliance-management/audit-and-consultation" },
      { name: "Payroll Compliances", href: "/services/compliance-management/payroll-compliances" },
    ],
  },
  {
    name: "HR Advisory & Outsourcing",
    href: "/services/hr-advisory-outsourcing",
    hasSubItems: false,
  },
  {
    name: "Recruitment Services",
    href: "/services/recruitment-services",
    hasSubItems: false,
  },
  {
    name: "HRMS Automation",
    href: "/services/hrms-automation",
    hasSubItems: false,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<Set<string>>(new Set());
  const servicesRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsServicesOpen(false);
    setActiveCategory(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
        setActiveCategory(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setActiveCategory(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleMobileCategory = (categoryName: string) => {
    setExpandedMobileCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white text-gray-900 border-b border-gray-200 fixed top-0 left-0 right-0 z-50" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center h-16 relative">
              <Image
                src="/w2wadvisorlogo.png"
                alt="Work Well Advisors Logo"
                width={280}
                height={112}
                className="h-24 sm:h-28 w-auto object-contain"
                style={{ width: "auto", height: "100%" }}
                priority
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                isActive("/")
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              style={{ letterSpacing: '0.01em', fontWeight: 600 }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                isActive("/about")
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              style={{ letterSpacing: '0.01em', fontWeight: 600 }}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => {
                setIsServicesOpen(false);
                setActiveCategory(null);
              }}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 flex items-center ${
                  isActive("/services")
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                style={{ letterSpacing: '0.01em', fontWeight: 600 }}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-xl rounded-lg overflow-visible z-[100] border border-gray-200"
                  style={{ top: 'calc(100% + 8px)' }}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => {
                    setIsServicesOpen(false);
                    setActiveCategory(null);
                  }}
                >
                  {/* Invisible bridge to prevent gap between button and dropdown */}
                  <div className="absolute -top-2 left-0 right-0 h-2"></div>
                  <div className="flex">
                    {/* Left Column - Categories */}
                    <div className="w-1/2 border-r border-gray-200">
                      {serviceCategories.map((category) => (
                        <div
                          key={category.href}
                          onMouseEnter={() => setActiveCategory(category.href)}
                          className={`px-4 py-3 cursor-pointer transition-colors ${
                            activeCategory === category.href
                              ? "bg-gray-100"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <Link
                            href={category.href}
                            className="flex items-center justify-between text-gray-900 text-sm font-medium"
                          >
                            <span>{category.name}</span>
                            {category.hasSubItems && (
                              <svg
                                className="h-4 w-4 text-gray-500"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </Link>
                        </div>
                      ))}
                    </div>

                    {/* Right Column - Sub-items */}
                    <div className="w-1/2 bg-gray-50">
                      {activeCategory && (
                        <div className="p-4">
                          {serviceCategories
                            .find((cat) => cat.href === activeCategory)
                            ?.subItems?.map((subItem) => {
                              const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                                // If already on staffing page, handle smooth scroll
                                if (pathname === "/services/staffing" && subItem.href.includes("#")) {
                                  e.preventDefault();
                                  const hash = subItem.href.split("#")[1];
                                  const element = document.getElementById(hash);
                                  if (element) {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    setIsServicesOpen(false);
                                  }
                                }
                              };
                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={handleClick}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              );
                            })}
            </div>
          )}
                    </div>
                  </div>
                </div>
      )}
    </div>

            <Link
              href="/advisors"
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                isActive("/advisors")
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              style={{ letterSpacing: '0.01em', fontWeight: 600 }}
            >
              Advisors
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/about")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => toggleMobileCategory("services")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/services")
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <span>Services</span>
                <svg
                  className={`h-5 w-5 transition-transform ${
                    expandedMobileCategories.has("services") ? "rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedMobileCategories.has("services") && (
                <div className="pl-4 mt-1 space-y-1">
                  {serviceCategories.map((category) => (
                    <div key={category.href}>
                      {category.hasSubItems ? (
                        <>
                          <button
                            onClick={() => toggleMobileCategory(category.href)}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          >
                            <Link
                              href={category.href}
                              className="flex-1 text-left"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {category.name}
                            </Link>
                            <svg
                              className={`h-4 w-4 transition-transform ${
                                expandedMobileCategories.has(category.href)
                                  ? "rotate-90"
                                  : ""
                              }`}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          {expandedMobileCategories.has(category.href) &&
                            category.subItems && (
                              <div className="pl-4 mt-1 space-y-1">
                                {category.subItems.map((subItem) => {
                                  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                                    // If already on staffing page, handle smooth scroll
                                    if (pathname === "/services/staffing" && subItem.href.includes("#")) {
                                      e.preventDefault();
                                      const hash = subItem.href.split("#")[1];
                                      const element = document.getElementById(hash);
                                      if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        setIsMobileMenuOpen(false);
                                      }
                                    } else {
                                      setIsMobileMenuOpen(false);
                                    }
                                  };
  return (
                                    <Link
                                      key={subItem.href}
                                      href={subItem.href}
                                      onClick={handleClick}
                                      className="block px-3 py-2 rounded-md text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                      {subItem.name}
                                    </Link>
                                  );
                                })}
      </div>
                            )}
                        </>
                      ) : (
                        <Link
                          href={category.href}
                          className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {category.name}
    </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

    <Link
              href="/advisors"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/advisors")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Advisors
    </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
