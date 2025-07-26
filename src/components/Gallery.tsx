import React, { useState, useEffect, useRef } from 'react';

// Data gallery yang diperlengkapi
const galleryData = [
  {
    category: 'Kegiatan',
    title: 'Persiapan Siomay Pagi',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop',
    description: 'Proses pembuatan siomay segar setiap pagi dengan bahan-bahan pilihan terbaik'
  },
  {
    category: 'Kegiatan',
    title: 'Memasak Kuah Kacang',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
    description: 'Pembuatan kuah kacang spesial dengan resep turun temurun keluarga'
  },
  {
    category: 'Acara',
    title: 'Festival Kuliner 2024',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop',
    description: 'Partisipasi dalam festival kuliner daerah dengan antusiasme tinggi'
  },
  {
    category: 'Acara',
    title: 'Bazar Ramadan',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop',
    description: 'Stand siomay di bazar Ramadan dengan menu spesial berbuka puasa'
  },
  {
    category: 'Sertifikat',
    title: 'Sertifikat PIRT',
    image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=400&h=400&fit=crop',
    description: 'Sertifikat Pangan Industri Rumah Tangga untuk menjamin kualitas produk'
  },
  {
    category: 'Sertifikat',
    title: 'Pelatihan Food Safety',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop',
    description: 'Sertifikat keamanan pangan untuk meningkatkan standar higienitas'
  },
  {
    category: 'Produk',
    title: 'Siomay Ayam Spesial',
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&h=400&fit=crop',
    description: 'Siomay ayam dengan tekstur lembut dan rasa yang menggugah selera - Rp 15.000/porsi'
  },
  {
    category: 'Produk',
    title: 'Batagor Crispy',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop',
    description: 'Batagor goreng renyah dengan bumbu kacang yang khas - Rp 12.000/porsi'
  },
  {
    category: 'Produk',
    title: 'Es Kopyor Segar',
    image: 'https://i0.wp.com/www.topwisata.info/wp-content/uploads/2022/04/Es-Kopyor-1-1.jpg?resize=930%2C620&ssl=1',
    description: 'Minuman segar es kopyor - Rp 3.000/gelas'
  },
  {
    category: 'Produk',
    title: 'Tahu Isi Goreng',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop',
    description: 'Tahu isi dengan bumbu kacang yang gurih - Rp 8.000/porsi'
  },
  {
    category: 'Kegiatan',
    title: 'Pelayanan Pelanggan',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop',
    description: 'Melayani pelanggan dengan ramah dan profesional setiap hari'
  },
  {
    category: 'Acara',
    title: 'Car Free Day',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop',
    description: 'Ikut serta dalam acara Car Free Day dengan gerobak siomay keliling'
  }
];

const categories = ['Semua', 'Kegiatan', 'Acara', 'Sertifikat', 'Produk'];

const Gallery = () => {
  const galleryRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [filteredItems, setFilteredItems] = useState(galleryData);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Delay untuk memastikan DOM sudah siap
    const timer = setTimeout(() => {
      const galleryElements = document.querySelectorAll('.gallery-item');
      const filterBtns = document.querySelectorAll('.filter-btn');
      
      galleryElements.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
      });

      filterBtns.forEach((btn, index) => {
        btn.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(btn);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      const galleryElements = document.querySelectorAll('.gallery-item');
      const filterBtns = document.querySelectorAll('.filter-btn');
      galleryElements.forEach(item => observer.unobserve(item));
      filterBtns.forEach(btn => observer.unobserve(btn));
    };
  }, [filteredItems]); // Tambahkan dependency

  useEffect(() => {
    if (activeCategory === 'Semua') {
      setFilteredItems(galleryData);
    } else {
      setFilteredItems(galleryData.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    
    // Animasi fade out sebelum filter
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
    });
    
    // Delay untuk animasi fade in setelah filter
    setTimeout(() => {
      const newItems = document.querySelectorAll('.gallery-item');
      newItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 50);
      });
    }, 200);
  };

  return (
    <section id="gallery" ref={galleryRef} className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm uppercase tracking-wider font-medium">
            Galeri Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mt-4 mb-6">
            Dokumentasi & Karya
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Kumpulan foto kegiatan, acara, sertifikat, dan produk-produk terbaik dari warung siomay kami
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-container flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`filter-btn px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-amber-700 hover:bg-amber-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.category}-${item.title}-${index}`}
              className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ 
                opacity: 1, 
                transform: 'translateY(0)',
                transition: 'all 0.5s ease'
              }}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop';
                  }}
                />
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                  item.category === 'Kegiatan' ? 'bg-blue-500' :
                  item.category === 'Acara' ? 'bg-green-500' :
                  item.category === 'Sertifikat' ? 'bg-purple-500' :
                  'bg-amber-500'
                }`}>
                  {item.category}
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-amber-200 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-4 border-amber-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-600 text-sm">Foto Kegiatan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600 text-sm">Acara Diikuti</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
            <div className="text-gray-600 text-sm">Sertifikat</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
            <div className="text-gray-600 text-sm">Varian Produk</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery-item.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
