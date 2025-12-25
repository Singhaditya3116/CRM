import EmailCard from "../common/EmailCard";
import WhatsappCard from "../common/WhatsappCard";
import Card from "../common/Card";

const conversations = {
	title: "Conversations",
	messages: [
		{
			id: 1,
			type: "email",
			profileImgUrl: `https://cyber.comolho.com/static/img/avatar.png`,
			sender: "Olivia John",
			receiver: "Me",
			time: "10:30 AM",
			message: `Hey John,\n
			You Order has reached.\n
			Your Urban Wellness LLP order has arrived in your city. Click the button below to track your order in real-time. Arriving on Tuesday, November 19th.`,
			actionSuggestion: `Set up a new time to follow up on the mail chain issue that we talked about earlier.`,
			trackLink: "#",
			trackLinkText: "Track Your Order",
			mailReplyCta: {
				icon: "➤",
				text: "Reply",
			},
		},
		{
			id: 2,
			type: "whatsapp",
			profileImgUrl: `https://cyber.comolho.com/static/img/avatar.png`,
			sender: "Olivia John",
			receiver: "Me",
			time: "11:44 AM",
			message: `Hello John, how are you doing?`,
		},
	],
};

const Conversations = () => {
	return (
		<Card heading={conversations?.title}>
			{conversations.messages.map((message) => {
				if (message.type === "email") {
					return <EmailCard key={message.id} message={message} />;
				}

				if (message.type === "whatsapp") {
					return <WhatsappCard key={message.id} message={message} />;
				}
				return null;
			})}
		</Card>
	);
};

export default Conversations;
