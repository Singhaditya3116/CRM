import { useState } from "react";
import DynamicField from "./DynamicField";
import Card from "../common/Card";

const schema = [
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

const formdata = {
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
};

const FormBuilder = () => {
	const [formSchema, setFormSchema] = useState(schema);
	const [formData, setFormData] = useState(formdata);
	return (
		<div className="form">
			{formSchema.map((section) => {
				return (
					<Card heading={section?.name}>
						<div className="card-body">
							{section.fields.map((field) => {
								return <DynamicField key={field.name} field={field} formData={formData} setFormData={setFormData} />;
							})}
						</div>
					</Card>
				);
			})}
		</div>
	);
};

export default FormBuilder;
