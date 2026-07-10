import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { reviews } from '../data';

export default function Reviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-charcoal mb-4">Client Testimonials</h2>
          <p className="text-gray-500">Trusted by homeowners and architects across India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-ivory p-10 border border-gray-100"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-charcoal font-serif text-lg italic leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div>
                <p className="font-medium text-charcoal">{review.name}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
