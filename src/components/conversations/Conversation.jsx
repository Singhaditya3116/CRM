import { useState } from "react";
import EmailCard from "../common/EmailCard";
import WhatsappCard from "../common/WhatsappCard";
import Card from "../common/Card";
import Button from "../common/Button";
import Input from "../common/Input";
import { conversations } from "../../utils/configs/helper";

const Conversations = () => {
	const [newMessage, setNewMessage] = useState("");
	const [messageType, setMessageType] = useState("email");

	function handleSendMessage() {
		if (newMessage.trim() === "") return;

		const newConversation = {
			id: Date.now(),
			type: messageType,
			profileImgUrl: "https://dummyimage.com/100x100/000/fff", // Dummy profile image
			sender: "Agent", // Placeholder sender name
			receiver: "Me",
			time: new Date().toLocaleTimeString(),
			message: newMessage,
		};

		conversations.messages.push(newConversation); // Append the new message
		setNewMessage(""); // Clear the input field
	}

	return (
		<>
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

			<div className="conv-action">
				<Input
					label="Message"
					name="newMessage"
					type="text"
					value={newMessage}
					onChange={(value) => setNewMessage(value)}
					clearOnSubmit={newMessage === ""} // Clear input after submission
				/>
				<select
					value={messageType}
					onChange={(e) => setMessageType(e.target.value)}
				>
					<option value="email">Email</option>
					<option value="whatsapp">WhatsApp</option>
				</select>
				<Button
					text="Send"
					onClick={handleSendMessage}
					className="send-message-btn"
				/>
			</div>
		</>
	);
};

export default Conversations;
