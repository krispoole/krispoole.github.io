import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

const HomePage = () => {
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
        name="My Portfolio Terminal"
        colorMode={ColorMode.Dark}
        onInput={input => {
          // Handle commands here
          const output = commands[input] || "Command not found";
          setTerminalLineData([...terminalLineData, <TerminalOutput>{output}</TerminalOutput>]);
        }}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default HomePage;