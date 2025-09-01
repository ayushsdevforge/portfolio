import React from "react";
import "./styles/glassCard.css";

const GlassCard = ({ children, className = "", hover = true }) => {
	return (
		<div className={`glass-card ${hover ? 'glass-card-hover' : ''} ${className}`}>
			{children}
		</div>
	);
};

export default GlassCard;
