import { BookOpen, Plane, Building, Briefcase, Users } from 'lucide-react';

export const navLinks = ["Home", "About Us", "Our Services", "Hotels", "Gallery", "Contact Us"];

export const testimonials = [
  { name: "Ahmed Raza", photo: "https://placehold.co/100x100/D4AF37/0A2342?text=AR", quote: "JannatTravels made our Umrah journey seamless and spiritually fulfilling. Every detail was handled with utmost care and professionalism." },
  { name: "Fatima Chowdhury", photo: "https://placehold.co/100x100/D4AF37/0A2342?text=FC", quote: "The best Hajj experience we could have asked for. The team was supportive, knowledgeable, and always available to help." },
  { name: "Salim Khan", photo: "https://placehold.co/100x100/D4AF37/0A2342?text=SK", quote: "From visa processing to booking the best hotels near Haram, everything was perfect. Highly recommended for their reliability." },
  { name: "Aisha Begum", photo: "https://placehold.co/100x100/D4AF37/0A2342?text=AB", quote: "Their attention to detail and customer service is unparalleled. They made our family's travel completely worry-free." },
];

export const packages = [
    {
        title: "Hajj Packages", 
        desc: "Experience the journey of a lifetime with our comprehensive Hajj packages.", 
        img: "https://i.ibb.co/C5QTQrz9/Hajj-Ritual.jpg",
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
        img: "https://i.ibb.co/MxXJnyVd/Pilgrims-in-Ihram.jpg",
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
        img: "https://i.ibb.co/7ts9HWX6/travel.jpg",
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

export const services = [
    { Icon: BookOpen, title: "Hajj & Umrah Travel", desc: "Complete, guided pilgrimage packages with premium services.", details: packages[0].details, img: packages[0].img },
    { Icon: () => <img src="https://flagcdn.com/sa.svg" className="w-12 h-12 rounded-full shadow" alt="Saudi Flag"/>, title: "Saudi Visa Processing", desc: "Fast, efficient, and reliable visa processing for all Saudi visa types.", details: { price: "Varies", duration: "1-5 Business Days", itinerary: ["Document submission assistance", "Application tracking", "Embassy appointment scheduling"], included: ["Consultation", "Form Filling", "Status Updates"] } },
    { Icon: Plane, title: "Air Ticketing", desc: "Competitive fares for all major airlines, domestic and international.", details: { price: "Best Fares", duration: "Instant Booking", itinerary: ["Access to global airline network", "Multi-city and stopover options", "Group booking discounts"], included: ["24/7 Support", "E-Ticket Delivery", "Fare comparison"] } },
    { Icon: Building, title: "Hotel Booking", desc: "A wide network of hotels worldwide, from luxury to economy.", details: { price: "Varies", duration: "Flexible Dates", itinerary: ["Curated list of partner hotels", "Instant confirmation", "Special requests handling (e.g., Haram view)"], included: ["Best Rate Guarantee", "Secure Booking", "Customer Reviews"] } },
    { Icon: Briefcase, title: "Manpower Supply", desc: "Reliable and professional manpower supply services.", details: { price: "On-demand", duration: "Project-based", itinerary: ["Sourcing skilled & unskilled labor", "Screening and interviewing", "Deployment and logistics"], included: ["Vetted Candidates", "Compliance Handling", "Dedicated Account Manager"] } },
    { Icon: Users, title: "Package Tours", desc: "Exciting tours to popular destinations like Dubai, Malaysia, and more.", details: packages[2].details, img: packages[2].img }
];

export const hotels = [
    { name: "Areej Al Falah VIP", location: "Makkah, KSA", video: "https://imgur.com/a/e5nsCUG", link: "https://areejalfalah.com/en/" },
    { name: "Fajar Al Badi", location: "Makkah, KSA", image: "https://placehold.co/600x400/103F6E/FFFFFF?text=Fajar+Al+Badi", link: "#" },
    { name: "Lamar Hotels", location: "Madinah, KSA", image: "https://placehold.co/600x400/1F5F99/FFFFFF?text=Lamar+Hotels", link: "#" },
    { name: "Pullman ZamZam Makkah", location: "Makkah, KSA", image: "https://placehold.co/600x400/0A2342/FFFFFF?text=Pullman+ZamZam", link: "#" },
    { name: "Rehab Al Bustan", location: "Madinah, KSA", image: "https://placehold.co/600x400/103F6E/FFFFFF?text=Rehab+Al+Bustan", link: "#" },
    { name: "Swissôtel al Maqam Makkah", location: "Makkah, KSA", image: "https://placehold.co/600x400/1F5F99/FFFFFF?text=Swissôtel", link: "#" },
];

export const galleryPhotos = [
    "https://i.ibb.co/WpKJ1nVy/Kaba-at-night.jpg",
    "https://i.ibb.co/mCy9g9XS/Masjid-al-Nabawi.jpg",
    "https://i.ibb.co/MxXJnyVd/Pilgrims-in-Ihram.jpg",
    "https://i.ibb.co/C5QTQrz9/Hajj-Ritual.jpg",
    "https://i.ibb.co/Y4WLfgxF/Prayer-at-Haram.jpg",
    "https://i.ibb.co/VWvN669k/Green-Dome-of-Madinah.jpg",
];

export const galleryVideos = [ "https://www.youtube.com/embed/WcFfPbjmP04?si=wiDDYkFuC73cHXr1","https://www.youtube.com/embed/Q_9Uy0SHku8?si=5xghv9qmEoJxsOdy"];
