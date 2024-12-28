import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="z-10 text-center px-4">
        <Image
          src="/reena logo.png"
          alt="Rina Dharod Logo"
          width={200}
          height={100}  
          style={{ width: "auto", height: "auto" }} // Maintain aspect ratio
          className="mx-auto mb-8"
        />
        <h1 className="text-5xl md:text-6xl font-serif text-[#3D3D3D] mb-4 animate-fade-in">
          Coming Soon...
        </h1>
        <p className="text-xl md:text-2xl text-[#6D6D6D] mb-8 max-w-md mx-auto animate-fade-in animation-delay-300 font-light">
          We're crafting something exquisite. Our new collection will be unveiled shortly.
        </p>
        <div className="space-y-4 animate-fade-in animation-delay-600">
          <p className="text-[#3D3D3D] font-serif text-lg">Stay connected:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/rinadharod_fashionlabel/" // Add your Instagram link here
              target="_blank"
              rel="noopener noreferrer"
              className="border-[#6D6D6D] text-[#3D3D3D] hover:bg-[#6D6D6D]/10 transition-all duration-300 ease-in-out hover:scale-110 p-2 rounded inline-flex items-center justify-center" 
              aria-label="Follow us on Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="http://Wa.me/+919867068684" // Add your WhatsApp link here
              target="_blank"
              rel="noopener noreferrer"
              className="border-[#6D6D6D] text-[#3D3D3D] hover:bg-[#6D6D6D]/10 transition-all duration-300 ease-in-out hover:scale-110 p-2 rounded inline-flex items-center justify-center" 
              aria-label="Contact us on WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

