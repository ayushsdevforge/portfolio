import React, { useState, useEffect } from "react";
import "./styles/dynamicHeading.css";

const DynamicHeading = ({ text }) => {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	const titles = [
		"Aspiring Software Engineer",
		"Full-Stack Developer",
		"Problem Solver",
		"Tech Enthusiast"
	];

	useEffect(() => {
		const currentTitle = titles[currentIndex];
		
		const timeout = setTimeout(() => {
			if (!isDeleting) {
				if (displayText.length < currentTitle.length) {
					setDisplayText(currentTitle.slice(0, displayText.length + 1));
				} else {
					setTimeout(() => setIsDeleting(true), 2000);
				}
			} else {
				if (displayText.length > 0) {
					setDisplayText(displayText.slice(0, -1));
				} else {
					setIsDeleting(false);
					setCurrentIndex((prev) => (prev + 1) % titles.length);
				}
			}
		}, isDeleting ? 50 : 100);

		return () => clearTimeout(timeout);
	}, [displayText, currentIndex, isDeleting, titles]);

	return (
		<div className="dynamic-heading">
			<span className="static-text">Ayush Kumar - </span>
			<span className="dynamic-text">
				{displayText}
				<span className="cursor">|</span>
			</span>
		</div>
	);
};

export default DynamicHeading;
