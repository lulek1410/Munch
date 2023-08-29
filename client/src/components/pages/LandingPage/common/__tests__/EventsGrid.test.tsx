import { screen, render } from "@testing-library/react";
import EventCardProps from "../interfaces/EventCardProps";
import { EventsContext } from "../../context/EventsContext";
import EventsGrid from "../EventsGrid";

const mockEventCard = jest.fn();
jest.mock("../EventCard", () => (props: EventCardProps) => {
	mockEventCard(props);
	return <div></div>;
});

describe("EventsGrid tests", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	const events = [
		{
			_id: "1",
			name: "Event1",
			shortDescription: "Short1",
			description: "Description1",
			translation: "Translation1",
			link: "link1",
			postDate: "01-01-2020",
		},
		{
			_id: "2",
			name: "Event2",
			shortDescription: "Short2",
			description: "Description2",
			translation: "Translation2",
			link: "link2",
			postDate: "02-01-2020",
		},
		{
			_id: "3",
			name: "Event3",
			shortDescription: "Short3",
			description: "Description3",
			translation: "Translation3",
			link: "link3",
			postDate: "03-01-2020",
		},
	];

	it("should render with numeric spacing", () => {
		render(<EventsGrid spacing={1} />);
	});

	it("should render with string spacing", () => {
		render(<EventsGrid spacing="1vw" />);
	});

	it("should render all events", () => {
		render(
			<EventsContext.Provider value={events}>
				<EventsGrid spacing="1vw" />
			</EventsContext.Provider>
		);
		expect(mockEventCard).toBeCalledTimes(3);
		expect(mockEventCard).toHaveBeenNthCalledWith(1, {
			image: "link1",
			title: "Event1",
			shortDescription: "Short1",
			postDate: "01-01-2020",
			id: "1",
		});
		expect(mockEventCard).toHaveBeenNthCalledWith(2, {
			image: "link2",
			title: "Event2",
			shortDescription: "Short2",
			postDate: "02-01-2020",
			id: "2",
		});
		expect(mockEventCard).toHaveBeenNthCalledWith(3, {
			image: "link3",
			title: "Event3",
			shortDescription: "Short3",
			postDate: "03-01-2020",
			id: "3",
		});
	});

	it("should render only specified number of events", () => {
		render(
			<EventsContext.Provider value={events}>
				<EventsGrid spacing="1vw" numOfEvents={1} />
			</EventsContext.Provider>
		);
		expect(mockEventCard).toBeCalledTimes(1);
		expect(mockEventCard).toBeCalledWith({
			image: "link1",
			title: "Event1",
			shortDescription: "Short1",
			postDate: "01-01-2020",
			id: "1",
		});
	});
});
