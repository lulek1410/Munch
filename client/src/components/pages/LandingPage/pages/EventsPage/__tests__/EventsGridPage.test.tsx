import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../__utils__/RenderWithRouter";
import EventsGridProps from "../../../common/interfaces/EventsGridProps";

const mockEventsGrid = jest.fn();
jest.mock("../../../common/EventsGrid", () => (props: EventsGridProps) => {
	mockEventsGrid(props);
	return <div></div>;
});

describe("EventsGridPage tests", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("should display heading", () => {
		renderWithRouter("/news");
		expect(screen.getByRole("heading", { name: "events" })).toBeInTheDocument();
	});

	it("should display events grid", () => {
		renderWithRouter("/news");
		expect(mockEventsGrid).toBeCalledTimes(1);
		expect(mockEventsGrid).toBeCalledWith({ spacing: "1vw" });
	});
});
