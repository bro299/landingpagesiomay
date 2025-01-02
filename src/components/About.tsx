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
                Berawal dari warung kecil di sudut kota pada tahun 1995, kami terus mengembangkan cita rasa siomay
                yang khas dan autentik. Dengan resep turun-temurun dan inovasi modern, kami berhasil menciptakan
                siomay yang menjadi favorit masyarakat.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800"
              alt="Sejarah"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="about-section grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800"
              alt="Owner"
              className="rounded-lg shadow-lg order-2 md:order-1"
            />
            <div className="order-1 md:order-2">
              <Users className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Owner</h3>
              <p className="text-amber-700 leading-relaxed">
                Pak Budi dan Bu Ani, pasangan yang memulai usaha ini dengan penuh dedikasi. Mereka memastikan
                setiap siomay yang disajikan memiliki kualitas terbaik dan rasa yang konsisten.
              </p>
            </div>
          </div>

          <div className="about-section">
            <MapPin className="w-12 h-12 text-amber-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-amber-800 mb-8 text-center">Lokasi</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.5897787636087!2d109.85000071476974!3d-7.811479394368391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ac4a87164fe4b%3A0x3da7f7dba154dd8c!2sResto%20BAROKAH!5e0!3m2!1sen!2sid!4v1647831234567!5m2!1sen!2sid"
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