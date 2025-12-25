import getIcon from "./icons";

const WhatsappCard = ({ message }) => {
	return (
		<div className="whatsapp-wrapper">
			<div className="profile-wrapper">
				<img className="user-p" src={message?.profileImgUrl} alt={message?.sender} />
				<span className="wa-p">
					{getIcon("whatsapp")}
				</span>
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
