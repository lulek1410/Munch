import { render, screen } from "@testing-library/react";
import LoadingPage from "../LoadingPage";

describe("LoadingPage tests", () => {
	it("should render an element with loader class", () => {
		render(<LoadingPage />);
		expect(screen.getByTestId("loading")).toBeInTheDocument();
	});
});
