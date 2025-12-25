import Card from "../common/Card";
import { notes } from "../../utils/configs/helper";

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
