import Notes from "./components/notes/Notes";
import Contact from "./components/contact/Contact";
import Conversations from "./components/conversations/Conversation";
import layout from "./utils/configs/layout.json";
import "./App.css";

const componentMap = {
	Contact: Contact,
	Conversations: Conversations,
	Notes: Notes,
};

const groupedComponents = layout.reduce(
	(acc, item) => {
		acc[item.position].push({ ...item, Component: componentMap[item.component] });
		return acc;
	},
	{ left: [], center: [], right: [] }
);

const renderSection = (name) => (
	<section className={name}>
		{groupedComponents[name].map(({ id, Component }) => (
			<Component key={id} />
		))}
	</section>
);

function App() {
	return (
		<>
			<main className="main">
				<div className="main-inner-wrap">
					<section className="section-1">
						{renderSection("left")}
						{renderSection("center")}
						{renderSection("right")}
					</section>
				</div>
				<footer>Footer</footer>
			</main>
		</>
	);
}

export default App;
