
export const schema = [
	{
		id: 1,
		name: "Contact",
		fields: [
			{ label: "First Name", type: "text", name: "firstName" },
			{ label: "Last Name", type: "text", name: "lastName" },
			{ label: "Phone Number", type: "tel", name: "phone" },
			{ label: "Email", type: "email", name: "email" },
			{ label: "Address", type: "text", name: "address" },
		],
	},
	{
		id: 2,
		name: "Additional Info",
		fields: [
			{ label: "Business Name", type: "text", name: "businessName" },
			{ label: "Street Address", type: "text", name: "streetAddress" },
			{ label: "City", type: "text", name: "city" },
			{ label: "Country", type: "text", name: "country" },
		],
	},
];


export const formdata = {
	firstName: "Olivia",
	lastName: "John",
	phone: "5551234567",
	email: "olivia.perry@example.com",
	address: "123 Maple Street, Springfield, IL 62704. USA.",
	businessName: "ABC Corp",
	streetAddress: "123 Main Street",
	city: "Springfield",
	country: "United States",
	owner: "Devon Lane",
	followers: ["A", "B"],
	tags: ["Shared Contact", "VIP"],
	profileImgUrl:`https://cyber.comolho.com/static/img/avatar.png`,
};


export const conversations = {
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


export const notes = [
	{
		id: 1,
		text: `@Aaron Site Inspection completed.
		Heavy moss buildup on north side, moderate algae staining. Customer very satisfied with quote presentation. Chose Premium package. Payment processed via credit card. Mentioned neighbor also needs service.`,
		time: "3 hours ago",
	},
	{
		id: 2,
		text: `Customer mentioned that his pet has anxiety issues during grooming. Requested a specific time slot with less crowd. Make sure to allocate a calm handler for the session.`,
		time: "2 hours ago",
	},

];