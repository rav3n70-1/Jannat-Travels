import React from 'react';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, MessageSquare, Menu, X, Star, Plane, Building, BookOpen, Users, Briefcase, Handshake, Award, Heart, ChevronLeft, ChevronRight, Clock, Sunrise, Sun, Sunset, Moon } from 'lucide-react';

// --- Helper Data ---
const navLinks = ["Home", "About Us", "Our Services", "Hotels", "Gallery", "Contact Us"];

const testimonials = [
  { name: "Ahmed Raza", photo: "https://placehold.co/100x100/D4AF37/0A2342?text=AR", quote: "JannatTravels made our Umrah journey seamless and spiritually fulfilling. Every detail was handled with utmost care and professionalism." },
  { name: "Fatima Chowdhury", photo: "https://placehold.co/100x100/D4AF37/0A2342?text=FC", quote: "The best Hajj experience we could have asked for. The team was supportive, knowledgeable, and always available to help." },
  { name: "Salim Khan", photo: "https://placehold.co/100x100/D4AF37/0A2342?text=SK", quote: "From visa processing to booking the best hotels near Haram, everything was perfect. Highly recommended for their reliability." },
  { name: "Aisha Begum", photo: "https://placehold.co/100x100/D4AF37/0A2342?text=AB", quote: "Their attention to detail and customer service is unparalleled. They made our family's travel completely worry-free." },
];

const packages = [
    {
        title: "Hajj Packages", 
        desc: "Experience the journey of a lifetime with our comprehensive Hajj packages.", 
        img: "https://placehold.co/600x400/0A2342/FFFFFF?text=Hajj+Package",
        details: {
            price: "$7,500",
            duration: "21 Days",
            itinerary: [
                "Direct flight to Jeddah",
                "5-star hotel in Makkah (near Haram)",
                "5-star hotel in Madinah (near Masjid an-Nabawi)",
                "Guided tours of sacred sites",
                "Full transportation in air-conditioned buses",
                "Educational seminars and spiritual guidance"
            ],
            included: ["Visa Processing", "Flights", "Accommodation", "Meals (Breakfast & Dinner)", "Guided Ziyarat", "Hajj Kit"]
        }
    },
    {
        title: "Umrah Packages", 
        desc: "Perform Umrah with peace of mind. We offer flexible packages throughout the year.", 
        img: "https://placehold.co/600x400/103F6E/FFFFFF?text=Umrah+Package",
        details: {
            price: "$2,200",
            duration: "10 Days",
            itinerary: [
                "Flight to Makkah or Madinah",
                "Choice of 3, 4, or 5-star hotels",
                "Transportation between cities",
                "Optional guided tours of historical sites",
            ],
            included: ["Visa Processing", "Flights", "Accommodation"]
        }
    },
    {
        title: "Package Tours", 
        desc: "Explore the world with our curated tour packages to various destinations.", 
        img: "https://placehold.co/600x400/1F5F99/FFFFFF?text=Travel+Packages",
        details: {
            price: "Starting from $800",
            duration: "Varies by destination",
            itinerary: [
                "Explore Dubai, Malaysia, Singapore, and more",
                "Guided city tours",
                "Entrance to major attractions",
                "Leisure time for shopping and exploration"
            ],
            included: ["Flights", "Accommodation", "Tours as per itinerary"]
        }
    }
];

const services = [
    { Icon: BookOpen, title: "Hajj & Umrah Travel", desc: "Complete, guided pilgrimage packages with premium services.", details: packages[0].details },
    { Icon: () => <img src="https://flagcdn.com/sa.svg" className="w-12 h-12 rounded-full shadow" alt="Saudi Flag"/>, title: "Saudi Visa Processing", desc: "Fast, efficient, and reliable visa processing for all Saudi visa types.", details: { price: "Varies", duration: "1-5 Business Days", itinerary: ["Document submission assistance", "Application tracking", "Embassy appointment scheduling"], included: ["Consultation", "Form Filling", "Status Updates"] } },
    { Icon: Plane, title: "Air Ticketing", desc: "Competitive fares for all major airlines, domestic and international.", details: { price: "Best Fares", duration: "Instant Booking", itinerary: ["Access to global airline network", "Multi-city and stopover options", "Group booking discounts"], included: ["24/7 Support", "E-Ticket Delivery", "Fare comparison"] } },
    { Icon: Building, title: "Hotel Booking", desc: "A wide network of hotels worldwide, from luxury to economy.", details: { price: "Varies", duration: "Flexible Dates", itinerary: ["Curated list of partner hotels", "Instant confirmation", "Special requests handling (e.g., Haram view)"], included: ["Best Rate Guarantee", "Secure Booking", "Customer Reviews"] } },
    { Icon: Briefcase, title: "Manpower Supply", desc: "Reliable and professional manpower supply services.", details: { price: "On-demand", duration: "Project-based", itinerary: ["Sourcing skilled & unskilled labor", "Screening and interviewing", "Deployment and logistics"], included: ["Vetted Candidates", "Compliance Handling", "Dedicated Account Manager"] } },
    { Icon: Users, title: "Package Tours", desc: "Exciting tours to popular destinations like Dubai, Malaysia, and more.", details: packages[2].details }
];

const hotels = [
    { name: "Areej Al Falah VIP", location: "Makkah, KSA", image: "https://placehold.co/600x400/0A2342/FFFFFF?text=Areej+Al+Falah", link: "#" },
    { name: "Fajar Al Badi", location: "Makkah, KSA", image: "https://placehold.co/600x400/103F6E/FFFFFF?text=Fajar+Al+Badi", link: "#" },
    { name: "Lamar Hotels", location: "Madinah, KSA", image: "https://placehold.co/600x400/1F5F99/FFFFFF?text=Lamar+Hotels", link: "#" },
    { name: "Pullman ZamZam Makkah", location: "Makkah, KSA", image: "https://placehold.co/600x400/0A2342/FFFFFF?text=Pullman+ZamZam", link: "#" },
    { name: "Rehab Al Bustan", location: "Madinah, KSA", image: "https://placehold.co/600x400/103F6E/FFFFFF?text=Rehab+Al+Bustan", link: "#" },
    { name: "Swissôtel al Maqam Makkah", location: "Makkah, KSA", image: "https://placehold.co/600x400/1F5F99/FFFFFF?text=Swissôtel", link: "#" },
];

const galleryPhotos = [
    "https://placehold.co/800x600/0A2342/FFFFFF?text=Kaaba+at+Night",
    "https://placehold.co/800x600/103F6E/FFFFFF?text=Masjid+al-Nabawi",
    "https://placehold.co/800x600/1F5F99/FFFFFF?text=Pilgrims+in+Ihram",
    "https://placehold.co/800x600/0A2342/FFFFFF?text=Hajj+Ritual",
    "https://placehold.co/800x600/103F6E/FFFFFF?text=Green+Dome+of+Madinah",
    "https://placehold.co/800x600/1F5F99/FFFFFF?text=Prayer+at+Haram",
];

const galleryVideos = [ "https://www.youtube.com/embed/rK4Z5E6Qy_k", "https://www.youtube.com/embed/eVIa5t51D8k" ];

// --- Reusable Components & Hooks ---

const useAnimateOnScroll = (options) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};

const AnimateOnScroll = ({ children, className = '', threshold = 0.1, delay = 0 }) => {
    const [ref, isVisible] = useAnimateOnScroll({ threshold, triggerOnce: true });
    return (
        <div ref={ref} className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${delay}ms`}}>
            {children}
        </div>
    );
};

const SectionTitle = ({ children, className }) => (
    <AnimateOnScroll>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${className || 'text-gray-900'}`} style={{fontFamily: "'Playfair Display', serif"}}>{children}</h2>
    </AnimateOnScroll>
);

const SectionSubtitle = ({ children, className }) => (
    <AnimateOnScroll delay={200}>
        <p className={`text-center text-lg max-w-3xl mx-auto mb-12 md:mb-16 ${className || 'text-gray-600'}`}>{children}</p>
    </AnimateOnScroll>
);

const Modal = ({ isOpen, onClose, children }) => {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [isOpen]);
    
    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 bg-black z-50 flex justify-center items-center p-4 transition-opacity duration-300 ${show ? 'bg-opacity-70' : 'bg-opacity-0'}`} onClick={onClose}>
            <div className={`bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transition-transform duration-300 ${show ? 'scale-100' : 'scale-95'}`} onClick={e => e.stopPropagation()}>
                <div className="p-6 relative">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10">
                        <X size={28} />
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};

// --- New Components ---

const PrayerTimesSection = () => {
    const [locationTab, setLocationTab] = React.useState('Holy Cities');
    const [bangladeshDivision, setBangladeshDivision] = React.useState('Dhaka');
    const [holyCityTimes, setHolyCityTimes] = React.useState({ Makkah: null, Madinah: null });
    const [bangladeshTimes, setBangladeshTimes] = React.useState(null);

    const bangladeshDivisions = ['Dhaka', 'Chattogram', 'Khulna', 'Rajshahi', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh'];
    const prayerIcons = { Fajr: Sunrise, Dhuhr: Sun, Asr: Sun, Maghrib: Sunset, Isha: Moon };
    const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

    React.useEffect(() => {
        const fetchPrayerTimes = async (city, country, setter) => {
            try {
                const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setter(data.data.timings);
            } catch (error) {
                console.error(`Failed to fetch prayer times for ${city}:`, error);
                setter(null);
            }
        };

        if (locationTab === 'Holy Cities') {
            fetchPrayerTimes('Makkah', 'SA', (times) => setHolyCityTimes(prev => ({ ...prev, Makkah: times })));
            fetchPrayerTimes('Madinah', 'SA', (times) => setHolyCityTimes(prev => ({ ...prev, Madinah: times })));
        } else {
            fetchPrayerTimes(bangladeshDivision, 'BD', setBangladeshTimes);
        }
    }, [locationTab, bangladeshDivision]);

    const renderTimings = (title, timings) => (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 h-full">
            <h3 className="text-2xl font-bold text-white text-center mb-4" style={{fontFamily: "'Playfair Display', serif"}}>{title}</h3>
            {timings ? (
                <div className="space-y-3">
                    {prayerNames.map((prayer, index) => {
                        const Icon = prayerIcons[prayer];
                        return (
                             <AnimateOnScroll key={prayer} delay={index * 50} className="w-full">
                                <div className="flex justify-between items-center text-lg bg-black/20 p-3 rounded-lg">
                                    <div className="flex items-center">
                                        <Icon className="w-6 h-6 mr-3 text-amber-300" />
                                        <span className="font-medium text-white">{prayer}</span>
                                    </div>
                                    <span className="font-semibold text-amber-300">{timings[prayer]}</span>
                                </div>
                            </AnimateOnScroll>
                        )
                    })}
                </div>
            ) : (
                <div className="text-center text-white/80 h-full flex items-center justify-center">Loading prayer times...</div>
            )}
        </div>
    );
    
    return (
        <section className="py-20 md:py-28 bg-[#0A2342] bg-cover bg-center" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')"}}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342] via-[#0A2342] to-[#103F6E] opacity-95"></div>
            <div className="container mx-auto px-4 relative">
                <SectionTitle className="text-white">Live Prayer Times</SectionTitle>
                <SectionSubtitle className="text-gray-300">Stay connected with your prayer schedule.</SectionSubtitle>
                
                <div className="flex justify-center mb-8 bg-gray-900/20 p-1.5 rounded-full max-w-sm mx-auto">
                    <button onClick={() => setLocationTab('Holy Cities')} className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-colors duration-300 ${locationTab === 'Holy Cities' ? 'bg-amber-400 text-gray-900' : 'text-white'}`}>Holy Cities</button>
                    <button onClick={() => setLocationTab('Bangladesh')} className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-colors duration-300 ${locationTab === 'Bangladesh' ? 'bg-amber-400 text-gray-900' : 'text-white'}`}>Bangladesh</button>
                </div>

                {locationTab === 'Bangladesh' && (
                    <AnimateOnScroll className="max-w-xs mx-auto mb-8">
                        <select value={bangladeshDivision} onChange={(e) => setBangladeshDivision(e.target.value)} className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-lg shadow-lg backdrop-blur-sm focus:ring-2 focus:ring-amber-400 focus:outline-none">
                            {bangladeshDivisions.map(div => <option key={div} value={div} className="bg-gray-800">{div}</option>)}
                        </select>
                    </AnimateOnScroll>
                )}

                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {locationTab === 'Holy Cities' ? (
                        <>
                            <AnimateOnScroll delay={100}>{renderTimings("Makkah", holyCityTimes.Makkah)}</AnimateOnScroll>
                            <AnimateOnScroll delay={200}>{renderTimings("Madinah", holyCityTimes.Madinah)}</AnimateOnScroll>
                        </>
                    ) : (
                        <div className="md:col-span-2">
                           <AnimateOnScroll delay={100}>{renderTimings(bangladeshDivision, bangladeshTimes)}</AnimateOnScroll>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const PackageDetailModal = ({ isOpen, onClose, pkg }) => {
    if (!pkg) return null;
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {pkg.img && <img src={pkg.img} alt={pkg.title} className="w-full h-60 object-cover rounded-t-lg mb-6" />}
            <h2 className="text-3xl font-bold mb-4 text-[#0A2342]" style={{fontFamily: "'Playfair Display', serif"}}>{pkg.title}</h2>
            <div className="flex items-center text-xl mb-6">
                <span className="font-bold text-amber-600">{pkg.details.price}</span>
                <span className="mx-3 text-gray-300">|</span>
                <span className="text-gray-600">{pkg.details.duration}</span>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Itinerary</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {pkg.details.itinerary.map((item, i) => <AnimateOnScroll as="li" key={i} delay={i*50}>{item}</AnimateOnScroll>)}
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">What's Included</h3>
                <div className="flex flex-wrap gap-2">
                    {pkg.details.included.map((item, i) => <AnimateOnScroll key={i} delay={i*50}><span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{item}</span></AnimateOnScroll>)}
                </div>
            </div>
             <button onClick={onClose} className="mt-8 w-full bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
                Book Now
            </button>
        </Modal>
    );
};

const Lightbox = ({ images, selectedIndex, onClose, onNext, onPrev }) => {
    if (selectedIndex === null) return null;

    return (
         <div className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex justify-center items-center" onClick={onClose}>
            <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <ChevronLeft size={32} />
            </button>
            <div className="max-w-[90%] max-h-[90%] relative" onClick={e => e.stopPropagation()}>
                <img src={images[selectedIndex]} alt="Gallery view" className="max-w-full max-h-[90vh] object-contain rounded-lg"/>
            </div>
            <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <ChevronRight size={32} />
            </button>
             <button onClick={onClose} className="absolute top-4 right-4 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <X size={28} />
            </button>
        </div>
    );
};

// --- Page Components ---

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isPackageModalOpen, setPackageModalOpen] = React.useState(false);
    const [selectedPackage, setSelectedPackage] = React.useState(null);

    const slides = [
        { text: "Trusted Hajj & Umrah Agency", img: "https://placehold.co/1600x800/0A2342/FFFFFF?text=JannatTravels" },
        { text: "Your Reliable Travel Partner", img: "https://placehold.co/1600x800/103F6E/FFFFFF?text=Reliable+Partner" },
        { text: "Simplifying Your Sacred Journey", img: "https://placehold.co/1600x800/1F5F99/FFFFFF?text=Easy+Travel" },
    ];

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentSlide, slides.length]);
    
    const openPackageModal = (pkg) => {
        setSelectedPackage(pkg);
        setPackageModalOpen(true);
    };

    const closePackageModal = () => setPackageModalOpen(false);

    return (
        <>
            <div className="bg-gray-50">
                {/* Carousel */}
                <div className="relative w-full h-80 md:h-96 lg:h-[650px] overflow-hidden">
                    {slides.map((slide, index) => (
                        <div key={index} className={`absolute inset-0 transition-opacity duration-2000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                            <div className={`w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-in-out ${index === currentSlide ? 'scale-110' : 'scale-100'}`} style={{backgroundImage: `url(${slide.img})`}} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-center">
                                <div className={`transition-all duration-1000 delay-500 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white text-center p-4 drop-shadow-2xl" style={{fontFamily: "'Playfair Display', serif"}}>{slide.text}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                        {slides.map((_, index) => (
                            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125 ring-2 ring-white/50' : 'bg-white/50'}`}></button>
                        ))}
                    </div>
                </div>

                {/* Our Packages */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        <SectionTitle className="text-[#0A2342]">Our Premier Packages</SectionTitle>
                        <SectionSubtitle>Crafted with care for a memorable and blessed journey. We offer a range of packages to suit your needs.</SectionSubtitle>
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
                
                {/* Live Prayer Times */}
                <PrayerTimesSection />

                {/* About the Company */}
                <section className="py-20 md:py-28 bg-gray-50">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                        <AnimateOnScroll className="md:w-1/2">
                            <img src="https://placehold.co/600x500/E2E8F0/0A2342?text=JannatTravels" alt="JannatTravels Office" className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"/>
                        </AnimateOnScroll>
                        <div className="md:w-1/2">
                            <AnimateOnScroll>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-6" style={{fontFamily: "'Playfair Display', serif"}}>About JannatTravels</h2>
                            </AnimateOnScroll>
                            <AnimateOnScroll delay={150}>
                                <p className="text-gray-600 leading-relaxed mb-4 text-lg">JannatTravels is a government-approved travel agency dedicated to providing exceptional pilgrimage and travel services...</p>
                            </AnimateOnScroll>
                            <AnimateOnScroll delay={300}>
                                <p className="text-gray-600 leading-relaxed text-lg">We handle every aspect of your travel, ensuring a hassle-free experience so you can focus on what truly matters.</p>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </section>
                
                 {/* Why Choose Us */}
                <section className="bg-white py-20 md:py-28">
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
                
                {/* Testimonials */}
                <TestimonialsSection />
            </div>
            <PackageDetailModal isOpen={isPackageModalOpen} onClose={closePackageModal} pkg={selectedPackage} />
        </>
    );
};

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

const ServicesPage = () => {
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

const HotelsPage = () => (
     <div className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
            <SectionTitle className="text-[#0A2342]">Our Partner Hotels</SectionTitle>
            <SectionSubtitle>We partner with trusted hotels in Makkah and Madinah to ensure your comfort and convenience during your stay.</SectionSubtitle>
            
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

const ContactPage = () => (
    <div className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
            <SectionTitle className="text-[#0A2342]">Contact Us</SectionTitle>
            <SectionSubtitle>We're here to help. Reach out to us via phone, email, or by filling out the form below.</SectionSubtitle>
            <AnimateOnScroll>
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-gray-900" style={{fontFamily: "'Playfair Display', serif"}}>Get in Touch</h3>
                        {[
                            {icon: MapPin, title: "Address", content: "Eastern Arzoo (3rd Floor), 61, Bijoy Nagar, Dhaka, 1000, Bangladesh"},
                            {icon: Phone, title: "Phone", content: "+880 1915 630525<br/>+880 1912 920184"},
                            {icon: MessageSquare, title: "WhatsApp", content: "+880 1306 423991"},
                            {icon: Mail, title: "Email", content: "jannattravels1@yahoo.com"},
                        ].map(item => (
                             <div key={item.title} className="flex items-start space-x-4">
                                <item.icon className="w-7 h-7 text-amber-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-700 text-lg">{item.title}</h4>
                                    <p className="text-gray-600" dangerouslySetInnerHTML={{__html: item.content}}></p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <form className="space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900" style={{fontFamily: "'Playfair Display', serif"}}>Send us a Message</h3>
                         {[
                             {id: "name", label: "Full Name", type: "text", placeholder: "Your Name"},
                             {id: "email", label: "Email Address", type: "email", placeholder: "you@example.com"},
                             {id: "phone", label: "Phone Number", type: "tel", placeholder: "+880 1..."},
                         ].map(field => (
                             <div key={field.id}>
                                <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                                <input type={field.type} id={field.id} name={field.id} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-shadow bg-gray-50" placeholder={field.placeholder} />
                            </div>
                         ))}
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-shadow bg-gray-50" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </AnimateOnScroll>
        </div>
    </div>
);

const AboutPage = () => (
     <div className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
            <SectionTitle className="text-[#0A2342]">About JannatTravels</SectionTitle>
            <SectionSubtitle>Your trusted partner in pilgrimage and travel since our inception.</SectionSubtitle>
            
            <AnimateOnScroll>
                <div className="prose lg:prose-xl max-w-none text-gray-700 leading-8">
                    <img src="https://placehold.co/800x400/103F6E/FFFFFF?text=Our+Journey" alt="Scenic view representing the journey of JannatTravels" className="rounded-lg shadow-lg mb-12"/>
                    
                    <h3 style={{fontFamily: "'Playfair Display', serif"}}>Our Story</h3>
                    <p>
                        JannatTravels was founded with a simple yet powerful vision: to provide honest, reliable, and deeply personal travel services for those undertaking the sacred journeys of Hajj and Umrah. We understand that a pilgrimage is more than just a trip; it's a profound spiritual experience. From our humble beginnings, we have grown into a government-approved agency renowned for its meticulous planning and client-first approach.
                    </p>
                    
                    <h3 style={{fontFamily: "'Playfair Display', serif"}}>Our Mission & Vision</h3>
                    <p>
                        Our mission is to eliminate the complexities of travel, allowing our clients to focus entirely on their spiritual goals. We aim to be the most trusted and sought-after travel agency in Bangladesh, known for our unwavering commitment to quality and integrity. Our vision is to facilitate countless blessed journeys, creating cherished memories for every pilgrim we serve.
                    </p>

                    <h3 style={{fontFamily: "'Playfair Display', serif"}}>Our Core Values</h3>
                    <ul className="space-y-4 !pl-5">
                        <li className="!p-0"><strong>Honesty:</strong> We believe in complete transparency in all our dealings. No hidden costs, no surprises.</li>
                        <li className="!p-0"><strong>Reliability:</strong> You can depend on us. We deliver on our promises and ensure every detail is handled professionally.</li>
                        <li className="!p-0"><strong>Client-First Approach:</strong> Your needs and comfort are at the heart of everything we do. We listen, we care, and we serve with dedication.</li>
                    </ul>
                </div>
            </AnimateOnScroll>
        </div>
    </div>
);

const GalleryPage = () => {
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


// --- Main App Component ---

export default function App() {
    const [currentPage, setCurrentPage] = React.useState('Home');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navigateTo = (page) => {
        setCurrentPage(page);
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    }
    
    const renderPage = () => {
        switch (currentPage) {
            case 'Home': return <HomePage />;
            case 'Our Services': return <ServicesPage />;
            case 'Hotels': return <HotelsPage />;
            case 'Contact Us': return <ContactPage />;
            case 'About Us': return <AboutPage />;
            case 'Gallery': return <GalleryPage />;
            default: return <HomePage />;
        }
    };

    return (
        <>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Playfair+Display:wght@700;800;900&display=swap');
                body { font-family: 'Inter', sans-serif; }
                `}
            </style>
            <div className="font-sans antialiased text-gray-800 bg-white">
                 <header className={`sticky top-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-md`}>
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center py-4">
                            <div className="text-3xl font-bold text-[#0A2342] cursor-pointer" onClick={() => navigateTo('Home')} style={{fontFamily: "'Playfair Display', serif"}}>
                                Jannat<span className="text-amber-500">Travels</span>
                            </div>
                            <nav className="hidden md:flex items-center space-x-2">
                                {navLinks.map(link => (
                                    <button key={link} onClick={() => navigateTo(link)} className={`px-4 py-2 rounded-md font-medium transition-colors duration-300 ${currentPage === link ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}>
                                        {link}
                                    </button>
                                ))}
                            </nav>
                            <div className="md:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`z-50 relative transition-colors duration-300 text-gray-800`}>
                                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white pt-24 z-40">
                            <nav className="flex flex-col items-center space-y-6">
                                {navLinks.map(link => (
                                    <button key={link} onClick={() => navigateTo(link)} className={`font-medium text-2xl ${currentPage === link ? 'text-blue-600' : 'text-gray-700'}`}>
                                        {link}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    )}
                </header>
                
                <main>
                    {renderPage()}
                </main>
                
                <footer className="bg-gray-900 text-white">
                    <div className="container mx-auto px-4 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-white" style={{fontFamily: "'Playfair Display', serif"}}>Jannat<span className="text-amber-400">Travels</span></h3>
                                <p className="text-gray-400">Your trusted partner for Hajj, Umrah, and worldwide travel. We are committed to providing exceptional service and unforgettable experiences.</p>
                                <div className="flex space-x-4 mt-6">
                                    <a href="https://www.facebook.com/Jannattravels850" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors"><Facebook /></a>
                                    <button onClick={() => {}} className="text-gray-400 hover:text-amber-400 transition-colors"><Youtube /></button>
                                    <button onClick={() => {}} className="text-gray-400 hover:text-amber-400 transition-colors"><Instagram /></button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                                <ul className="space-y-3">
                                    {navLinks.map(link => (
                                        <li key={link}><button onClick={() => navigateTo(link)} className="text-gray-400 hover:text-amber-400 hover:underline">{link}</button></li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Services</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>Hajj & Umrah Package</li>
                                    <li>Air Ticketing & Hotel Booking</li>
                                    <li>Package Tours & Visa Processing</li>
                                    <li>Manpower Supply</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                                <ul className="space-y-4 text-gray-400">
                                    <li className="flex items-start"><MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0"/><span>Eastern Arzoo (3rd Floor), 61, Bijoy Nagar, Dhaka, 1000</span></li>
                                    <li className="flex items-start"><Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0"/><span>+880 1915 630525</span></li>
                                    <li className="flex items-start"><Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0"/><span>jannattravels1@yahoo.com</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
                            <p>&copy; {new Date().getFullYear()} JannatTravels. All Rights Reserved. Designed with care.</p>
                        </div>
                    </div>
                </footer>
                
                <a href="https://m.me/Jannattravels850" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-30">
                    <MessageSquare size={28} />
                </a>
            </div>
        </>
    );
}
