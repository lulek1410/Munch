import { screen, render } from "@testing-library/react";
import ArrowButton from "../ArrowButton";
import userEvent from "@testing-library/user-event";

const mockArrowIcon = jest.fn();
jest.mock("@mui/icons-material/ArrowForwardIos", () => () => {
	mockArrowIcon();
	return <></>;
});

describe("EventsGrid tests", () => {
	const text = "ArrowButton";
	const mockHandleClick = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("should render without error", () => {
		render(<ArrowButton handleClick={mockHandleClick} text="" />);
	});

	it("should render a button with provided text and an icon", () => {
		render(<ArrowButton handleClick={mockHandleClick} text={text} />);
		expect(screen.getByRole("button")).toBeInTheDocument();
		expect(screen.getByText(text)).toBeInTheDocument();
		expect(mockArrowIcon).toBeCalledTimes(1);
	});

	it("should call provided function on button click", () => {
		render(<ArrowButton handleClick={mockHandleClick} text={text} />);
		userEvent.click(screen.getByRole("button"));
		expect(mockHandleClick).toBeCalledTimes(1);
	});
});
