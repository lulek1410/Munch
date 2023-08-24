import { useContext } from "react";

import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { EventsContext } from "../../context/EventsContext";
import ArrowButton from "../../common/ArrowButton";
import EventsGridElements from "../../common/EventsGridElements";
import { useTranslation } from "react-i18next";

const NewestEvents = () => {
	const { t } = useTranslation();
	const events = useContext(EventsContext);
	const navigate = useNavigate();

	return (
		<section id="events" className="screen-width">
			<div id="events-title" className="speced-betwean-container">
				<h1>{t("news")}</h1>
				<ArrowButton
					handleClick={() => {
						navigate("/news");
					}}
					text={t("events-btn")}
				/>
			</div>
			<Grid container spacing={1}>
				<EventsGridElements events={events.slice(0, 3)} />
			</Grid>
		</section>
	);
};

export default NewestEvents;
