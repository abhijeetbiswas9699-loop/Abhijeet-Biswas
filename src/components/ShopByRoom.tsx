import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

const rooms = [
  { name: 'Living Room', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
  { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { name: 'Dining', image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=800&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { name: 'Modular Kitchen', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
];

export default function ShopByRoom() {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white" id="collections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif text-charcoal mb-4">Collections</h2>
            <p className="text-gray-600 text-lg">
              Explore our meticulously designed collections tailored for every room in your home. From luxurious living areas to functional, elegant kitchens.
            </p>
          </div>
          <a href="#" className="hidden md:inline-block border-b border-charcoal pb-1 hover:text-wood hover:border-wood transition-colors mt-6 md:mt-0">
            View All Categories
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[800px]">
          {rooms.map((room, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={room.name}
              className={`relative group overflow-hidden cursor-pointer ${room.colSpan} ${room.rowSpan}`}
              onClick={() => setFullScreenImage(room.image)}
            >
              <img 
                src={room.image} 
                alt={room.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-2xl font-serif mb-2">{room.name}</h3>
                <span className="text-white/80 text-sm tracking-wider uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Explore Collection
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setFullScreenImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setFullScreenImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={fullScreenImage} 
              alt="Full Screen" 
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
