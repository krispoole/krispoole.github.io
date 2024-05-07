import React, { memo } from "react";
import { useAsciiText } from "react-ascii-text";

const AsciiTitle = memo(() => {
  const asciiTextRef = useAsciiText({
    fadeInOnly: true,
    animationLoop: false,
    text: "Kris Poole's Terminal Portfolio",
  });
  
  return <pre ref={asciiTextRef} className='rainbow-text'></pre>;
});

export default AsciiTitle;