import { useState } from "react";
import DynamicField from "./DynamicField";
import Card from "../common/Card";
import { schema, formdata } from "../../utils/configs/helper";

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
