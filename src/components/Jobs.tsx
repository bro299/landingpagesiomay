import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Briefcase, 
  Phone
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Jobs = () => {
  const jobsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.job-card', {
        scrollTrigger: {
          trigger: '.jobs-container',
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, jobsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="jobs" ref={jobsRef} className="py-20 bg-gradient-to-br from-orange-100 to-red-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Briefcase className="w-12 h-12 text-red-600 mb-4 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
            Lowongan Kerja
          </h2>
          <p className="text-lg text-red-700 max-w-2xl mx-auto">
            Dicari Penjaga Pangkalan di semua cabang kami
          </p>
        </div>

        <div className="jobs-container">
          {/* Job Position */}
          <div className="job-card bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-red-500">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-800 mb-2">Penjaga Pangkalan</h3>
              <p className="text-red-600 text-lg">Gaji 10% dari Pendapatan Harian</p>
            </div>

            {/* Requirements */}
            <div className="mb-8 bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-red-800 mb-4 text-center">Syarat:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-red-700">
                <div>
                  <ul className="space-y-2">
                    <li>• Khusus Wanita</li>
                    <li>• Niat Kerja Kuat</li>
                    <li>• Komunikasi Baik</li>
                    <li>• Penampilan Sopan</li>
                    <li>• Siap Ikut Training</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>• Jam Kerja Fleksibel</li>
                    <li>• Tanpa Pengalaman (Dilatih)</li>
                    <li>• Kerja Individu</li>
                    <li>• Usia 18-40 tahun</li>
                    <li>• Lokasi Sekitar Cabang</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-8 bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-green-800 mb-4 text-center">Keuntungan:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-700">
                <div>
                  <ul className="space-y-2">
                    <li>• Gaji 10% dari pendapatan harian</li>
                    <li>• Jam kerja sesuai cabang</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>• Pelatihan gratis</li>
                    <li>• Tidak butuh pengalaman</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="job-card bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-xl shadow-xl text-center">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-4">Informasi Lebih Lanjut</h4>
            <p className="mb-6">Hubungi kami untuk informasi detail tentang lowongan kerja</p>
            <div className="space-y-3 max-w-md mx-auto">
              <a
                href="https://wa.me/08886435570?text=Halo,%20saya%20ingin%20menanyakan%20tentang%20lowongan%20kerja%20Penjaga%20Pangkalan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-all font-medium shadow-lg"
              >
                Hubungi via WhatsApp: 08886435570
              </a>
              <p className="text-red-100 text-sm">
                Siap kerja? Langsung hubungi kami!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;