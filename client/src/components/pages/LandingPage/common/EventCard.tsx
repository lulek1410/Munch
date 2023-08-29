import "./EventCard.css";

import StyledDivider from "./StyledDivider";
import { useTranslation } from "react-i18next";
import EventCardProps from "./interfaces/EventCardProps";
import { useNavigate } from "react-router-dom";

const EventCard = ({
	image,
	title,
	shortDescription,
	postDate,
	id,
}: EventCardProps) => {
	const navigate = useNavigate();
	const { t } = useTranslation("Wydarzenia");

	return (
		<div
			className="event-card"
			onClick={() => navigate(`/news/${id}`)}
			data-testid="eventCard"
		>
			<img src={image} alt="event" className="event-image" />
			<div className="event-title parent-centered-container glass centered-container">
				<h3>{t(`${title}`)}</h3>
			</div>
			<section className="glass short-description">
				<h2>{t(`${title}`)}</h2>
				<StyledDivider />
				<p>{t(`${title}-krótki`, { defaultValue: `${shortDescription}` })}</p>
			</section>
			<div className="glass post-date">{`posted: ${postDate}`}</div>
		</div>
	);
};

export default EventCard;
