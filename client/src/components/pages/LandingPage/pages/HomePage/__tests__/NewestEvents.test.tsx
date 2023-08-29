import { render, screen } from "@testing-library/react";
import NewestEvents from "../NewestEvents";
import ArrowButtonProps from "../../../common/interfaces/ArrowButtonProps";
import EventsGridProps from "../../../common/interfaces/EventsGridProps";

const mockArrowButton = jest.fn();
jest.mock("../../../common/ArrowButton", () => (props: ArrowButtonProps) => {
	mockArrowButton(props);
	return <div></div>;
});

const mockEventsGrid = jest.fn();
jest.mock("../../../common/EventsGrid", () => (props: EventsGridProps) => {
	mockEventsGrid(props);
	return <div></div>;
});

const mockUseClickRedirection = jest.fn();
const mockClickRedirection = jest.fn();
jest.mock("../../../common/hooks/useClickRedirection", () => (path: string) => {
	mockUseClickRedirection(path);
	return mockClickRedirection;
});

describe("NewestEvents tests", () => {
	it("renders", () => {
		render(<NewestEvents></NewestEvents>);
		expect(mockUseClickRedirection).toBeCalledTimes(1);
		expect(screen.getByRole("heading", { name: "news" })).toBeInTheDocument();
		expect(mockArrowButton).toBeCalledTimes(1);
		expect(mockArrowButton).toBeCalledWith({
			handleClick: mockClickRedirection,
			text: "events-btn",
		});
		expect(mockEventsGrid).toBeCalledTimes(1);
		expect(mockEventsGrid).toBeCalledWith({
			spacing: 1,
			numOfEvents: 3,
		});
	});
});
