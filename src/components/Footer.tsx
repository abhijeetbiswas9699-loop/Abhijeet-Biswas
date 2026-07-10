export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block mb-6">
              Raja Furniture.
            </span>
            <p className="text-sm leading-relaxed mb-6">
              Crafting premium luxury furniture and bespoke modular kitchens for discerning clients across India.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Collections</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Living Room</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bedroom Set</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dining Series</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Modular Kitchens</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Office Furniture</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manufacturing Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Completed Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store Location</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to receive updates on new collections and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border border-white/20 px-4 py-2 text-sm w-full focus:outline-none focus:border-white transition-colors"
              />
              <button className="bg-white text-charcoal px-4 py-2 text-sm font-medium hover:bg-wood hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Raja Furniture. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
