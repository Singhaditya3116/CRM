import Card from "../common/Card";
import Button from "../common/Button";
import { notes } from "../../utils/configs/helper";

import { useState } from "react";

const Notes = () => {
	const [userNotes, setUserNotes] = useState(notes);
	const [inputValue, setInputValue] = useState("");

	function handleAddNote() {
		if (inputValue.trim() === "") return; // Prevent adding empty notes

		const newNote = {
			id: Date.now(), // Unique ID based on timestamp
			text: inputValue,
			time: new Date().toLocaleString(), // Current timestamp
		};

		setUserNotes((prevNotes) => [...prevNotes, newNote]); // Add new note to the list
		setInputValue(""); // Clear the input field
	}
	return (
		<>
			<Card heading="Notes">
				<ul className="notes-wrapper">
					{userNotes.map((note) => (
						<li className="note" key={note.id}>
							{note?.text}
							<div className="time">{note?.time}</div>
						</li>
					))}
				</ul>
			</Card>
			<div className="notes-action">
				<textarea placeholder="Add a note..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}></textarea>
				<Button text="Add Note" onClick={handleAddNote} className="add-note-btn" />
			</div>
		</>
	);
};

export default Notes;
