import { motion } from 'framer-motion';
import RedMid from '@/assets/images/red.jpeg'
const MeSection = () => {
    return (
        <section className="py-20 px-8 sm:px-8 lg:px-20">
            <motion.div
                className="flex justify-center items-center gap-2 md:gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.img
                    className="w-full max-w-80 h-64 md:h-full rounded-tl-3xl rounded-br-3xl shadow-lg transform transition-transform hover:scale-105"
                    src={RedMid.src}
                    alt="Eunice Makeover 1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.img
                    className="w-full max-w-80 h-64 md:h-full rounded-tr-3xl rounded-bl-3xl shadow-lg transform transition-transform hover:scale-105 contain"
                    src={RedMid.src}
                    alt="Eunice Makeover 2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.img
                    className="w-full max-w-80 h-64 md:h-full rounded-tr-3xl rounded-bl-3xl shadow-lg transform transition-transform hover:scale-105"
                    src={RedMid.src}
                    alt="Eunice Makeover 3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                />
            </motion.div>
            <motion.div
                className='flex flex-col justify-center items-center text-black py-12 gap-8 font-[family-name:var(--font-geist-mali)]'
            >
                <span className='text-base font-light text-center max-w-[33rem]'>Makeup is my art, where creativity meets precision, all while delivering exceptional customer service.</span>
                <span className='font-semibold'>-Eunice</span>
            </motion.div>
        </section>
    );
}

export default MeSection;