import React, { useState, useEffect, useRef } from "react";
import "./styles/terminal.css";

const Terminal = () => {
	const [input, setInput] = useState("");
	const [history, setHistory] = useState([
		"Type 'help' for all available commands."
	]);
	const [currentDirectory, setCurrentDirectory] = useState("~");
	const inputRef = useRef(null);
	const terminalRef = useRef(null);

	const commands = {
		help: () => [
			"Available commands:",
			"  help     - Show this help message",
			"  about    - Learn more about me",
			"  skills   - View my technical skills",
			"  projects - See my projects",
			"  contact  - Get my contact information",
			"  clear    - Clear the terminal",
			"  whoami   - Display current user",
			"  ls       - List directory contents",
			"  pwd      - Print working directory",
			"  terminal - Navigate to terminal section"
		],
		about: () => [
			"Hi! I'm a passionate developer who loves creating amazing web experiences.",
			"I specialize in modern web technologies and enjoy solving complex problems.",
			"Welcome to my interactive portfolio terminal!"
		],
		skills: () => [
			"Technical Skills:",
			"• Frontend: React, JavaScript, HTML5, CSS3, TypeScript",
			"• Backend: Node.js, Python, Express.js",
			"• Database: MongoDB, PostgreSQL, MySQL",
			"• Tools: Git, Docker, VS Code, Figma",
			"• Cloud: AWS, Netlify, Vercel"
		],
		projects: () => [
			"Featured Projects:",
			"• Portfolio Website - React-based interactive portfolio",
			"• E-commerce Platform - Full-stack web application",
			"• Task Management App - Productivity tool with real-time updates",
			"• Weather Dashboard - API-integrated weather application",
			"Type 'cd projects' to explore more details!"
		],
		contact: () => [
			"Get in touch:",
			"• Email: your.email@example.com",
			"• GitHub: github.com/yourusername",
			"• LinkedIn: linkedin.com/in/yourprofile",
			"• Twitter: @yourusername"
		],
		terminal: () => {
			const terminalElement = document.getElementById('terminal');
			if (terminalElement) {
				terminalElement.scrollIntoView({ behavior: 'smooth' });
			}
			return ["Navigating to terminal section..."];
		},
		clear: () => {
			setHistory([]);
			return [];
		}
	};

	const handleCommand = (cmd) => {
		const trimmedCmd = cmd.trim().toLowerCase();
		
		if (trimmedCmd === "") return;

		const newHistory = [...history, `$sudo> ${cmd}`];
		
		if (commands[trimmedCmd]) {
			const output = commands[trimmedCmd]();
			if (trimmedCmd !== "clear") {
				setHistory([...newHistory, ...output]);
			}
		} else {
			setHistory([...newHistory, `Command not found: ${cmd}. Type 'help' for available commands.`]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleCommand(input);
		setInput("");
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSubmit(e);
		}
	};

	useEffect(() => {
		if (terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
		}
	}, [history]);

	const focusInput = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<div className="terminal-container" onClick={focusInput}>
			<div className="terminal-header">
				<div className="terminal-buttons">
					<div className="terminal-button close"></div>
					<div className="terminal-button minimize"></div>
					<div className="terminal-button maximize"></div>
				</div>
				<div className="terminal-title">Terminal</div>
			</div>
			<div className="terminal-body" ref={terminalRef}>
				<div className="terminal-content">
					<div className="terminal-input-line">
						<span className="terminal-prompt">$sudo&gt; </span>
						<input
							ref={inputRef}
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyPress={handleKeyPress}
							className="terminal-input"
							autoFocus
							spellCheck={false}
						/>
						<span className="terminal-cursor">|</span>
					</div>
					{history.map((line, index) => (
						<div key={index} className="terminal-line">
							{line}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Terminal;
