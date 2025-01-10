import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Leaf, Shield, BadgeCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Leaf,
    title: 'Bahan Premium',
    description: 'Menggunakan bahan-bahan berkualitas tinggi yang dipilih dengan teliti'
  },
  {
    icon: Shield,
    title: '100% Kacang Premium',
    description: 'Bumbu kacang spesial menggunakan kacang pilihan kualitas terbaik'
  },
  {
    icon: Award,
    title: 'Sertifikat Halal',
    description: 'Telah mendapatkan sertifikasi Halal resmi'
  },
  {
    icon: BadgeCheck,
    title: 'Berijin MUI',
    description: 'Terdaftar dan tersertifikasi oleh Majelis Ulama Indonesia'
  }
];

const Quality = () => {
  const qualityRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.quality-card', {
        scrollTrigger: {
          trigger: '.quality-container',
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, qualityRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={qualityRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Kualitas Terjamin
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Komitmen kami untuk menghadirkan produk berkualitas dengan standar tertinggi
          </p>
        </div>

        <div className="quality-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="quality-card bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
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
      </div>
    </section>
  );
};

export default Quality;