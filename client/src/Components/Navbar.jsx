"use client"

import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Phone, MessageCircle, Menu, ChevronDown } from "lucide-react" 
import logo from "../assets/Image/logo.png"

export default function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false)

  const companyDropdownRef = useRef(null)
  const mobileCompanyDropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (companyDropdownRef.current && !companyDropdownRef.current.contains(event.target)) {
        setIsCompanyDropdownOpen(false)
      }
      // For mobile dropdown, if it's a separate element
      if (mobileCompanyDropdownRef.current && !mobileCompanyDropdownRef.current.contains(event.target)) {
        // This might not be strictly necessary if mobile menu closes on link click
        // but good for consistency if there are other clickable areas
      }
    }

    if (isCompanyDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isCompanyDropdownOpen])

  // Define navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Program", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    {
      name: "Company",
      dropdown: [
        { name: "Teams", path: "/teams" },
        { name: "Blogs", path: "/blogs" },
        { name: "Career", path: "/career" },
      ],
    },
    { name: "Contact Us", path: "/contact" },
  ]

  // If the path is /admin, do not render the navbar
  if (location.pathname === "/admin") return null

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      {/* Top Bar */}
      <div className="bg-sky-700 text-white px-4 py-2 flex justify-end">
        <div className="flex items-center gap-4">
          <a href="tel:+1234567890" className="flex items-center gap-1 text-sm hover:underline">
            <Phone className="h-4 w-4" />
            <span>{"123-456-7890"}</span>
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-green-300 hover:underline"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white py-2 px-4 md:px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          {/* Using a placeholder image. Replace with your actual logo path */}
          <img
            src={logo}
            alt="Skytop Academy Logo"
            className="w-[150px] "
          />
          
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-black font-medium">
          {navLinks.map((item) => (
            <div key={item.name} className="relative" ref={item.name === "Company" ? companyDropdownRef : null}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                    className="flex items-center gap-1 hover:text-sky-600 focus:outline-none py-2 h-full"
                    aria-expanded={isCompanyDropdownOpen}
                  >
                    {item.name}{" "}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isCompanyDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isCompanyDropdownOpen && (
                    <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md min-w-[120px] py-1 z-10">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsCompanyDropdownOpen(false)}
                          className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-sky-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`hover:text-sky-600 py-2 ${
                    location.pathname === item.path ? "text-sky-600 font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-lg p-4 space-y-4 animate-slide-down">
          {navLinks.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div ref={mobileCompanyDropdownRef}>
                  <button
                    onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                    className="flex w-full items-center justify-between text-lg font-semibold py-2"
                    aria-expanded={isCompanyDropdownOpen}
                  >
                    {item.name}{" "}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${isCompanyDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isCompanyDropdownOpen && (
                    <div className="grid gap-2 pl-4 mt-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setIsCompanyDropdownOpen(false)
                          }}
                          className="block py-2 text-base font-medium hover:text-sky-600"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-lg font-semibold hover:text-sky-600 ${
                    location.pathname === item.path ? "text-sky-600 font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          {/* Login/Signup buttons removed from here */}
        </div>
      )}
    </div>
  )
}
