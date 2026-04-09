import React from 'react';
import { motion } from 'framer-motion';

interface MaskedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const MaskedText = ({ children, className = '', delay = 0, as: Component = 'h2' }: MaskedTextProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay }}
      >
        <Component>{children}</Component>
      </motion.div>
    </div>
  );
};

export default MaskedText;
