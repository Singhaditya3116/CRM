const WhatsappCard = ({ message }) => {
	return (
		<div className="whatsapp-wrapper">
			<div className="profile-wrapper">
				<img className="user-p" src={message?.profileImgUrl} alt={message?.sender} />
				<img className="wa-p" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="Whatsapp Icon" />
			</div>
			<div className="whatsapp-body">
				<div className="name">{message?.sender}</div>
				<div className="message">{message?.message}</div>
				<div className="time">{message?.time}</div>
			</div>
		</div>
	);
};

export default WhatsappCard;
