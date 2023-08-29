import { screen, render } from "@testing-library/react";
import EventCard from "../EventCard";
import userEvent from "@testing-library/user-event";

const mockStyledDivider = jest.fn();
jest.mock("../StyledDivider", () => () => {
	mockStyledDivider();
	return <div></div>;
});

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockNavigate,
}));

describe("EventsGrid tests", () => {
	const image = "image";
	const title = "title";
	const shortDescription = "short";
	const postDate = "01-01-2022";
	const id = "1";

	const renderWithProps = () => {
		render(
			<EventCard
				image={image}
				title={title}
				shortDescription={shortDescription}
				postDate={postDate}
				id={id}
			/>
		);
	};

	it("should render without error", () => {
		renderWithProps();
	});

	it("should display event image", () => {
		renderWithProps();
		expect(screen.getByAltText("event")).toBeInTheDocument();
	});

	it("should display provided event title", () => {
		renderWithProps();
		const headings = screen.getAllByRole("heading", { name: title });

		const h3Heading = headings.find((heading) => heading.tagName === "H3");
		expect(h3Heading).toBeInTheDocument();
	});

	it("should display description", () => {
		mockStyledDivider.mockClear();
		renderWithProps();
		const headings = screen.getAllByRole("heading", { name: title });

		const h3Heading = headings.find((heading) => heading.tagName === "H2");
		expect(h3Heading).toBeInTheDocument();
		expect(mockStyledDivider).toBeCalledTimes(1);
		expect(screen.getByText("title-krótki")).toBeInTheDocument();
	});

	it("should display post date", () => {
		renderWithProps();
		expect(screen.getByText("posted: 01-01-2022")).toBeInTheDocument();
	});

	it("should redirect when clicked", () => {
		renderWithProps();
		const eventCard = screen.getByTestId("eventCard");
		userEvent.click(eventCard);
		expect(mockNavigate).toBeCalledTimes(1);
		expect(mockNavigate).toBeCalledWith(`/news/${id}`);
	});
});
