import getIcon from "./icons";

const EmailCard = ({message}) => {
	return (
		<div className="email-wrapper">
			<h2 className="agent-suggestion">{message?.actionSuggestion}</h2>
			<div className="email-card">
				<div className="title">
					<div className="title-left-wrap">
						<div className="profile">
							<img src={message?.profileImgUrl} alt={message?.sender} />
						</div>
						<div className="sender-details">
							<div className="from">{message?.sender}</div>
							<div className="from">To: {message?.receiver}</div>
						</div>
					</div>
					<div className="title-right-wrap">
						<div className="time">{message?.time}</div>
					</div>
				</div>

				<div className="email-body">
					<div className="message">{message?.message}</div>

					<a href={message?.trackLink} className="track-link">
						{message?.trackLinkText}
					</a>

					<button className="cta">
						<span className="icon">{getIcon("reply")}</span>
						<span className="text">{message?.mailReplyCta?.text}</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default EmailCard;
