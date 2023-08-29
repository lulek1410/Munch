import { render } from "@testing-library/react";
import InfiniteDishScroll from "../InfiniteDishScroll";
import ScrollElementProps from "../common/interfaces/ScrollElementProps";

const mockScrollElement = jest.fn();
jest.mock("../ScrollElement", () => (props: ScrollElementProps) => {
	mockScrollElement(props);
	return <div></div>;
});

describe("InfiniteDishScroll tests", () => {
	it("renders with 4 ScrollElements", () => {
		render(<InfiniteDishScroll />);
		expect(mockScrollElement).toHaveBeenCalledTimes(4);
		expect(mockScrollElement).toHaveBeenNthCalledWith(1, {
			animation: "primary",
		});
		expect(mockScrollElement).toHaveBeenNthCalledWith(2, {
			animation: "secondary",
		});
		expect(mockScrollElement).toHaveBeenNthCalledWith(3, {
			animation: "primary-reversed",
		});
		expect(mockScrollElement).toHaveBeenNthCalledWith(4, {
			animation: "secondary-reversed",
		});
	});
});
