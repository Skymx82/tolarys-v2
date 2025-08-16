"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  onClick,
  href,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all focus:outline-none backdrop-blur-md';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white shadow-lg shadow-purple-500/20',
    secondary: 'bg-white/10 text-white border border-white/20 backdrop-blur-lg',
    outline: 'bg-transparent border border-white/30 text-white hover:bg-white/5'
  };
  
  const sizeStyles = {
    sm: 'text-sm px-4 py-1.5 rounded-full',
    md: 'text-base px-6 py-2.5 rounded-full',
    lg: 'text-base px-8 py-3.5 rounded-full'
  };

  return (
    <motion.button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...props as any}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
