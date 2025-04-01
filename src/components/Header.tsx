"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      <div className="container mx-auto px-6 py-2 mt-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.svg" alt="LiqTrade Logo" width={150} height={32} priority />
            </Link>
          </div>

          {/* Navigation Desktop - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-10">
            <div className="flex space-x-10">
              <Link href="/pret" className="text-gray-700 hover:text-blue-800 font-medium text-base">
                Prêt
              </Link>
              <Link href="/affacturage" className="text-gray-700 hover:text-blue-800 font-medium text-base">
                Affacturage
              </Link>
              <Link href="/simulateur" className="text-gray-700 hover:text-blue-800 font-medium text-base">
                Simulateur
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-800 font-medium text-base">
                Contact
              </Link>
              <Link href="/publications" className="text-gray-700 hover:text-blue-800 font-medium text-base">
                Publications
              </Link>
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/register"
              className="text-green-500 border border-green-500 px-6 py-2 rounded-full hover:bg-green-50 transition-colors text-sm font-medium"
            >
              S&apos;inscrire
            </Link>
            <Link
              href="/login"
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors text-sm font-medium"
            >
              Se connecter
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-2 pb-4 border-t border-gray-200 w-full">
            <div className="flex flex-col space-y-3">
              <Link
                href="/pret"
                className="text-gray-700 hover:text-blue-800 font-medium px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Prêt
              </Link>
              <Link
                href="/affacturage"
                className="text-gray-700 hover:text-blue-800 font-medium px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Affacturage
              </Link>
              <Link
                href="/simulateur"
                className="text-gray-700 hover:text-blue-800 font-medium px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Simulateur
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-800 font-medium px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/publications"
                className="text-gray-700 hover:text-blue-800 font-medium px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Publications
              </Link>
              <Link
                href="/register"
                className="text-green-500 border border-green-500 px-6 py-2 rounded-full hover:bg-green-50 transition-colors text-center font-medium text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                S&apos;inscrire
              </Link>
              <Link
                href="/login"
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors text-center font-medium text-sm"                
                onClick={() => setMobileMenuOpen(false)}
              >
                Se connecter
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

