import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown, Store, ShoppingBag } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-10" />
      
      <div className="hero-content text-center px-4 relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-amber-800 mb-6 leading-tight">
          Siomay Tradisional
          <span className="block text-amber-600">dengan Cita Rasa Modern</span>
        </h1>
        <p className="text-lg md:text-xl text-amber-700 mb-12 max-w-2xl mx-auto">
          Nikmati kelezatan siomay premium dengan racikan bumbu spesial dan bahan berkualitas
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#menu" className="w-full sm:w-auto bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-colors text-lg font-medium">
            Lihat Menu
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-white/90 text-amber-800 px-8 py-4 rounded-full hover:bg-white transition-colors text-lg font-medium">
            Hubungi Kami
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
            <Store className="w-5 h-5 text-amber-600 mr-2" />
            <span className="text-amber-700 text-sm">Makan di Tempat</span>
          </div>
          <div className="flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
            <ShoppingBag className="w-5 h-5 text-amber-600 mr-2" />
            <span className="text-amber-700 text-sm">Take Away</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-amber-600" />
      </div>
    </div>
  );
};

export default Hero;