import React from 'react';
import { AnimateOnScroll, SectionTitle, SectionSubtitle } from '../components/AnimateOnScroll';
import { PackageDetailModal } from '../components/Modals';
import { services } from '../data';

export const ServicesPage = () => {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [selectedService, setSelectedService] = React.useState(null);

    const openModal = (service) => {
        setSelectedService(service);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);
    
    return (
        <>
            <div className="py-20 md:py-28 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle className="text-[#0A2342]">Our Services</SectionTitle>
                    <SectionSubtitle>We provide a comprehensive range of travel and pilgrimage services with a commitment to quality and reliability.</SectionSubtitle>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <AnimateOnScroll key={service.title} delay={index * 100}>
                                <div onClick={() => openModal(service)} className="bg-white p-8 rounded-xl shadow-lg text-center h-full group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-amber-400 flex flex-col cursor-pointer">
                                    <div className="inline-block p-5 bg-blue-100 rounded-full mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:bg-amber-100 mx-auto">
                                        <service.Icon className="w-12 h-12 text-blue-800 transition-colors duration-300 group-hover:text-amber-600"/>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3" style={{fontFamily: "'Playfair Display', serif"}}>{service.title}</h3>
                                    <p className="text-gray-600 flex-grow">{service.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </div>
            <PackageDetailModal isOpen={isModalOpen} onClose={closeModal} pkg={selectedService} />
        </>
    );
};
