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
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-900 to-secondary-800">
      <div className="absolute inset-0 bg-[url('https://asset.kompas.com/crops/5ITcLtggdvRZwC1yJmXDHhAuDnU=/0x0:1000x667/1200x800/data/photo/2021/05/23/60aa371ed27a5.jpg?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-20" />
      
      <div className="hero-content text-center px-4 relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Siomay Tradisional
          <span className="block text-primary-400">dengan Cita Rasa Modern</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Nikmati kelezatan siomay dengan racikan bumbu premium yang spesial dan bahan berkualitas
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#menu" className="w-full sm:w-auto bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors text-lg font-medium shadow-lg hover:shadow-xl">
            Lihat Menu
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-lg font-medium">
            Hubungi Kami
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
            <Store className="w-5 h-5 text-primary-400 mr-2" />
            <span className="text-gray-200 text-sm">Makan di Tempat</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
            <ShoppingBag className="w-5 h-5 text-primary-400 mr-2" />
            <span className="text-gray-200 text-sm">Take Away</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary-400" />
      </div>
    </div>
  );
};

export default Hero;
