import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-amber-200 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +62 812-3456-7890
              </a>
              <a
                href="https://instagram.com/siomayenak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-amber-200 transition-colors"
              >
                <Instagram className="w-5 h-5 mr-2" />
                @siomayenak
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Lokasi</h3>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
              <p>Jl. Siomay Enak No. 123<br />Jakarta Selatan, 12345<br />Indonesia</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
            <ul className="space-y-2">
              <li>Senin - Jumat: 10:00 - 21:00</li>
              <li>Sabtu - Minggu: 10:00 - 22:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Siomay Enak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;