import React from "react";
import INFO from "../../data/user";
import "./styles/academics.css";

const Academics = () => {
	return (
		<div className="academics">
			<div className="academics-container">
				<div className="title academics-title">Academic Performance</div>
				<div className="academics-grid">
					<div className="academic-card">
						<div className="academic-level">B.Tech</div>
						<div className="academic-score">{INFO.academics.btech}</div>
						<div className="academic-label">Current CGPA</div>
					</div>
					<div className="academic-card">
						<div className="academic-level">Class 12th</div>
						<div className="academic-score">{INFO.academics.twelfth}</div>
						<div className="academic-label">Percentage</div>
					</div>
					<div className="academic-card">
						<div className="academic-level">Class 10th</div>
						<div className="academic-score">{INFO.academics.tenth}</div>
						<div className="academic-label">Percentage</div>
					</div>
				</div>
				
				<div className="achievements-section">
					<div className="subtitle achievements-subtitle">Achievements & Certifications</div>
					<div className="achievements-list">
						{INFO.achievements.map((achievement, index) => (
							<div key={index} className="achievement-item">
								<div className="achievement-bullet">✓</div>
								<div className="achievement-text">{achievement}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Academics;
