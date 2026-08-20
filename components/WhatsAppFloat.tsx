import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919966774984?text=Hi!%20I%27m%20interested%20in%20%5BKitchen%2FWardrobe%2FFull%20Home%5D%20interior%20design%20for%20my%20%5B2BHK%2F3BHK%5D%20in%20Hyderabad."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg px-4 py-3 hover:scale-105 transition-transform"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline text-sm font-bold">WhatsApp Us</span>
    </a>
  );
}
