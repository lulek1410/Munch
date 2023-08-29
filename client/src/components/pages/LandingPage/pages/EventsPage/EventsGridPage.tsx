import "./EventsGridPage.css";

import { ScrollRestoration } from "react-router-dom";

import EventsGrid from "../../common/EventsGrid";
import { useTranslation } from "react-i18next";

const EventsGridPage = () => {
	const { t } = useTranslation();

	return (
		<main>
			<ScrollRestoration />
			<section id="events-grid">
				<h1>{t("events")}</h1>
				<EventsGrid spacing="1vw" />
			</section>
		</main>
	);
};

export default EventsGridPage;
