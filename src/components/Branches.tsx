import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const branches = [
  {
    name: 'Siomay & Batagor Bandung Barokah',
    address: ' Jl. Ambal-Ketawang, Keongan, Ukirsari, Kec. Grabag, Kabupaten Purworejo, Jawa Tengah ',
    phone: '08886435570',
    hours: '10:00 - 21:00'
  },
  {
    name: 'Siomay & Batagor Bandung Barokah 2',
    address: 'Depan SMP N 38 PWR, Desa Bakurejo, Kec. Grabag, Kabupaten Purworejo, Jawa Tengah',
    phone: '08886435570',
    hours: '08:00 - 19:00'
  },
  {
    name: 'Siomay & Batagor Bandung Barokah 3',
    address: 'Teges Lor, Patutrejo, Kec. Grabag, Kabupaten Purworejo, Jawa Tengah',
    phone: '08886435570',
    hours: '13:00 - 21:00'
  },
  {
    name: 'Siomay & Batagor Bandung Barokah 4',
    address: 'Unnamed Road, Klodran, Sumberagung, Kec. Grabag, Kabupaten Purworejo, Jawa Tengah',
    phone: '08886435570',
    hours: '13:00 - 21:00'
  }
];

const Branches = () => {
  const branchesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.branch-card', {
        scrollTrigger: {
          trigger: '.branches-container',
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, branchesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={branchesRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Building2 className="w-12 h-12 text-amber-600 mb-4 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Cabang Kami
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Temukan Siomay Enak di berbagai lokasi strategis
          </p>
        </div>

        <div className="branches-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {branches.map((branch, index) => (
            <div key={index} className="branch-card bg-amber-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-amber-800 text-xl mb-4">{branch.name}</h3>
              <div className="space-y-3 text-amber-700">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-amber-600" />
                  <p>{branch.address}</p>
                </div>
                <a
                  href={`https://wa.me/${branch.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors text-center mt-4"
                >
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
