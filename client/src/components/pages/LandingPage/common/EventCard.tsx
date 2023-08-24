import "./EventCard.css";

import { useNavigate } from "react-router-dom";

import StyledDivider from "./StyledDivider";
import { useTranslation } from "react-i18next";

interface EventCardProps {
	image: string;
	title: string;
	shortdescription: string;
	postDate: string;
	id: string;
}

const EventCard = ({
	image,
	title,
	shortdescription,
	postDate,
	id,
}: EventCardProps) => {
	const navigate = useNavigate();
	const { t } = useTranslation("Wydarzenia");

	return (
		<div
			id="event-card"
			onClick={() => {
				navigate(`/news/${id}`);
			}}
		>
			<img src={image} alt="event" id="event-image" />
			<div
				id="event-title"
				className="parent-centered-container glass centered-container"
			>
				<h3>{t(`${title}`)}</h3>
			</div>
			<div id="short-description" className="glass">
				<h2>{t(`${title}`)}</h2>
				<StyledDivider />
				<p>{t(`${title}-krótki`, { defaultValue: `${shortdescription}` })}</p>
			</div>
			<div id="post-date" className="glass">
				posted: {postDate}
			</div>
		</div>
	);
};

export default EventCard;
