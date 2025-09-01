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
			title: "Getting Started",
			content: [
				"Welcome to my documentation section. Here you'll find guides, tutorials, and technical documentation.",
				"This section contains various resources to help you understand my work and development process."
			]
		},
		{
			title: "Terminal Commands",
			content: [
				"The interactive terminal on the homepage supports various commands:",
				"• help - Display all available commands",
				"• about - Learn more about me",
				"• skills - View technical skills",
				"• projects - See featured projects",
				"• contact - Get contact information",
				"• clear - Clear terminal output"
			]
		},
		{
			title: "Technologies Used",
			content: [
				"This portfolio is built using modern web technologies:",
				"• React.js for the frontend framework",
				"• CSS3 for styling and animations",
				"• React Router for navigation",
				"• FontAwesome for icons",
				"• Responsive design principles"
			]
		},
		{
			title: "Project Structure",
			content: [
				"The portfolio follows a clean, modular structure:",
				"• Components are organized by feature",
				"• Styles are co-located with components",
				"• Data is centralized in the data directory",
				"• Pages represent different routes"
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
