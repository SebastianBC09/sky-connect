'use client';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface BaseCardProps {
  children: ReactNode;
  href?: string;
  prefetch?: boolean;
}

const BaseCard: FC<BaseCardProps> = ({
  children,
  href,
  prefetch = false,
}) => {
  const cardContent = (
    <motion.div
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      className="relative w-auto h-auto overflow-hidden shadow-md border-[1px] border-white rounded-[7px]"
    >
      <div className="absolute right-0 top-0 w-[40%] h-full z-0">
        <Image
          className="object-cover rounded-[7px] opacity-[0.4]"
          src="/images/plane.png"
          alt="Avión"
          priority
          fill
        />
      </div>
      <div
        className="absolute inset-0 opacity-80 z-10"
        style={{
          background: 'linear-gradient(90deg, #3F495F 0%, #0E1934 74%)'
        }}
      />
      <div className="relative h-full text-white z-20">
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} prefetch={prefetch}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default BaseCard;
