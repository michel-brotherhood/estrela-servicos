import { ReactNode } from "react";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FadeInSection = ({ children, className = "", delay = 0 }: FadeInSectionProps) => {
  const { elementRef, isVisible } = useFadeInOnScroll();

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
