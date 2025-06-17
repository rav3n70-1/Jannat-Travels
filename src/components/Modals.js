import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

export const Modal = ({ isOpen, onClose, children }) => {
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

export const PackageDetailModal = ({ isOpen, onClose, pkg }) => {
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

export const Lightbox = ({ images, selectedIndex, onClose, onNext, onPrev }) => {
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
