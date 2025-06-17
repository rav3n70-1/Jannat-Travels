import React from 'react';

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

export const AnimateOnScroll = ({ children, className = '', as = 'div', threshold = 0.1, delay = 0 }) => {
    const [ref, isVisible] = useAnimateOnScroll({ threshold, triggerOnce: true });
    const Component = as;
    return (
        <Component ref={ref} className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${delay}ms`}}>
            {children}
        </Component>
    );
};

export const SectionTitle = ({ children, className }) => (
    <AnimateOnScroll>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${className || 'text-gray-900'}`} style={{fontFamily: "'Playfair Display', serif"}}>{children}</h2>
    </AnimateOnScroll>
);

export const SectionSubtitle = ({ children, className }) => (
    <AnimateOnScroll delay={200}>
        <p className={`text-center text-lg max-w-3xl mx-auto mb-12 md:mb-16 ${className || 'text-gray-600'}`}>{children}</p>
    </AnimateOnScroll>
);
