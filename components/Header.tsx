"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Shifted logo and title further left with ml-[-20px] */}
          <Link href="/" className="flex items-center ml-[-60px]">
            {/* Image source should be relative to the public folder */}
            <Image src="/CKC.png" alt="CKC Tech-Solutions Logo" width={60} height={70} className="mr-2" />
            <span className="text-2xl font-bold text-blue-600">CKC Tech-Solutions & Consultancy Pvt Ltd</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
