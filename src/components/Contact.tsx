import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Clock, Phone, Mail, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content > *', {
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top center',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-br from-amber-100 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="contact-section max-w-5xl mx-auto">
          <div className="contact-content text-center mb-16">
            <span className="text-amber-600 text-sm uppercase tracking-wider font-medium">Kontak</span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mt-4 mb-6">
              Hubungi Kami
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Untuk pesanan, informasi, atau pertanyaan, silakan hubungi kami melalui:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-amber-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-amber-800">Telepon</h3>
                    <p className="text-amber-700">+62 888-6435-570</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-amber-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-amber-800">Alamat</h3>
                    <p className="text-amber-700">Dusun Klodran, Desa Sumberagung, Grabag, Purworejo, 54265</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-amber-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-amber-800">Jam Operasional</h3>
                    <p className="text-amber-700">Setiap Hari: 08:00 - 21:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-amber-800 mb-6">Kirim Pesan</h3>
              <a
                href="https://walg.link/6884c6412f5fa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center w-full justify-center bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold mb-4"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Chat WhatsApp
              </a>
              <p className="text-amber-700 text-sm text-center">
                Kami akan merespons pesan Anda secepat mungkin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
