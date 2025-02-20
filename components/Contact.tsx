import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <MapPin className="mr-2" />
                <span>Branch Office: 709, 56 EROS, APPARTMENT, NEHRU PLACE, NEW DELHI-110019 (India)</span>
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2" />
                <span>Head Office: UPPER GROUND FLOOR, J3/74, 24, LAXMI NAGAR, NEW DELHI- 110092 (India)</span>
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2" />
                <span>Overseas Office: I. 6 NO. 4 OGBETE MAIN MARKET ENUGU,
                  ENUGU STATE - NIGERIA</span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" />
                <span>+91-7982909549, +91-9871684271, +234-8162735159</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" />
                <span>info@ckctechsol.com, iqubal@ckctechsol.com, rommy@ckctechsol.com</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-3 py-2 bg-gray-800 rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-3 py-2 bg-gray-800 rounded" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 bg-gray-800 rounded"></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

