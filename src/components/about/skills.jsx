import React from "react";
import INFO from "../../data/user";
import "./styles/skills.css";

const Skills = () => {
	return (
		<div className="skills">
			<div className="skills-container">
				<div className="title skills-title">Skills & Technologies</div>
				<div className="skills-grid">
					{INFO.skills.map((skill, index) => (
						<div key={index} className="skill-card">
							<div className="skill-icon">
								<img src={skill.logo} alt={skill.name} />
							</div>
							<div className="skill-name">{skill.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
