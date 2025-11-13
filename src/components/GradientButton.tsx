import { ButtonHTMLAttributes, ReactNode } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const GradientButton = ({ children, className = "", ...props }: GradientButtonProps) => {
  return (
    <button
      className={`frutiger-button cursor-pointer relative p-0.5 rounded-md border-0 transition-all duration-300 shadow-[0_4px_6px_0_rgba(0,0,0,0.5)] hover:shadow-[0_6px_12px_0_rgba(0,0,0,0.6)] active:shadow-none ${className}`}
      style={{
        background: 'linear-gradient(#006caa, #00c3ff)',
        textShadow: '1px 1px rgba(0,0,0,0.6)'
      }}
      {...props}
    >
      <div className="inner relative inset-0 px-6 py-3 md:px-8 md:py-4 rounded overflow-hidden transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(-65deg,transparent_40%,rgba(255,255,255,0.47)_50%,transparent_70%)] before:bg-[length:200%_100%] before:bg-no-repeat before:animate-[frutiger-shine_3s_ease_infinite] after:content-[''] after:absolute after:inset-0 after:rounded after:transition-all after:duration-300 after:shadow-[inset_0_2px_8px_-2px_transparent] active:after:shadow-[inset_0_2px_8px_-2px_rgba(0,0,0,0.6)]"
        style={{
          background: 'radial-gradient(circle at 50% 100%, rgba(48,248,248,0.5) 10%, rgba(48,248,248,0) 55%), linear-gradient(#00526a, #009dcd)'
        }}
      >
        <div className="top-white absolute rounded inset-x-[-8em] inset-y-0 transition-all duration-300 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% -270%, #ffffff 45%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0) 60%)'
          }}
        />
        <span className="text relative z-10 text-white font-semibold text-base md:text-2xl uppercase transition-all duration-300">
          {children}
        </span>
      </div>
    </button>
  );
};

export default GradientButton;
