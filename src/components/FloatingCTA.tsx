import { MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <a
      href="https://wa.me/919158104786"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center group"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-charcoal px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
