import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { useAsciiText } from 'react-ascii-text';

const HomePage = () => {

  function AsciiTitle() {
    const asciiTextRef = useAsciiText({
      fadeInOnly: true,
      animationLoop: false,
      text: "Kris Poole's Terminal Portfolio",
    });
  
    return <pre ref={asciiTextRef} className='rainbow-text'></pre>;
  }

  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to My Portfolio Terminal!</TerminalOutput>
  ]);

  // Define commands that the terminal can interpret
  const commands = {
    about: "This is a terminal-based portfolio created using React.",
    projects: "List of projects will go here...",
    contact: "Contact me via email: example@example.com"
  };


  return (
    <div className="container">
      <Terminal
        colorMode={ColorMode.Dark}
        onInput={input => {
          // Handle commands here
          const output = commands[input] || "Command not found";
          setTerminalLineData([...terminalLineData, <TerminalOutput>{output}</TerminalOutput>]);
        }}
      >
        <AsciiTitle />

        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default HomePage;