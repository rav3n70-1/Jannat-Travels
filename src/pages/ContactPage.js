// src/pages/ContactPage.js
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { AnimateOnScroll, SectionTitle, SectionSubtitle } from '../components/AnimateOnScroll';


export const ContactPage = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, message } = formData;
        const subject = encodeURIComponent(`JannatTravels Inquiry from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n\n` +
            `Message:\n${message}`
        );
        window.location.href = `mailto:jannattravels1@yahoo.com?subject=${subject}&body=${body}`;
    };

    // This URL will open Google Maps with the destination pre-filled and the starting point as the user's current location.
    const mapDirectionUrl = "https://www.google.com/maps/dir/?api=1&destination=PCM6%2BR2%20Dhaka";

    return (
        <div className="py-20 md:py-28 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionTitle className="text-[#0A2342]">Contact Us</SectionTitle>
                <SectionSubtitle>We're here to help. Reach out to us via phone, email, or by filling out the form below.</SectionSubtitle>
                <AnimateOnScroll>
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div className="flex flex-col justify-between">
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
                            {/* Map Section */}
                            <AnimateOnScroll className="mt-8">
                                <a href={mapDirectionUrl} target="_blank" rel="noopener noreferrer" className="block rounded-2xl shadow-lg overflow-hidden group">
                                    <div className="relative">
                                         <iframe 
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.062121332808!2d90.41029208810237!3d23.73880499877101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b88a8f609e3b%3A0x61de42993ba175e!2sEastern%20Arzoo!5e0!3m2!1sen!2sbd!4v1687000000000!5m2!1sen!2sbd" 
                                            width="100%" 
                                            height="250" 
                                            style={{border:0}} 
                                            allowFullScreen="" 
                                            loading="lazy" 
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="JannatTravels Office Location"
                                        ></iframe>
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-white font-bold bg-black/50 px-4 py-2 rounded-md">Click to get directions</p>
                                        </div>
                                    </div>
                                </a>
                            </AnimateOnScroll>
                        </div>
                        {/* Right Column */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900" style={{fontFamily: "'Playfair Display', serif"}}>Send us a Message</h3>
                             {[
                                 {id: "name", label: "Full Name", type: "text", placeholder: "Your Name"},
                                 {id: "email", label: "Email Address", type: "email", placeholder: "you@example.com"},
                                 {id: "phone", label: "Phone Number", type: "tel", placeholder: "+880 1..."},
                             ].map(field => (
                                 <div key={field.id}>
                                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                                    <input type={field.type} id={field.id} name={field.id} required value={formData[field.id]} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-shadow bg-gray-50" placeholder={field.placeholder} />
                                </div>
                             ))}
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-shadow bg-gray-50" placeholder="How can we help you?"></textarea>
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
};