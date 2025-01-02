import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    url: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600',
    title: 'Siomay Special'
  },
  {
    url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600',
    title: 'Proses Pembuatan'
  },
  {
    url: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600',
    title: 'Suasana Resto'
  },
  {
    url: 'https://images.unsplash.com/photo-1583064253378-31cc3dad7576?auto=format&fit=crop&w=600',
    title: 'Menu Favorit'
  },
  {
    url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600',
    title: 'Special Event'
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600',
    title: 'Pelanggan Setia'
  }
];

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        scrollTrigger: {
          trigger: '.gallery-container',
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={galleryRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Camera className="w-12 h-12 text-amber-600 mb-4 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Galeri Foto
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Sekilas momen dan suasana di Siomay Enak
          </p>
        </div>

        <div className="gallery-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item group relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;