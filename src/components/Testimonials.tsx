import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pak Lurah',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Siomay terenak yang pernah saya coba! Teksturnya pas dan bumbu kacangnya istimewa.'
  },
  {
    name: 'Linda Wijaya',
    role: 'Pak Camat',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Pelayanan pesanan untuk acara sangat profesional. Semua tamu sangat puas dengan hidangannya.'
  },
  {
    name: 'Ahmad Rizki',
    role: 'Pedagang Pasar',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Rasa konsisten dan pelayanan ramah. Sudah langganan sejak lama dan tidak pernah mengecewakan.'
  },
  {
    name: 'Slamet Riyadi',
    role: 'Petani',
    image: 'https://images.unsplash.com/photo-1603415526960-f8f0b4f9c472?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Bumbu kacangnya tiada duanya! Rasanya gurih dan otentik, beda dari siomay lainnya.'
  },
  {
    name: 'Siti Nurjanah',
    role: 'Ibu PKK',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Pernah pesan untuk acara keluarga, semua suka dan penanganan cateringnya sangat rapi.'
  },
  {
    name: 'Andi Prasetyo',
    role: 'Tukang Ojek',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Setiap hari beli siomay disini untuk makan siang. Rasanya tidak pernah bosan!'
  },
  {
    name: 'Dewi Kartika',
    role: 'Guru SD',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b217?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Harganya terjangkau untuk guru seperti saya tapi rasanya premium banget!'
  },
  {
    name: 'Hendra Gunawan',
    role: 'Pengusaha Warung',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Sering pesan untuk acara RT. Kualitas dan kebersihannya sangat terjaga.'
  },
  {
    name: 'Ratna Sari',
    role: 'Bidan Desa',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Sebagai bidan, saya perhatikan kebersihannya. Siomay disini sangat higienis dan sehat.'
  },
  {
    name: 'Bambang Sutrisno',
    role: 'Pensiunan PNS',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Sudah 10 tahun jadi pelanggan. Rasanya masih sama enaknya seperti dulu.'
  },
  {
    name: 'Maya Indira',
    role: 'Penjahit',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Jadi cemilan favorit sambil jahit. Rasanya enak dan bikin semangat kerja!'
  },
  {
    name: 'Teguh Wahyudi',
    role: 'Sopir Angkot',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Jadi tempat favorit makan siang. Porsinya besar dan mengenyangkan untuk sopir seperti saya.'
  },
  {
    name: 'Fitri Handayani',
    role: 'Pemilik Katering',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Sebagai sesama pebisnis kuliner, saya salut dengan konsistensi rasa dan kualitasnya.'
  },
  {
    name: 'Arief Rahman',
    role: 'Ketua RW',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Sering pesan untuk acara warga. Semua tetangga selalu puji siomaynya yang enak.'
  }
];

const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi cards saat muncul dengan stagger yang lebih smooth
      gsap.fromTo('.testimonial-card', 
        {
          y: 80,
          opacity: 0,
          scale: 0.9
        },
        {
          scrollTrigger: {
            trigger: '.testimonials-wrapper',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        }
      );

      // Optimized infinite scroll animation dengan will-change untuk performa
      const track = trackRef.current;
      if (track) {
        // Set will-change untuk optimasi GPU
        gsap.set(track, { willChange: 'transform' });
        
        // Duplikasi konten untuk seamless loop
        const cards = track.children;
        const cardWidth = 316; // 300px + 16px gap
        const totalWidth = cards.length * cardWidth;
        
        // Animasi infinite scroll yang lebih smooth
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(track, {
          x: -totalWidth,
          duration: totalWidth / 50, // Speed disesuaikan dengan jumlah cards
          ease: 'none'
        });
        
        // Pause animation saat hover untuk UX yang lebih baik
        track.addEventListener('mouseenter', () => tl.pause());
        track.addEventListener('mouseleave', () => tl.resume());
      }
    }, testimonialsRef);

    return () => ctx.revert();
  }, []);

  // Duplikasi testimonials untuk seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section ref={testimonialsRef} className="py-20 bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-amber-600 mb-4 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Testimoni dari pelanggan setia yang telah merasakan kelezatan produk kami
          </p>
        </div>

        <div className="testimonials-wrapper relative overflow-hidden">
          <div 
            ref={trackRef}
            className="testimonial-track flex gap-4 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.name}-${index}`} 
                className="testimonial-card bg-white rounded-xl shadow-lg hover:shadow-xl p-8 w-[300px] flex-shrink-0 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-amber-200"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold text-amber-800">{testimonial.name}</h3>
                    <p className="text-amber-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-amber-700 italic leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays untuk smooth transition */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-amber-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-orange-100 to-transparent pointer-events-none z-10"></div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-amber-600 text-sm italic">Hover pada testimonial untuk pause animasi</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
