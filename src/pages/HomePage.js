import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import AsciiTitle from '../components/AsciiTitle';

const HomePage = () => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to My Portfolio Terminal!</TerminalOutput>
  ]);

  // Define commands that the terminal can interpret
  const commands = {
    'help': () => {
        return `
        Available Commands: \n
        help - Display available commands
        clear - Clear the terminal
        about - Information about me
        contact - Contact details
        experience - Work experience
        skills - List skills
        linkedin - LinkedIn profile
        github - GitHub profile
        `;
    },
    'clear': () => {
        return null; // This will be handled by the terminal to clear the output
    },
    'about': () => {
        return `Name: John Doe\nRole: Software Developer\nDescription: Passionate developer with a focus on Web Development and Cloud Computing.`;
    },
    'contact': () => {
        return `Email: john.doe@example.com\nPhone: 123-456-7890`;
    },
    'experience': () => {
        return `Previous Roles:\n- Senior Developer at TechCorp (2020-2024)\n- Junior Developer at DevStartup (2018-2020)`;
    },
    'skills': () => {
        return `Skills:\n- JavaScript\n- React\n- Node.js\n- Cloud Services`;
    },
    'linkedin': () => {
        return `LinkedIn: [Visit LinkedIn](https://www.linkedin.com/in/johndoe)`;
    },
    'github': () => {
        return `GitHub: [Visit GitHub](https://github.com/johndoe)`;
    }
};

  // Function to handle terminal input
  const handleInput = (input) => {
    const commandFunction = commands[input];
    const output = commandFunction ? commandFunction() : <TerminalOutput>Command not found</TerminalOutput>;
    setTerminalLineData(prev => [...prev, output]);
  };

  return (
    <div className="container">
      <Terminal
        colorMode={ColorMode.Dark}
        onInput={handleInput}
      >
        <AsciiTitle />
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default HomePage;
