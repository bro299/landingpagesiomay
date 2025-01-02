import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Clock, ThumbsUp, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Heart,
    title: 'Dibuat dengan Cinta',
    description: 'Setiap siomay dibuat dengan penuh dedikasi dan cinta untuk memberikan rasa terbaik'
  },
  {
    icon: Clock,
    title: 'Selalu Segar',
    description: 'Kami menjamin kesegaran produk karena dibuat fresh setiap hari'
  },
  {
    icon: ThumbsUp,
    title: 'Kualitas Terjamin',
    description: 'Menggunakan bahan berkualitas tinggi dan telah tersertifikasi halal'
  },
  {
    icon: DollarSign,
    title: 'Harga Bersahabat',
    description: 'Nikmati kelezatan dengan harga yang terjangkau untuk semua kalangan'
  }
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reason-card', {
        scrollTrigger: {
          trigger: '.reasons-container',
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Kenapa Harus Coba Siomay Kami?
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Temukan alasan mengapa pelanggan setia kami selalu kembali
          </p>
        </div>

        <div className="reasons-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="reason-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-100 p-4 rounded-full mb-6">
                  <reason.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-800 mb-4">{reason.title}</h3>
                <p className="text-amber-700">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;