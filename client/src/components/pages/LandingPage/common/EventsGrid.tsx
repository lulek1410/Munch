import React, { useContext } from "react";

import { Grid } from "@mui/material";

import { Event } from "./interfaces/Event";
import EventCard from "./EventCard";
import EventsGridProps from "./interfaces/EventsGridProps";
import { EventsContext } from "../context/EventsContext";

const EventsGrid = ({ numOfEvents, spacing }: EventsGridProps) => {
	const events = useContext(EventsContext);
	const eventsToDisplay = numOfEvents ? events.slice(0, numOfEvents) : events;
	return (
		<Grid container spacing={spacing}>
			{eventsToDisplay.map(
				({ link, name, shortDescription, _id, postDate }: Event) => (
					<Grid item lg={4} md={6} xs={12} key={_id}>
						<EventCard
							image={link}
							title={name}
							shortDescription={shortDescription}
							postDate={postDate}
							id={_id}
						/>
					</Grid>
				)
			)}
		</Grid>
	);
};

export default EventsGrid;
