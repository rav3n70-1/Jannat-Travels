// src/pages/AboutPage.js
import React from 'react';
import { AnimateOnScroll, SectionTitle, SectionSubtitle } from '../components/AnimateOnScroll';

export const AboutPage = () => (
     <div className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
            <SectionTitle className="text-[#0A2342]">About JannatTravels</SectionTitle>
            <SectionSubtitle>Your trusted partner in pilgrimage and travel since our inception.</SectionSubtitle>
            <AnimateOnScroll>
                <div className="prose lg:prose-xl max-w-none text-gray-700 leading-8">
                    <img src="https://i.ibb.co/ycwC9YSs/download.jpg" alt="Scenic view representing the journey of JannatTravels" className="rounded-lg shadow-lg mb-12"/>
                    
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