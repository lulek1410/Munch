import { screen, render } from "@testing-library/react";
import { EventsContext } from "../../../context/EventsContext";
import EventPage from "../EventPage";
import ArrowButtonProps from "../../../common/interfaces/ArrowButtonProps";
import { useTranslation } from "react-i18next";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useParams: () => ({ id: "123" }),
}));

const mockUseClickRedirection = jest.fn();
const mockClickRedirection = jest.fn();
jest.mock("../../../common/hooks/useClickRedirection", () => (path: string) => {
	mockUseClickRedirection(path);
	return mockClickRedirection;
});

const mockArrowButton = jest.fn();
jest.mock("../../../common/ArrowButton", () => (props: ArrowButtonProps) => {
	mockArrowButton(props);
	return <div></div>;
});

jest.mock("react-i18next", () => ({
	useTranslation: jest.fn(),
}));
const useTranslationSpy = useTranslation as jest.Mock;
useTranslationSpy.mockReturnValue({
	t: (key: string) => key,
	i18n: { language: "en" },
});

describe("EventPage tests", () => {
	const events = [
		{
			_id: "123",
			name: "Event",
			shortDescription: "Short 1",
			description: "<p>Event Description</p>",
			translation: "<p>Translated Description</p>",
			aditionalInfo: "Aditional Info",
			link: "image1.png",
			postDate: "2022-01-01",
		},
	];

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("shoululd display all data without error", () => {
		render(
			<EventsContext.Provider value={events}>
				<EventPage />
			</EventsContext.Provider>
		);

		expect(screen.getByText("Event")).toBeInTheDocument();
		expect(screen.getByText("posted: 2022-01-01")).toBeInTheDocument();
		expect(screen.getByText("Translated Description")).toBeInTheDocument();
		expect(screen.getByAltText("event logo")).toHaveAttribute(
			"src",
			"image1.png"
		);
		expect(screen.getByText("Event-dodatkowe")).toBeInTheDocument();
		expect(mockArrowButton).toBeCalledTimes(1);
		expect(mockArrowButton).toBeCalledWith({
			handleClick: mockClickRedirection,
			text: "contact",
		});
	});

	it("should render event details with pl translations", () => {
		useTranslationSpy.mockReturnValueOnce({
			i18n: { language: "pl" },
			t: (key: string) => key,
		});
		render(
			<EventsContext.Provider value={events}>
				<EventPage />
			</EventsContext.Provider>
		);
		expect(screen.getByText("Event Description")).toBeInTheDocument();
	});

	it("should render placeholder info when data not found", () => {
		render(
			<EventsContext.Provider value={[]}>
				<EventPage />
			</EventsContext.Provider>
		);

		expect(screen.getByText("Nie znaleziono wydarzenia")).toBeInTheDocument();
	});
});
