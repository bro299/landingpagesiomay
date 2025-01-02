import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Package, Users, Clock, Utensils } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Users,
    title: 'Kapasitas Fleksibel',
    description: 'Tersedia untuk berbagai ukuran acara, dari gathering kecil hingga pesta besar'
  },
  {
    icon: Utensils,
    title: 'Menu Kustom',
    description: 'Pilihan menu dapat disesuaikan dengan preferensi dan kebutuhan acara Anda'
  },
  {
    icon: Clock,
    title: 'Pengiriman Tepat Waktu',
    description: 'Ketepatan waktu pengiriman menjadi prioritas kami untuk kelancaran acara'
  },
  {
    icon: Package,
    title: 'Packaging Premium',
    description: 'Kemasan khusus untuk menjaga kualitas dan tampilan hidangan'
  }
];

const PartyOrders = () => {
  const partyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: '.features-container',
          start: 'top center',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, partyRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={partyRef} className="py-20 bg-gradient-to-br from-amber-100 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Package className="w-12 h-12 text-amber-600 mb-4 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Pesanan Pesta & Acara
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Sempurnakan acara Anda dengan hidangan siomay premium kami. Konsultasikan kebutuhan
            acara Anda untuk mendapatkan penawaran terbaik.
          </p>
        </div>

        <div className="features-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-100 p-4 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-800 mb-4">{feature.title}</h3>
                <p className="text-amber-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20untuk%20pesanan%20pesta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-amber-600 text-white py-3 px-8 rounded-full hover:bg-amber-700 transition-colors text-lg font-semibold"
          >
            Konsultasi Pesanan
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartyOrders;