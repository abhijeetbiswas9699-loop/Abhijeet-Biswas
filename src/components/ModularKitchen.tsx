import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function ModularKitchen() {
  return (
    <section className="py-24 bg-charcoal text-white" id="kitchens">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-wood uppercase tracking-widest text-sm">Signature Series</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Raja Furniture <br/>
              Nagpur Aesthetics.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our premium modular kitchens are designed to be the heart of your home. We combine state-of-the-art European hardware with customized spatial planning to create kitchens that are as beautiful as they are functional.
            </p>
            
            <ul className="space-y-4">
              {['Soft-close Hettich/Blum hardware', 'Customized storage solutions', 'Premium matte and gloss finishes', '10-Year Warranty'].map(feature => (
                <li key={feature} className="flex items-center space-x-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-wood" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/919158104786"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-white text-charcoal px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-wood hover:text-white transition-colors duration-300 group"
            >
              Book Kitchen Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop" 
              alt="Luxury Modular Kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-wood p-8 max-w-xs hidden md:block">
              <p className="text-white text-2xl font-serif">"The perfect blend of form and function."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
