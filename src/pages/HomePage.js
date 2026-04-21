import React, { useState, useEffect } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import AsciiTitle from '../components/AsciiTitle';

const isTouchDevice = 'ontouchstart' in window;

const welcomeMessage = (
  <TerminalOutput>
    Welcome!{isTouchDevice ? ' Tap here to type.' : ''} Type <strong>'help'</strong> for available commands.
  </TerminalOutput>
);

const HomePage = () => {
  const [terminalLineData, setTerminalLineData] = useState([welcomeMessage]);

  useEffect(() => {
    // Prevent the keyboard from popping up immediately on mobile
    if (isTouchDevice) {
      const input = document.querySelector('.terminal-hidden-input');
      if (input) input.blur();
    }
  }, []);

  const Prompt = () => (
    <span>
      <span className="username">@krispoole.dev:</span>
      <span className="path">~ </span>
    </span>
  );

  const commands = {
    help: () => (
      <TerminalOutput>
        Available commands:<br />
        &nbsp; about      – About me<br />
        &nbsp; experience – Work history<br />
        &nbsp; skills     – Tech skills<br />
        &nbsp; contact    – Get in touch<br />
        &nbsp; linkedin   – LinkedIn profile<br />
        &nbsp; github     – GitHub profile<br />
        &nbsp; clear      – Clear terminal
      </TerminalOutput>
    ),
    about: () => (
      <TerminalOutput>
        Name:  Kris Poole<br />
        Role:  Software Engineer<br />
        <br />
        9+ years of experience across fintech, communications,<br />
        and space launch systems. Currently building Spring Boot<br />
        microservices for aerospace projects at Boeing.<br />
        <br />
        Strong background in API development, distributed<br />
        systems, containerization, and cloud infrastructure.
      </TerminalOutput>
    ),
    experience: () => (
      <TerminalOutput>
        Work History:<br />
        <br />
        Boeing – Software Engineer (current)<br />
        &nbsp; Spring Boot microservices for aerospace systems<br />
        &nbsp; Java, AWS, Databricks, Jenkins, Splunk<br />
        <br />
        9+ years total across fintech, communications,<br />
        and space launch systems.<br />
        <br />
        Type 'linkedin' for the full work history.
      </TerminalOutput>
    ),
    skills: () => (
      <TerminalOutput>
        Languages:   Java, JavaScript, SQL<br />
        Frameworks:  Spring Boot, React, Node.js<br />
        Cloud:       AWS (EC2, S3, Lambda, RDS)<br />
        Data:        MySQL, Databricks, Splunk<br />
        DevOps:      Jenkins, Docker, Git<br />
        Other:       REST APIs, Microservices, Agile
      </TerminalOutput>
    ),
    contact: () => (
      <TerminalOutput>
        LinkedIn: linkedin.com/in/krispoole<br />
        GitHub:   github.com/krispoole<br />
        <br />
        Type 'linkedin' or 'github' for direct links.
      </TerminalOutput>
    ),
    linkedin: () => (
      <TerminalOutput>
        {'→ '}
        <a
          href="https://www.linkedin.com/in/krispoole"
          target="_blank"
          rel="noreferrer"
        >
          https://www.linkedin.com/in/krispoole
        </a>
      </TerminalOutput>
    ),
    github: () => (
      <TerminalOutput>
        {'→ '}
        <a
          href="https://github.com/krispoole"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/krispoole
        </a>
      </TerminalOutput>
    ),
  };

  const handleInput = (input) => {
    const trimmed = input.trim().toLowerCase();

    if (trimmed === 'clear') {
      setTerminalLineData([welcomeMessage]);
      return;
    }

    const commandFn = commands[trimmed];
    const output = commandFn ? (
      commandFn()
    ) : (
      <TerminalOutput>
        <span className="cmd-not-found">
          '{trimmed}' not found — type 'help' for options
        </span>
      </TerminalOutput>
    );

    setTerminalLineData((prev) => [
      ...prev,
      <TerminalOutput>
        <Prompt />
        {input}
      </TerminalOutput>,
      output,
    ]);
  };

  return (
    <div className="container">
      <Terminal
        name="krispoole.dev"
        colorMode={ColorMode.Dark}
        onInput={handleInput}
      >
        <AsciiTitle />
        {terminalLineData.map((line, index) => (
          <React.Fragment key={index}>{line}</React.Fragment>
        ))}
      </Terminal>
    </div>
  );
};

export default HomePage;
