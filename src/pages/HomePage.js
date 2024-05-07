import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import AsciiTitle from '../components/AsciiTitle';

const HomePage = () => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to My Portfolio Terminal! - Type 'help' to see a list of commands</TerminalOutput>
  ]);

  const Prompt = () => (
    <span>
      <span className="username">@krispoole.dev:</span>
      <span className="path">~ </span>
    </span>
  );

  // Define commands that the terminal can interpret
  const commands = {
    'help': () => (
      <TerminalOutput>
        Available Commands: <br />
        help - Display available commands <br />
        clear - Clear the terminal <br />
        about - Information about me <br />
        contact - Contact details <br />
        experience - Work experience <br />
        skills - List skills <br />
        linkedin - LinkedIn profile <br />
        github - GitHub profile

      </TerminalOutput>
    ),
    'clear': () => {
        // To clear the terminal, reset to just the welcome message or keep the title only
        setTerminalLineData([<TerminalOutput>Welcome to My Portfolio Terminal!</TerminalOutput>]);
        return null;
    },
    'about': () => (
      <TerminalOutput>
        Name: Kris Poole<br />
        Role: Software Engineer<br />
        Description: I am currently a software engineer at Boeing, where I work on developing and maintaining Spring Boot RESTful microservices for various aerospace projects. I have over nine years of engineering experience, spanning across different domains such as fintech, communications, and space launch systems.

My core competencies include Java, Spring Boot, JavaScript, React, MySQL, AWS, Splunk, Jenkins, and Databricks. I also have a strong background in web development, API development, data extraction, containerization, and distributed systems. I enjoy solving complex problems, delivering high-quality software solutions, and collaborating with diverse teams. My goal is to leverage my skills and expertise to create innovative and impactful products that contribute to Boeing's mission of connecting, protecting, exploring, and inspiring the world.
      </TerminalOutput>
    ),
    'contact': () => (
      <TerminalOutput>
        Email: john.doe@example.com<br />
        Phone: 123-456-7890
      </TerminalOutput>
    ),
    'experience': () => (
      <TerminalOutput>
        Previous Roles:<br />
        - Senior Developer at TechCorp (2020-2024)<br />
        - Junior Developer at DevStartup (2018-2020)
      </TerminalOutput>
    ),
    'skills': () => (
      <TerminalOutput>
        Skills:<br />
        - JavaScript<br />
        - React<br />
        - Node.js<br />
        - Cloud Services
      </TerminalOutput>
    ),
    'linkedin': () => (
      <TerminalOutput>
        LinkedIn: <a href="https://www.linkedin.com/in/krispoole" target="_blank">https://www.linkedin.com/in/krispoole</a>
      </TerminalOutput>
    ),
    'github': () => (
      <TerminalOutput>
        GitHub: <a href="https://github.com/krispoole" target="_blank">https://github.com/krispoole</a>
      </TerminalOutput>
    )
  };

  // Function to handle terminal input
  const handleInput = (input) => {
    const commandFunction = commands[input];
    const output = commandFunction ? commandFunction() : <span className="text-response">Command not found - Type 'help' to see a list of commands</span>;
    // Include the user's input as part of the terminal output
    setTerminalLineData(prev => [
      ...prev,
      <TerminalOutput><Prompt />{input}</TerminalOutput>,
      output
    ]);
  };

  return (
    <div className="container">
      <Terminal
        colorMode={ColorMode.Dark}
        onInput={handleInput}
      >
        <AsciiTitle />
        {terminalLineData.map((line, index) => (
          <React.Fragment key={index}>
            {line}
          </React.Fragment>
        ))}
      </Terminal>
    </div>
  );
};

export default HomePage;
