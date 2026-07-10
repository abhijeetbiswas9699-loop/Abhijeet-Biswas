import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { megaMenuData } from '../data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  // Add scroll listener in App.tsx or here
  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass' : 'bg-transparent'
        }`}
        onMouseLeave={() => setHoveredCategory(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 bg-purple-600 text-white px-6 rounded-b-xl shadow-lg">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className={`font-serif text-2xl font-bold tracking-tight text-white`}>
                Raja Furniture.
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center h-full">
              {['Home', 'About'].map((item) => (
                <a key={item} href="#" className="text-sm font-medium hover:text-gray-200 transition-colors">
                  {item}
                </a>
              ))}
              
              <div 
                className="h-full flex items-center cursor-pointer"
                onMouseEnter={() => setHoveredCategory('living-room')}
              >
                <span className="text-sm font-medium hover:text-gray-200 transition-colors">Collections</span>
              </div>

              <a href="#kitchens" className="text-sm font-medium hover:text-gray-200 transition-colors">
                Modular Kitchens
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-gray-200 transition-colors">
                Contact
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+919158104786" className="flex items-center space-x-2 text-sm font-medium hover:text-gray-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 9158104786</span>
              </a>
              <a href="https://wa.me/919158104786" target="_blank" rel="noreferrer" className="bg-white text-purple-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors shadow-md">
                Request Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-charcoal">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {hoveredCategory !== null && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-24 left-0 w-full bg-white shadow-2xl border-t border-gray-100"
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="flex flex-col md:flex-row h-[85vh] md:h-[75vh] min-h-[600px] w-full mx-auto">
                {/* Mobile Mega Menu Header */}
                <div className="md:hidden flex justify-between items-center p-4 border-b border-gray-100 bg-white">
                  <span className="font-serif text-lg font-bold text-charcoal">Collections</span>
                  <button onClick={() => setHoveredCategory(null)} className="text-gray-500 hover:text-charcoal p-2">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mega Menu Categories Sidebar */}
                <div className="hidden md:block w-80 bg-ivory/50 p-10 border-r border-gray-100 overflow-y-auto">
                  <ul className="space-y-4">
                    {megaMenuData.map((category) => (
                      <li 
                        key={category.id}
                        className="group flex items-center justify-between cursor-pointer"
                        onMouseEnter={() => setHoveredCategory(category.id)}
                      >
                        <span className={`text-sm font-medium transition-colors ${hoveredCategory === category.id ? 'text-wood' : 'text-gray-600 group-hover:text-charcoal'}`}>
                          {category.name}
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-colors ${hoveredCategory === category.id ? 'text-wood' : 'text-gray-400 opacity-0 group-hover:opacity-100'}`} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mega Menu Content */}
                <div className="flex-1 p-6 md:p-8 bg-white overflow-y-auto">
                  {megaMenuData.map((category) => (
                    hoveredCategory === category.id && (
                      <motion.div 
                        key={category.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full flex flex-col"
                      >
                        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4 md:gap-0">
                          <div>
                            <h2 className="text-2xl md:text-3xl font-serif mb-4">{category.name}</h2>
                            <div className="flex flex-wrap gap-2 md:gap-4 text-sm font-medium">
                              <span className="bg-wood text-white px-3 py-1 rounded-full text-xs">New Arrivals</span>
                              <span className="bg-gray-100 text-charcoal px-3 py-1 rounded-full text-xs hover:bg-gray-200 cursor-pointer transition-colors">Best Sellers</span>
                              <span className="hidden md:inline-block bg-gray-100 text-charcoal px-3 py-1 rounded-full text-xs hover:bg-gray-200 cursor-pointer transition-colors">Featured Collections</span>
                            </div>
                            <div className="flex overflow-x-auto md:flex-wrap space-x-6 md:space-x-4 gap-y-2 text-sm text-gray-500 mt-6 pb-2 md:pb-0 scrollbar-hide">
                              {category.links.map(link => (
                                <span key={link} className="hover:text-charcoal cursor-pointer whitespace-nowrap">{link}</span>
                              ))}
                            </div>
                          </div>
                          <button className="hidden md:block text-sm font-medium border-b border-charcoal pb-1 hover:text-wood hover:border-wood transition-colors whitespace-nowrap">
                            View All {category.name}
                          </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 overflow-y-auto pb-8 md:pr-2">
                          {category.products.map((product, idx) => (
                            <div key={idx} className="group cursor-pointer" onClick={() => setFullScreenImage(product.image)}>
                              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-3 rounded-sm">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <h3 className="text-sm font-medium text-charcoal group-hover:text-wood transition-colors">{product.name}</h3>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )
                  ))}
                  
                  {/* Default view when just hovering 'categories' */}
                  {hoveredCategory === 'categories' && (
                    <div className="h-full flex items-center justify-center text-gray-400">
                      Hover over a category to see products
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 text-lg font-serif">
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-sans text-gray-500 mb-4 uppercase tracking-wider">Collections</p>
                <div className="grid grid-cols-3 gap-3">
                  {megaMenuData.map(cat => (
                    <div key={cat.id} className="cursor-pointer group" onClick={() => { setMobileMenuOpen(false); setHoveredCategory(cat.id); }}>
                      <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden mb-2">
                        <img src={cat.featuredImage} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <p className="text-xs font-sans text-center leading-tight text-charcoal">{cat.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </>
  );
}
