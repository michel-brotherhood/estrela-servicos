import { ButtonHTMLAttributes, ReactNode } from "react";

interface HeroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const HeroButton = ({ children, className = "", ...props }: HeroButtonProps) => {
  return (
    <button
      className={`hero-button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default HeroButton;
