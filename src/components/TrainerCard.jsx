import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function TrainerCard({ name, role, image }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 p-6 text-white w-full">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-red-500 mb-4">{role}</p>
          <div className="flex space-x-4">
            <Instagram className="h-5 w-5 hover:text-red-500 cursor-pointer" />
            <Facebook className="h-5 w-5 hover:text-red-500 cursor-pointer" />
            <Twitter className="h-5 w-5 hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
