import React, { useEffect, useRef, useState } from 'react';

const galleryItems = [
  // Kegiatan
  {
    category: 'Kegiatan',
    title: 'Persiapan Siomay Pagi',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80',
    description: 'Tim kami mempersiapkan siomay segar setiap pagi'
  },
  {
    category: 'Kegiatan', 
    title: 'Proses Memasak',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=500&q=80',
    description: 'Proses memasak dengan resep tradisional'
  },
  {
    category: 'Kegiatan',
    title: 'Pelayanan Pelanggan',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=500&q=80',
    description: 'Melayani pelanggan dengan ramah dan profesional'
  },
  
  // Acara
  {
    category: 'Acara',
    title: 'Grand Opening',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=500&q=80',
    description: 'Pembukaan cabang baru warung siomay kami'
  },
  {
    category: 'Acara',
    title: 'Festival Kuliner',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=80',
    description: 'Partisipasi dalam festival kuliner lokal'
  },
  {
    category: 'Acara',
    title: 'Pelatihan Tim',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80',
    description: 'Pelatihan kualitas pelayanan untuk tim'
  },
  
  // Sertifikat
  {
    category: 'Sertifikat',
    title: 'Sertifikat Halal',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=500&q=80',
    description: 'Sertifikat halal dari MUI'
  },
  {
    category: 'Sertifikat',
    title: 'Sertifikat Hygiene',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80',
    description: 'Sertifikat kebersihan dan sanitasi'
  },
  {
    category: 'Sertifikat',
    title: 'Penghargaan Usaha',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=500&q=80',
    description: 'Penghargaan usaha kecil menengah terbaik'
  },
  
  // Produk
  {
    category: 'Produk',
    title: 'Siomay Original',
    image: 'https://img.herstory.co.id/articles/archive_20220412/siomay-bandung-20220412-114503.jpg?auto=format&fit=crop&w=500',
    description: 'Siomay dengan resep tradisional - Rp 1.000/pc'
  },
  {
    category: 'Produk',
    title: 'Tahu Krispi',
    image: 'https://4.bp.blogspot.com/-8TS1VSgZTN4/W-g_XqyFkKI/AAAAAAAAAv4/p3aHBUhimK08_-YdfnZlulGypLRGJ1F9QCLcBGAs/s1600/tahu-crispy-1024x683.jpg?auto=format&fit=crop&w=500',
    description: 'Tahu goreng renyah dan lezat - Rp 1.000/pc'
  },
  {
    category: 'Produk',
    title: 'Es Kopyor Segar',
    image: 'https://i0.wp.com/www.topwisata.info/wp-content/uploads/2022/04/Es-Kopyor-1-1.jpg?resize=930%2C620&ssl=1?auto=format&fit=crop&w=500',
    description: 'Minuman segar es kopyor - Rp 3.000/gelas'
  }
];

const categories = ['Semua', 'Kegiatan', 'Acara', 'Sertifikat', 'Produk'];

const Gallery = () => {
  const galleryRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [filteredItems, setFilteredItems] = useState(galleryItems);

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

    const galleryItems = document.querySelectorAll('.gallery-item');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    galleryItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(item);
    });

    filterBtns.forEach((btn, index) => {
      btn.style.transitionDelay = `${index * 0.05}s`;
      observer.observe(btn);
    });

    return () => {
      galleryItems.forEach(item => observer.unobserve(item));
      filterBtns.forEach(btn => observer.unobserve(btn));
    };
  }, []);

  useEffect(() => {
    if (activeCategory === 'Semua') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    
    // Simple fade transition
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 50 + 200);
    });
  };

  return (
    <section id="gallery" ref={galleryRef} className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <style jsx>{`
        .gallery-item, .filter-btn {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .gallery-item.animate-in, .filter-btn.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .gallery-item {
          transition: all 0.3s ease, opacity 0.6s ease, transform 0.6s ease;
        }
      `}</style>
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
              key={`${item.category}-${index}`}
              className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
    </section>
  );
};

export default Gallery;
