import Card from "../common/Card";
const notes = [
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
	{
		id: 3,
		text: `Discussed package upgrade options. Customer is considering the premium monthly grooming plan. Follow up in one week to check on their decision and offer any needed clarification, unless there is a change in course.`,
		time: "1 hours ago",
	},
	{
		id: 4,
		text: `Discussed package upgrade options. Customer is considering the premium monthly grooming plan. Follow up in one week to check on their decision and offer any needed clarification, unless there is a change in course.`,
		time: "1 hours ago",
	},
	{
		id: 5,
		text: `Discussed package upgrade options. Customer is considering the premium monthly grooming plan. Follow up in one week to check on their decision and offer any needed clarification, unless there is a change in course.`,
		time: "1 hours ago",
	},
];

const Notes = () => {
	return (
		<Card heading="Notes">
			<ul className="notes-wrapper">
				{notes.map((note) => (
					<li className="note" key={note.id}>
						{note?.text}
						<div className="time">{note?.time}</div>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default Notes;
