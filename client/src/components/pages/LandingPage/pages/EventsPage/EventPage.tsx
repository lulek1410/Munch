import "./EventPage.css";

import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DOMPurify from "dompurify";

import ArrowButton from "../../common/ArrowButton";
import { useTranslation } from "react-i18next";
import { EventsContext } from "../../context/EventsContext";

const EventPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();
	const events = useContext(EventsContext);
	const data = events.find((event) => {
		return event._id === id;
	});

	return (
		<main id="event-page">
			{data ? (
				<>
					<h1>{t(`${data.name}`, { ns: "Wydarzenia" })}</h1>
					<p className="post-date aditional-text">
						posted:&nbsp;
						{data.postDate}
					</p>
					<div
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(
								i18n.language === "pl" ? data.description : data.translation
							),
						}}
					/>
					<img className="event-img" src={data.link} alt="event logo" />
					<p className="aditional-text">
						<strong>
							<i>
								{t(`${data.name}-dodatkowe`, {
									ns: "Wydarzenia",
									defaultValue: `${data.aditionalInfo}`,
								})}
							</i>
						</strong>
					</p>
					<ArrowButton
						handleClick={() => {
							navigate("/contact");
						}}
						text={t("contact", { ns: "Site" })}
					/>
				</>
			) : (
				<div></div>
			)}
		</main>
	);
};

export default EventPage;
