import React from 'react';
import { AnimateOnScroll, SectionTitle, SectionSubtitle } from '../components/AnimateOnScroll';
import { PackageDetailModal } from '../components/Modals';
import { PrayerTimesSection } from '../components/PrayerTimes';
import { packages, testimonials } from '../data';
import { Handshake, Award, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

    return (
        <section className="bg-gradient-to-br from-[#0A2342] to-[#103F6E] text-white py-20 md:py-28">
            <div className="container mx-auto px-4">
                <SectionTitle className="text-white">What Our Clients Say</SectionTitle>
                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12 md:mb-16 text-lg">Their words are a testament to our dedicated service.</p>
                
                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden relative h-64">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="flex flex-col items-center text-center h-full justify-center">
                                <p className="text-xl lg:text-2xl italic mb-6 text-gray-200">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-amber-400 p-1"/>
                                    <div>
                                        <p className="font-bold text-white text-lg">{testimonial.name}</p>
                                        <div className="flex text-amber-400 justify-center">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor"/>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                     <button onClick={prev} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-20 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={next} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-20 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export const HomePage = () => {
    const [isPackageModalOpen, setPackageModalOpen] = React.useState(false);
    const [selectedPackage, setSelectedPackage] = React.useState(null);
    
    const openPackageModal = (pkg) => {
        setSelectedPackage(pkg);
        setPackageModalOpen(true);
    };

    const closePackageModal = () => setPackageModalOpen(false);

    return (
        <>
            <div className="bg-white">
                {/* New Hero Section */}
                <section className="relative w-full h-[85vh] max-h-[800px] bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://i.ibb.co/PGsn42dX/madinah2.jpg')"}}>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <AnimateOnScroll className="text-center text-white p-8 md:p-12 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl max-w-4xl mx-4">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl" style={{fontFamily: "'Playfair Display', serif"}}>Your Sacred Journey, Perfected</h1>
                            <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-gray-200">
                                Trusted, reliable, and comprehensive Hajj, Umrah, and travel services designed for your peace of mind.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                                <button onClick={() => openPackageModal(packages[0])} className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    View Hajj Packages
                                </button>
                                <button onClick={() => openPackageModal(packages[1])} className="bg-white/20 border border-white/50 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                                    Explore Umrah
                                </button>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </section>

                {/* Our Packages */}
                <section className="py-20 md:py-28 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <SectionTitle className="text-[#0A2342]">Our Premier Packages</SectionTitle>
                        <SectionSubtitle>Crafted with care for a memorable and blessed journey.</SectionSubtitle>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {packages.map((pkg, index) => (
                                <AnimateOnScroll key={pkg.title} delay={index * 150}>
                                    <div onClick={() => openPackageModal(pkg)} className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border-b-4 border-transparent hover:border-amber-400 cursor-pointer">
                                        <div className="relative overflow-hidden">
                                            <img src={pkg.img} alt={pkg.title} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"/>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        </div>
                                        <div className="p-8">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-3" style={{fontFamily: "'Playfair Display', serif"}}>{pkg.title}</h3>
                                            <p className="text-gray-600">{pkg.desc}</p>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </section>
                
                <PrayerTimesSection />

                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                        <AnimateOnScroll className="md:w-1/2">
                            <img src="https://i.ibb.co/ycwC9YSs/download.jpg" alt="JannatTravels Office" className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"/>
                        </AnimateOnScroll>
                        <div className="md:w-1/2">
                            <AnimateOnScroll>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-6" style={{fontFamily: "'Playfair Display', serif"}}>About JannatTravels</h2>
                            </AnimateOnScroll>
                            <AnimateOnScroll delay={150}>
                                <p className="text-gray-600 leading-relaxed mb-4 text-lg">JannatTravels is a government-approved travel agency dedicated to providing exceptional pilgrimage and travel services, built on a foundation of trust, integrity, and client satisfaction. Our mission is to facilitate a smooth, memorable, and spiritually enriching journey for every traveler.</p>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </section>
                
                <section className="bg-gray-50 py-20 md:py-28">
                    <div className="container mx-auto px-4">
                        <SectionTitle className="text-[#0A2342]">Why Choose Us?</SectionTitle>
                        <SectionSubtitle>Our commitment to excellence and our core values set us apart.</SectionSubtitle>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                            {[
                                {icon: Handshake, title: "Trust", desc: "We operate with complete transparency and honesty."},
                                {icon: Award, title: "Experience", desc: "Years of experience in handling pilgrimage and travel logistics."},
                                {icon: Heart, title: "Customer Focus", desc: "Your comfort and satisfaction are our top priorities."},
                                {icon: Star, title: "Value", desc: "Competitive pricing without compromising on service quality."}
                            ].map((item, index) => (
                                <AnimateOnScroll key={item.title} delay={index * 150} className="p-6 group">
                                <div className="p-5 bg-blue-100 rounded-full inline-block transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:bg-amber-100">
                                    <item.icon className="mx-auto w-12 h-12 text-blue-800 transition-colors duration-300 group-hover:text-amber-600"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mt-6">{item.title}</h3>
                                <p className="text-gray-600 mt-2">{item.desc}</p>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </section>
                
                <TestimonialsSection />
            </div>
            <PackageDetailModal isOpen={isPackageModalOpen} onClose={closePackageModal} pkg={selectedPackage} />
        </>
    );
};
