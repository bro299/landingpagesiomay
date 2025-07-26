import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Fish, Clock, Shield, Heart, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: <Leaf className="w-8 h-8 text-green-500" />,
    title: 'Kacang Pilihan Premium',
    description: 'Menggunakan kacang tanah berkualitas tinggi yang dipilih langsung dari petani terpercaya untuk bumbu kacang yang creamy dan gurih.'
  },
  {
    icon: <Fish className="w-8 h-8 text-blue-500" />,
    title: 'Ikan Tenggiri Segar',
    description: 'Daging ikan tenggiri segar pilihan yang diolah dengan teknik khusus untuk menghasilkan tekstur yang lembut dan rasa yang autentik.'
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-500" />,
    title: 'Selalu Fresh Setiap Hari',
    description: 'Produk dibuat fresh setiap hari tanpa pengawet, memastikan kualitas dan kesegaran terbaik untuk setiap pesanan.'
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-500" />,
    title: 'Proses Higienis',
    description: 'Standar kebersihan tinggi dalam setiap proses produksi, dari persiapan bahan hingga penyajian akhir.'
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: 'Resep Turun Temurun',
    description: 'Menggunakan resep rahasia keluarga yang telah diwariskan turun temurun dengan cita rasa yang konsisten.'
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-500" />,
    title: 'Sertifikat Halal MUI',
    description: 'Telah tersertifikasi halal MUI, memberikan jaminan kehalalan dan keamanan untuk seluruh keluarga Muslim.'
  }
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-card', {
        scrollTrigger: {
          trigger: '.why-cards-container',
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });

      gsap.from('.ingredients-section', {
        scrollTrigger: {
          trigger: '.ingredients-section',
          start: 'top center',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="why-us" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mengapa Harus Siomay Barokah?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Komitmen kami pada kualitas dan kepuasan pelanggan menjadikan kami pilihan terbaik
          </p>
        </div>

        <div className="why-cards-container grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="why-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-4">
                {reason.icon}
                <h3 className="text-lg font-bold text-gray-800 ml-3">{reason.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Ingredients Showcase */}
        <div className="ingredients-section bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Bahan Berkualitas Premium</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="ingredient-image">
              <img 
                src="https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Bahan Premium" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Kacang Tanah Premium</h4>
                    <p className="text-gray-600 text-sm">Dipilih langsung dari kebun kacang terbaik di Jawa Tengah, menghasilkan bumbu kacang yang creamy dan gurih alami.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Fish className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Ikan Tenggiri Segar</h4>
                    <p className="text-gray-600 text-sm">Menggunakan ikan tenggiri segar pilihan yang diambil langsung dari nelayan, memastikan tekstur lembut dan rasa yang autentik.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Proses Harian</h4>
                    <p className="text-gray-600 text-sm">Setiap produk dibuat fresh setiap hari mulai pagi, tanpa bahan pengawet untuk menjaga kualitas dan kesegaran.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
