'use client';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({
  children,
}) => {
  return (
    <div className="min-h-screen w-full relative flex flex-col">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow relative"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/airport.png"
            alt="Airport"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #111E3E 0%, #111E3E 0.01%, #020D20 100%)',
            opacity: 0.9
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-6 text-white">
          {children}
        </div>
      </motion.main>
    </div>
  );
};

export default AppLayout;
