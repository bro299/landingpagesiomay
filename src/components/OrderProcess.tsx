import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessagesSquare, CreditCard, ClipboardCheck, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: MessagesSquare,
    title: 'Diskusi & Konsultasi',
    description: 'Diskusikan kebutuhan acara Anda dengan tim kami melalui WhatsApp untuk mendapatkan rekomendasi paket terbaik.'
  },
  {
    icon: CreditCard,
    title: 'Pembayaran DP',
    description: 'Lakukan pembayaran DP minimal 50% untuk mengkonfirmasi pesanan Anda.'
  },
  {
    icon: Clock,
    title: 'Proses Pesanan',
    description: 'Tim kami akan mempersiapkan pesanan Anda dengan teliti sesuai waktu yang ditentukan.'
  },
  {
    icon: ClipboardCheck,
    title: 'Pelunasan & Pengiriman',
    description: 'Lakukan pelunasan saat pesanan diterima dan pastikan semua sesuai dengan pesanan Anda.'
  }
];

const OrderProcess = () => {
  const processRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-step', {
        scrollTrigger: {
          trigger: '.process-container',
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, processRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={processRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Cara Pemesanan
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Proses pemesanan yang mudah dan transparan untuk acara Anda
          </p>
        </div>

        <div className="process-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="process-step relative">
              <div className="bg-amber-50 rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-100 p-4 rounded-full mb-6">
                    <step.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-800 mb-4">{step.title}</h3>
                  <p className="text-amber-700">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-300" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20untuk%20acara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-amber-600 text-white py-3 px-8 rounded-full hover:bg-amber-700 transition-colors text-lg font-semibold"
          >
            <MessagesSquare className="w-6 h-6 mr-2" />
            Mulai Diskusi
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;