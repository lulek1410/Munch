import React from "react";

import { Grid } from "@mui/material";

import { Event } from "./interfaces/Event";
import EventCard from "./EventCard";

interface EventGridElementsProps {
	events: Array<Event>;
}

const EventsGridElements = ({ events }: EventGridElementsProps) => {
	return (
		<>
			{events.map(({ link, name, shortDescription, _id, postDate }: Event) => (
				<Grid item lg={4} md={6} xs={12} key={_id}>
					<EventCard
						image={link}
						title={name}
						shortdescription={shortDescription}
						postDate={postDate}
						id={_id}
					/>
				</Grid>
			))}
		</>
	);
};

export default EventsGridElements;
