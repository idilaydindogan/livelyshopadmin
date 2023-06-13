import React from "react";

const Button = ({ title, type }) => {
	return (
		<div>
			<button
				className="bg-primary-body text-primary-beige px-4 py-1 rounded-md"
				type={type}
			>
				{title}
			</button>
		</div>
	);
};

export default Button;
