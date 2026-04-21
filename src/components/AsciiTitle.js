import React, { memo, useEffect, useRef } from 'react';

const AsciiTitle = memo(() => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease';
      el.style.opacity = '1';
    }, 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={ref} className="ascii-title">
      <span className="rainbow-text">{'╔══ krispoole.dev ══╗'}</span>
      <span className="rainbow-text">{'║ Terminal Portfolio ║'}</span>
      <span className="rainbow-text">{'╚═══════════════════╝'}</span>
    </div>
  );
});

export default AsciiTitle;
