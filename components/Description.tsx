"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

// Define TypeScript types for the services
interface Service {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: "Datacentre Build",
    description:
      "Our data center team helps you to identify your requirements, data center capacities, for an optimal green, energy-efficient, and high-resiliency data center.",
  },
  {
    title: "High-End Computing (HPC)",
    description:
      "CKC Tech-Solutions HPC experts provide services to customers enabling them to achieve their established Research Goal.",
  },
  {
    title: "Network Infrastructures",
    description:
      "We have trained engineering resources to support leading products like Juniper, Brocade, Extreme Network, HP Network & Cisco and much more.",
  },
  {
    title: "Storage Solution",
    description:
      "We offer a full suite of professional services for our customers in Storage, Backup, Archival, and storage network technologies.",
  },
  {
    title: "Backup Solution",
    description:
      "CKC Tech-Solutions offers an enterprise-grade fully automated, scalable, and flexible Backup Solution complete with real-time monitoring.",
  },
  {
    title: "Disaster Recovery",
    description:
      "CKC Tech-Solutions provides their customers with fully tailored onsite and offsite Disaster Recovery solutions.",
  },
]

// Define TypeScript types for the ServiceCard props
interface ServiceCardProps {
  title: string
  description: string
  index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, index }) => {
  const ref = useRef<HTMLDivElement | null>(null) // Fix useRef type
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls]) // Ensure effect runs correctly

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-gray-700 font-medium">{description}</p>
    </motion.div>
  )
}

export default function Description() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-black text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
