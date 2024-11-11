import React from 'react';

export default function ClassCard({ title, image, trainer, time }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{trainer}</p>
          <p className="text-red-500">{time}</p>
        </div>
      </div>
    </div>
  );
}
