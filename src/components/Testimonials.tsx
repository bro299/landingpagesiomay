import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Guru',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Siomay terenak yang pernah saya coba! Teksturnya pas dan bumbu kacangnya istimewa.'
  },
  {
    name: 'Linda Wijaya',
    role: 'Event Organizer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Pelayanan pesanan untuk acara sangat profesional. Semua tamu sangat puas dengan hidangannya.'
  },
  {
    name: 'Ahmad Rizki',
    role: 'Customer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Rasa konsisten dan pelayanan ramah. Sudah langganan sejak lama dan tidak pernah mengecewakan.'
  }
];

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: '.testimonials-container',
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, testimonialsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={testimonialsRef} className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
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

        <div className="testimonials-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white rounded-xl shadow-lg p-8 relative">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
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
              <p className="text-amber-700 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;