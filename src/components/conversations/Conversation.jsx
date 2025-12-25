import EmailCard from "../common/EmailCard";
import WhatsappCard from "../common/WhatsappCard";
import Card from "../common/Card";
import { conversations } from "../../utils/configs/helper";

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
