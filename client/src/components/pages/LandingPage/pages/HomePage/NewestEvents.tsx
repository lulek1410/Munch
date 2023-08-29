import ArrowButton from "../../common/ArrowButton";
import { useTranslation } from "react-i18next";
import EventsGrid from "../../common/EventsGrid";
import useClickRedirection from "../../common/hooks/useClickRedirection";

const NewestEvents = () => {
	const { t } = useTranslation();
	const navigate = useClickRedirection("/news");

	return (
		<section id="events" className="screen-width">
			<div id="events-title" className="speced-betwean-container">
				<h1>{t("news")}</h1>
				<ArrowButton handleClick={navigate} text={t("events-btn")} />
			</div>
			<EventsGrid spacing={1} numOfEvents={3} />
		</section>
	);
};

export default NewestEvents;
