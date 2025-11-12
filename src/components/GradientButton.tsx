import { ButtonHTMLAttributes, ReactNode } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const GradientButton = ({ children, className = "", ...props }: GradientButtonProps) => {
  return (
    <button
      className={`relative inline-block px-7 py-3 text-2xl font-bold uppercase text-white bg-gradient-to-br from-[#00c6ff] to-[#0072ff] border-none rounded-[40px] shadow-[0px_4px_0px_#0072ff] transition-all duration-200 ease-in-out cursor-pointer hover:-translate-y-0.5 hover:shadow-[0px_6px_0px_#0072ff] active:translate-y-0 active:shadow-none active:bg-gradient-to-br active:from-[#0072ff] active:to-[#00c6ff] before:content-[''] before:absolute before:w-0 before:h-0 before:top-[-3px] before:left-[-3px] before:rounded-[40px] before:border-t-[3px] before:border-l-[3px] before:border-white after:content-[''] after:absolute after:w-0 after:h-0 after:bottom-[-3px] after:right-[-3px] after:rounded-[40px] after:border-b-[3px] after:border-r-[3px] after:border-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
