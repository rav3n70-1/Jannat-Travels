import React from 'react';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, MessageSquare, Menu, X } from 'lucide-react';
import { navLinks } from './data';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { HotelsPage } from './pages/HotelsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

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
            case 'About Us': return <AboutPage />;
            case 'Our Services': return <ServicesPage />;
            case 'Hotels': return <HotelsPage />;
            case 'Gallery': return <GalleryPage />;
            case 'Contact Us': return <ContactPage />;
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
                                <p className="text-gray-400">Your trusted partner for Hajj, Umrah, and worldwide travel.</p>
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
                
                <a href="https://m.me/Jannattravels850" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-30">
                    <MessageSquare size={28} />
                </a>
            </div>
        </>
    );
}