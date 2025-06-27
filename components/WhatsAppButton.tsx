import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({phoneNumber}: WhatsAppButtonProps) {
    const whatsAppLink = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center transition-colors"
            aria-label="Fale conosco pelo WhatsApp"
        >
            <FaWhatsapp className="w-6 md:w-8 h-6 md:h-8"/>
        </a>
    )
}