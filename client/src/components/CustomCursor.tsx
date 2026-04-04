/* ============================================================
   QUITTE Custom Cursor — Light Theme with Financial Blue
   Smooth following cursor with scale on hover
   ============================================================ */
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dot, setDot] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let animId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setDot({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(animate);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMove);
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full border-2 border-primary/50 transition-all duration-150"
        style={{
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          left: pos.x - (isHovering ? 24 : 16),
          top: pos.y - (isHovering ? 24 : 16),
          opacity: isHovering ? 0.7 : 0.4,
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-primary"
        style={{
          width: isHovering ? '6px' : '4px',
          height: isHovering ? '6px' : '4px',
          left: dot.x - (isHovering ? 3 : 2),
          top: dot.y - (isHovering ? 3 : 2),
          opacity: 0.8,
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </>
  );
}
