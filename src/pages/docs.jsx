import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/docs.css";

const Docs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about") || SEO[0];

	const docsContent = [
		{
			title: "JavaScript Interview Questions",
			content: [
				"1. What is the difference between let, const, and var?",
				"2. Explain hoisting in JavaScript.",
				"3. What are closures and how do they work?",
				"4. What is the difference between == and === operators?",
				"5. Explain the concept of 'this' keyword in JavaScript.",
				"6. What are arrow functions and how do they differ from regular functions?",
				"7. What is event bubbling and event capturing?",
				"8. Explain promises and async/await in JavaScript.",
				"9. What is the difference between null and undefined?",
				"10. How does prototypal inheritance work in JavaScript?"
			]
		},
		{
			title: "Advanced JavaScript Concepts",
			content: [
				"11. What are higher-order functions?",
				"12. Explain the concept of currying in JavaScript.",
				"13. What is debouncing and throttling?",
				"14. How does the JavaScript event loop work?",
				"15. What are generators and iterators?",
				"16. Explain the difference between call, apply, and bind methods.",
				"17. What is the difference between synchronous and asynchronous programming?",
				"18. How do you handle errors in JavaScript?",
				"19. What are modules in JavaScript (ES6)?",
				"20. Explain the concept of memoization."
			]
		},
		{
			title: "React.js Questions",
			content: [
				"21. What is React and why is it used?",
				"22. Explain the difference between functional and class components.",
				"23. What are React hooks and why were they introduced?",
				"24. What is the virtual DOM and how does it work?",
				"25. Explain the component lifecycle methods in React.",
				"26. What is state management in React?",
				"27. What are props and how do you pass data between components?",
				"28. What is JSX and how is it different from HTML?",
				"29. Explain the concept of keys in React lists.",
				"30. What are controlled and uncontrolled components?"
			]
		},
		{
			title: "Web Development Fundamentals",
			content: [
				"31. What is the difference between HTTP and HTTPS?",
				"32. Explain the concept of RESTful APIs.",
				"33. What are the different HTTP methods and their uses?",
				"34. What is CORS and how do you handle it?",
				"35. Explain the difference between cookies, localStorage, and sessionStorage.",
				"36. What is responsive web design?",
				"37. What are CSS preprocessors and their benefits?",
				"38. Explain the box model in CSS.",
				"39. What is the difference between inline, block, and inline-block elements?",
				"40. How do you optimize website performance?"
			]
		}
	];

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Docs | ${INFO.main.title}`}</title>
				<meta name="description" content="Documentation and guides for my portfolio and projects." />
				<meta name="keywords" content="documentation, guides, tutorials, web development" />
			</Helmet>

			<div className="page-content">
				<NavBar active="docs" />
				<div className="content-wrapper">
					<div className="docs-logo-container">
						<div className="docs-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="docs-container">
						<div className="docs-main">
							<div className="title docs-title">
								Documentation
							</div>
							<div className="subtitle docs-subtitle">
								Guides, tutorials, and technical documentation
							</div>

							<div className="docs-content">
								{docsContent.map((section, index) => (
									<div key={index} className="docs-section">
										<h2 className="docs-section-title">{section.title}</h2>
										<div className="docs-section-content">
											{section.content.map((paragraph, pIndex) => (
												<p key={pIndex} className="docs-paragraph">
													{paragraph}
												</p>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Docs;
