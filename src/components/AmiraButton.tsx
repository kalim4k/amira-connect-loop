import React from 'react';
import { cn } from '@/lib/utils';

interface AmiraButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'elegant';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const AmiraButton: React.FC<AmiraButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow hover:scale-105 active:scale-95",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-soft",
    elegant: "bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-[var(--shadow-glow),_0_0_60px_hsl(var(--primary-glow)_/_0.5)] hover:scale-110 animate-pulse-glow"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default AmiraButton;