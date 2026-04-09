import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HorizontalScrollProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const HorizontalScroll = ({ children, title, subtitle }: HorizontalScrollProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the x-transform based on scroll progress
  // We'll move from 0% to -100% (or less depending on children width)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section Header (Optional) */}
        {(title || subtitle) && (
          <div className="absolute top-24 left-12 z-10">
            {subtitle && <span className="text-lisbon-yellow font-heading font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">{subtitle}</span>}
            {title && <h2 className="font-heading text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase">{title}</h2>}
          </div>
        )}

        <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
