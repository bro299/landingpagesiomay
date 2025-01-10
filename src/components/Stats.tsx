import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Store, ThumbsUp, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: Users,
    value: '100+',
    label: 'Pelanggan Setia',
    description: 'Pelanggan yang percaya dengan kualitas kami'
  },
  {
    icon: Store,
    value: '4+',
    label: 'Cabang',
    description: 'Tersebar di berbagai lokasi strategis'
  },
  {
    icon: ThumbsUp,
    value: '98%',
    label: 'Tingkat Kepuasan',
    description: 'Pelanggan puas dengan produk kami'
  },
  {
    icon: Award,
    value: '10+',
    label: 'Tahun Pengalaman',
    description: 'Melayani dengan sepenuh hati'
  }
];

const Stats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.stats-container',
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });

      // Animate numbers
      stats.forEach((stat, index) => {
        const value = parseInt(stat.value) || 0;
        gsap.from(`.stat-value-${index}`, {
          scrollTrigger: {
            trigger: '.stats-container',
            start: 'top center',
          },
          textContent: 0,
          duration: 2,
          snap: { textContent: 1 },
          stagger: 0.2,
          ease: 'power2.out'
        });
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={statsRef} className="py-20 bg-gradient-to-br from-amber-800 to-amber-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dipercaya oleh Ribuan Pelanggan
          </h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto">
            Kami berkomitmen untuk terus memberikan kualitas terbaik kepada setiap pelanggan
          </p>
        </div>

        <div className="stats-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/20 p-4 rounded-full mb-6">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className={`text-4xl font-bold mb-2 stat-value-${index}`}>
                  {stat.value}
                </h3>
                <p className="text-xl font-semibold mb-2">{stat.label}</p>
                <p className="text-amber-100">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;