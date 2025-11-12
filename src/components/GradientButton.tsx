import { ButtonHTMLAttributes, ReactNode } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const GradientButton = ({ children, className = "", ...props }: GradientButtonProps) => {
  return (
    <button
      className={`bubble-button relative px-5 py-2 md:px-7 md:py-3 text-base md:text-2xl font-bold uppercase text-white bg-accent rounded-md border-none cursor-pointer transition-all duration-200 ease-in-out active:scale-95 before:absolute before:content-[''] before:w-[150%] before:left-1/2 before:h-full before:-translate-x-1/2 before:-z-10 before:bg-no-repeat after:absolute after:content-[''] after:w-[150%] after:left-1/2 after:h-full after:-translate-x-1/2 after:-z-10 after:bg-no-repeat hover:before:-top-[70%] hover:before:animate-[greentopBubbles_0.6s_ease] hover:after:-bottom-[70%] hover:after:animate-[greenbottomBubbles_0.6s_ease] ${className}`}
      style={{
        '--bubble-color': 'hsl(var(--accent))'
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
