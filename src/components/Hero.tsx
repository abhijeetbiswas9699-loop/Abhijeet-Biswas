import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Living Room" 
          className="object-cover w-full h-full opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="text-ivory/80 uppercase tracking-[0.2em] text-sm mb-6">
            Crafting Timeless Elegance
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
            Premium Luxury Furniture & Kitchens.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#collections"
              className="bg-white text-charcoal px-8 py-4 text-sm font-medium uppercase tracking-wider flex items-center justify-center hover:bg-wood hover:text-white transition-colors duration-300"
            >
              Explore Collections
            </a>
            <a 
              href="https://wa.me/919158104786"
              target="_blank"
              rel="noreferrer"
              className="border border-white/30 text-white px-8 py-4 text-sm font-medium uppercase tracking-wider flex items-center justify-center hover:bg-white/10 transition-colors duration-300 group"
            >
              Visit Showroom
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </div>
  );
}
