'use client';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen overflow-hidden relative"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full -z-10"
      >
        <Image
          src="/images/airport.png"
          alt="Airport"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: [0.5, 0.8, 0.9],
          backgroundPosition: ['0% 0%', '50% 50%', '100% 100%'],
        }}
        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
        className="absolute inset-0 -z-0"
        style={{
          background: 'linear-gradient(135deg, #111E3E 0%, #020D20 100%)',
          backgroundSize: '200% 200%',
        }}
      />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        className="relative w-full h-full overflow-auto px-4 sm:px-6 md:px-10 lg:px-20 py-6 md:py-11"
      >
        {children}
      </motion.div>
    </motion.main>
  );
};

export default AppLayout;
