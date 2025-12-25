import { useState } from "react";
import Card from "../common/Card";
import FormBuilder from "../Form/FormBuilder";
import { formdata } from "../../utils/configs/helper";
import getIcon from '../common/icons';

const Contact = () => {
	const [userData, setUserData] = useState(formdata);
	return (
		<Card heading="Contact Details">
			<div className="summary-wrapper">
				<div className="profile">
					<div className="profile-icon">
						<img src={userData?.profileImgUrl} alt="Profile" />
						<span className="name">{userData?.firstName} {userData?.lastName}</span>
					</div>
					<a href="#" className="call-icon">
						{getIcon("phone")}
					</a>
				</div>

				<div className="details-wrapper">
					<div className="owner-details">
						<div className="label">Owner</div>
						<div className="value">{userData?.owner}</div>
					</div>
					<div className="followers-details">
						<div className="label">Followers</div>
						<div className="value">{userData?.followers?.join(", ")}</div>
					</div>
				</div>

				<div className="tags-wrapper">
					<div className="label">Tags</div>

					<ul>
						{
							userData?.tags?.map((tag, index) => (
								<li key={index}>{tag}</li>
							))
						}
					</ul>
				</div>
			</div>
			<FormBuilder />
		</Card>
	);
};

export default Contact;
