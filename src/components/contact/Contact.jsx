import Card from "../common/Card";
import FormBuilder from "../Form/FormBuilder";

const Contact = () => {
	return (
		<Card heading="Contact Details">
			<div className="summary-wrapper">
				<div className="profile">
					<div className="profile-icon">
						<img src="https://cyber.comolho.com/static/img/avatar.png" alt="Profile" />
						<span className="name">Olivia John</span>
					</div>
					<a href="#" className="call-icon">
						Call
					</a>
				</div>

				<div className="details-wrapper">
					<div className="owner-details">
						<div className="label">Owner</div>
						<div className="value">Devon Lane</div>
					</div>
					<div className="followers-details">
						<div className="label">Followers</div>
						<div className="value">Devon Lane</div>
					</div>
				</div>

				<div className="tags-wrapper">
					<div className="label">Tags</div>

					<ul>
						<li>Shared Contact</li>
						<li>VIPt</li>
						<li>Hello</li>
					</ul>
				</div>
			</div>
			<FormBuilder />
		</Card>
	);
};

export default Contact;
