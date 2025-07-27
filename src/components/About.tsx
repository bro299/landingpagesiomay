import React, { useEffect, useRef } from 'react';
import { History, Users, MapPin } from 'lucide-react';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Simple scroll animation without GSAP
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current?.querySelectorAll('.about-section');
    elements?.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'all 0.8s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
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
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-4 rounded-2xl shadow-lg">
                <img
                  src="https://bbcazzyabpozlzxjupld.supabase.co/storage/v1/object/public/siomay//suyatno.jpeg"
                  alt="Sejarah"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-amber-500 rounded-full opacity-80"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-amber-600 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          <div className="about-section grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-4 rounded-2xl shadow-lg">
                <img
                  src="https://bbcazzyabpozlzxjupld.supabase.co/storage/v1/object/public/siomay//pangkalan1.jpeg"
                  alt="Pangkalan Pertama"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-4 border-amber-500 rounded-full bg-white opacity-90"></div>
                <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-amber-400 rounded-full opacity-70"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Users className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Berkembang Bersama</h3>
              <p className="text-amber-700 leading-relaxed">
                Pak Suyatno, selaku owner, telah dipercaya untuk melayani berbagai acara, mulai dari pesta kecil hingga perayaan berskala besar. Kini, saatnya Anda merasakan sendiri keunggulan produk kami yang telah menjadi pilihan banyak pelanggan.
              </p>
            </div>
          </div>

          <div className="about-section">
            <div className="text-center mb-8">
              <MapPin className="w-12 h-12 text-amber-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-amber-800">Lokasi Produksi</h3>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-6 rounded-2xl shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.5897787636087!2d109.85000071476974!3d-7.811479394368391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ac500017f2ad3%3A0xf5b030ff29db6f2d!2sRUMAH+SUYATNO+SIOMAY!5e0!3m2!1sen!2sid!4v1647831234567!5m2!1sen!2sid"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg shadow-md"
                ></iframe>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-amber-500 rounded-full opacity-80"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-600 rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-4 border-amber-400 rounded-full bg-white opacity-90"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
