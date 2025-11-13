import { ButtonHTMLAttributes, ReactNode } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const GradientButton = ({ children, className = "", ...props }: GradientButtonProps) => {
  return (
    <button
      className={`frutiger-button ${className}`}
      {...props}
    >
      <div className="inner">
        <div className="top-white"></div>
        <span className="text">{children}</span>
      </div>
    </button>
  );
};

export default GradientButton;
