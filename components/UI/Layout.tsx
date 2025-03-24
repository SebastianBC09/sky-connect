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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-full overflow-hidden"
    >
      {/* Contenedor principal que ocupa toda la pantalla */}
      <div className="relative w-full h-full">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/airport.png"
            alt="Airport"
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>

        {/* Overlay con gradiente */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #111E3E 0%, #111E3E 0.01%, #020D20 100%)',
            opacity: 0.9
          }}
        />

        {/* Contenedor del contenido con padding responsive */}
        <div className="absolute inset-0 w-full h-full overflow-auto px-4 sm:px-6 md:px-10 lg:px-20 py-6 md:py-11">
          {children}
        </div>
      </div>
    </motion.main>
  );
};

export default AppLayout;
