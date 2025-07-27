import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { History, Users, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-section', {
        scrollTrigger: {
          trigger: '.about-container',
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm uppercase tracking-wider font-medium">Tentang Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mt-4 mb-6">
            Cerita Kami
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="about-container space-y-20">
          <div className="about-section grid md:grid-cols-2 gap-12 items-center">
            <div>
              <History className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Sejarah Kami</h3>
              <p className="text-amber-700 leading-relaxed">
              Berawal dari jualan keliling pada tahun 2010 di sekolah-sekolah dengan menggunakan gerobak motor, perjalanan kami dimulai dengan penuh semangat. Dari langkah kecil tersebut, kami berhasil membuka satu cabang, yang kemudian berkembang dan meluas hingga dikenal lebih banyak orang.
              </p>
            </div>
            <img
              src="https://bbcazzyabpozlzxjupld.supabase.co/storage/v1/object/public/siomay//suyatno.jpeg"
              alt="Sejarah"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="about-section grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/images/pangkalan.jpg"
              alt="Pangkalan Pertama"
              className="rounded-lg shadow-lg order-2 md:order-1"
            />
            <div className="order-1 md:order-2">
              <Users className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Berkembang Bersama</h3>
              <p className="text-amber-700 leading-relaxed">
              Pak Suyatno, selaku owner, telah dipercaya untuk melayani berbagai acara, mulai dari pesta kecil hingga perayaan berskala besar. Kini, saatnya Anda merasakan sendiri keunggulan produk kami yang telah menjadi pilihan banyak pelanggan.
              </p>
            </div>
          </div>

          <div className="about-section">
            <MapPin className="w-12 h-12 text-amber-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-amber-800 mb-8 text-center">Lokasi Produksi</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.5897787636087!2d109.85000071476974!3d-7.811479394368391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ac500017f2ad3%3A0xf5b030ff29db6f2d!2sRUMAH+SUYATNO+SIOMAY!5e0!3m2!1sen!2sid!4v1647831234567!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
