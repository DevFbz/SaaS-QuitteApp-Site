/* ============================================================
   QUITTE AnimatedSection — Scroll-triggered entrance animations
   ============================================================ */
import { useRef, useEffect, useState, ReactNode, CSSProperties, ElementType } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fadeIn' | 'scaleUp' | 'slideUp';
  delay?: number;
  duration?: number;
  threshold?: number;
  style?: CSSProperties;
  as?: ElementType;
}

const animations = {
  fadeUp: {
    hidden: { opacity: 0, transform: 'translateY(40px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  },
  fadeLeft: {
    hidden: { opacity: 0, transform: 'translateX(-40px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  fadeRight: {
    hidden: { opacity: 0, transform: 'translateX(40px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  fadeIn: {
    hidden: { opacity: 0, transform: 'none' },
    visible: { opacity: 1, transform: 'none' },
  },
  scaleUp: {
    hidden: { opacity: 0, transform: 'scale(0.92)' },
    visible: { opacity: 1, transform: 'scale(1)' },
  },
  slideUp: {
    hidden: { opacity: 0, transform: 'translateY(80px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  },
};

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  style,
  as: Tag = 'div' as ElementType,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const anim = animations[animation];
  const currentStyle = isVisible ? anim.visible : anim.hidden;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        ...currentStyle,
        transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
