import { p } from 'framer-motion/client';
import Recent, { useState, useRef, useEffect } from 'react';

const RecentWorksSection = () => {
    const imageUrls = [
        "https://via.placeholder.com/628x730",
        "https://via.placeholder.com/628x730",
        "https://via.placeholder.com/628x730",
        "https://via.placeholder.com/628x730",
        "https://via.placeholder.com/628x730",
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        if (containerRef.current) {
            setScrollPosition(containerRef.current.scrollLeft);
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <section className="h-auto my-20 flex-col justify-start items-center gap-14 flex">
            <div className="self-stretch md:px-20 mx-4 md:flex justify-between items-center ">
                <div className="grow shrink basis-0 h-12 px-6 py-2.5 border-l-8 border-black justify-start items-center gap-2.5 flex">
                    <div className="text-left text-black text-xl font-bold leading-loose">
                        MY MOST RECENT MAKEUP
                    </div>
                </div>
                <div className="grow mt-12 md:mt-0 shrink basis-0 text-black text-base font-normal leading-relaxed tracking-tight">
                    Check out my recent makeup lineups below for a glimpse into my latest
                    creations! From bold and glamorous to soft and natural, each look
                    showcases my passion for artistry and attention to detail.
                </div>
            </div>
            <div className="overflow-x-scroll overflow-x-auto justify-center items-center flex">
                <div
                    className="h-full overflow-x-scroll overflow-x-hidden flex gap-6 transition-all duration-500 ease-in-out whitespace-wrap"
                    ref={containerRef}
                >
                    {imageUrls.map((imageUrl, index) => (
                        <p key={index} className='text-black'>{imageUrl}</p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentWorksSection;

