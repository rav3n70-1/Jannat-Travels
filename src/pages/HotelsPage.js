// src/pages/HotelsPage.js
import React from 'react';
import { AnimateOnScroll, SectionTitle, SectionSubtitle } from '../components/AnimateOnScroll';
import { hotels } from '../data';

export const HotelsPage = () => (
     <div className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
            <SectionTitle className="text-[#0A2342]">Our Partner Hotels</SectionTitle>
            <SectionSubtitle>We partner with trusted hotels in Makkah and Madinah to ensure your comfort.</SectionSubtitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {hotels.map((hotel, index) => (
                    <AnimateOnScroll key={index} delay={(index % 3) * 150}>
                        <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden group border-b-4 border-transparent hover:border-amber-400 transition-all duration-300">
                            <div className="overflow-hidden relative">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                                     <h3 className="text-xl font-bold text-white drop-shadow-lg">{hotel.name}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-500 mb-4">{hotel.location}</p>
                                <a href={hotel.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#103F6E] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#0A2342] transition-colors duration-300 transform hover:scale-105">
                                    Visit Site
                                </a>
                            </div>
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
    </div>
);