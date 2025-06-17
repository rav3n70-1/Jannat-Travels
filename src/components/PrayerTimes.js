import React from 'react';
import { Sunrise, Sun, Sunset, Moon } from 'lucide-react';
import { AnimateOnScroll, SectionTitle, SectionSubtitle } from './AnimateOnScroll';

export const PrayerTimesSection = () => {
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
    
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <section className="relative py-20 md:py-28 bg-[#0A2342] bg-cover bg-center" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')"}}>
            <div className="container mx-auto px-4 relative">
                <SectionTitle className="text-white">Live Prayer Times</SectionTitle>
                <SectionSubtitle className="text-gray-300">Stay connected with your prayer schedule.</SectionSubtitle>
                
                <AnimateOnScroll delay={100} className="text-center mb-8">
                    <p className="text-amber-300 font-semibold text-lg">{currentDate}</p>
                </AnimateOnScroll>

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
