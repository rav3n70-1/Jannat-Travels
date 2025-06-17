// src/pages/GalleryPage.js
import React from 'react';
import { AnimateOnScroll, SectionTitle, SectionSubtitle } from '../components/AnimateOnScroll';
import { Lightbox } from '../components/Modals';
import { galleryPhotos, galleryVideos } from '../data';

export const GalleryPage = () => {
    const [activeTab, setActiveTab] = React.useState('Photos');
    const [lightboxIndex, setLightboxIndex] = React.useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const nextImage = () => setLightboxIndex((prev) => (prev + 1) % galleryPhotos.length);
    const prevImage = () => setLightboxIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
    
    return (
        <>
            <div className="py-20 md:py-28 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle className="text-[#0A2342]">Gallery</SectionTitle>
                    <SectionSubtitle>A collection of moments from sacred places and blessed journeys.</SectionSubtitle>
                    <div className="flex justify-center mb-10">
                         <div className="relative bg-gray-200 p-1 rounded-full">
                            <span className={`absolute top-1 bottom-1 transition-all duration-300 bg-white rounded-full shadow-md ${activeTab === 'Photos' ? 'left-1 w-[90px]' : 'left-[99px] w-[90px]'}`}></span>
                            <button onClick={() => setActiveTab('Photos')} className={`relative z-10 py-2 px-6 font-semibold transition-colors duration-300 ${activeTab === 'Photos' ? 'text-blue-800' : 'text-gray-500'}`}>
                                Photos
                            </button>
                            <button onClick={() => setActiveTab('Videos')} className={`relative z-10 py-2 px-6 font-semibold transition-colors duration-300 ${activeTab === 'Videos' ? 'text-blue-800' : 'text-gray-500'}`}>
                                Videos
                            </button>
                        </div>
                    </div>
                    <div>
                        {activeTab === 'Photos' && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {galleryPhotos.map((photo, index) => (
                                    <AnimateOnScroll key={index} delay={index * 100} className="rounded-lg overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightbox(index)}>
                                        <img src={photo} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                                    </AnimateOnScroll>
                                ))}
                            </div>
                        )}
                        {activeTab === 'Videos' && (
                            <div className="grid md:grid-cols-2 gap-10">
                            {galleryVideos.map((video, index) => (
                                    <AnimateOnScroll key={index} className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                                        <iframe src={video} title={`YouTube video ${index + 1}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                                    </AnimateOnScroll>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Lightbox images={galleryPhotos} selectedIndex={lightboxIndex} onClose={closeLightbox} onNext={nextImage} onPrev={prevImage} />
        </>
    );
};