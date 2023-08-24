import "./EventsGridPage.css";

import { useContext } from "react";
import { ScrollRestoration } from "react-router-dom";

import { Grid } from "@mui/material";

import { EventsContext } from "../../context/EventsContext";
import EventsGridElements from "../../common/EventsGridElements";
import { useTranslation } from "react-i18next";

const EventsGridPage = () => {
	const { t } = useTranslation();
	const events = useContext(EventsContext);
	return (
		<main>
			<ScrollRestoration />
			<section id="events-grid">
				<h1>{t("events")}</h1>
				<Grid container spacing="1vw">
					<EventsGridElements events={events} />
				</Grid>
			</section>
		</main>
	);
};

export default EventsGridPage;
