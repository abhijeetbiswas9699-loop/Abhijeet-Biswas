import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-ivory" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-charcoal mb-6">Visit Our Showroom</h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Experience the luxury of Raja Furniture firsthand. Our expansive showroom features curated room settings and material libraries to help you visualize your dream space.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-wood flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-charcoal mb-1">Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Raja Furniture, Hingna Rd Electronic Zone, <br/>
                    Square 8, Gajanan Nagar, Nildoh CT, <br/>
                    Maharashtra 441110
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-wood flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-charcoal mb-1">Call / WhatsApp</h4>
                  <p className="text-gray-500 text-sm">+91 9158104786</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-wood flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-charcoal mb-1">Email</h4>
                  <p className="text-gray-500 text-sm">enquiry@rajafurniture.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 shadow-xl border border-gray-50"
          >
            <h3 className="text-2xl font-serif mb-6 text-charcoal">Request a Quote</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-wood transition-colors bg-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-wood transition-colors bg-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Requirement</label>
                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-wood transition-colors bg-transparent text-gray-600">
                  <option>Modular Kitchen</option>
                  <option>Living Room Furniture</option>
                  <option>Bedroom Set</option>
                  <option>Custom Manufacturing</option>
                </select>
              </div>
              <button className="w-full bg-charcoal text-white py-4 uppercase tracking-wider text-sm font-medium hover:bg-wood transition-colors duration-300">
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
