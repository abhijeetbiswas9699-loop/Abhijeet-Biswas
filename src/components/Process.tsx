import { motion } from 'motion/react';
import { PenTool, Scissors, Factory, Truck } from 'lucide-react';

const steps = [
  { icon: PenTool, title: '1. Design Consultation', desc: 'Meet our designers to conceptualize your space.' },
  { icon: Scissors, title: '2. Material Selection', desc: 'Choose from premium woods, fabrics, and finishes.' },
  { icon: Factory, title: '3. Master Craftsmanship', desc: 'Precision manufacturing in our state-of-the-art facility.' },
  { icon: Truck, title: '4. White-Glove Delivery', desc: 'Professional installation and final finishing.' },
];

export default function Process() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-wood uppercase tracking-widest text-sm mb-4">How We Work</p>
          <h2 className="text-4xl font-serif text-charcoal">The Manufacturing Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white p-8 group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center mb-6 group-hover:bg-wood group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5 text-charcoal group-hover:text-white" />
                </div>
                <h3 className="text-xl font-serif text-charcoal mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-14 -right-4 w-8 border-t border-dashed border-gray-300" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
