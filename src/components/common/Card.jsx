

const Card = ({ heading, children }) => {
	return (
		<div className="card">
			<h2 className="card-heading">{heading}</h2>
				{children}
		</div>
	);
};

export default Card;
