"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    image: "/CKC.png?height=600&width=1200",
    title: "CKC Tech-Solutions & Consultancy Pvt Ltd",
    description: "Your Trusted IT Solutions Provider",
  },
  {
    image: "/CKC.png?height=600&width=1200",
    title: "Innovative IT Solutions",
    description: "Empowering Your Business Growth",
  },
  {
    image: "/CKC.png?height=600&width=1200",
    title: "Expert Consultation",
    description: "Bridging Business and Technology",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[calc(100vh-64px)]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
