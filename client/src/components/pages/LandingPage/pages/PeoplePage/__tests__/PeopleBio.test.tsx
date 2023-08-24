import { render, screen } from "@testing-library/react";
import PeopleBio from "../PeopleBio";
import { PeopleInfoContext } from "../../../context/PeopleInfoContext";

describe("PeopleBio tests", () => {
	it("should display image and description from context", () => {
		const context = {
			description: "Test description",
			link: "https://test.com/test.jpg",
		};
		render(
			<PeopleInfoContext.Provider value={context}>
				<PeopleBio />
			</PeopleInfoContext.Provider>
		);
		expect(screen.getByAltText("people")).toHaveAttribute(
			"src",
			"https://test.com/test.jpg"
		);
		expect(screen.getByRole("heading", { name: "about" })).toBeInTheDocument();
		expect(screen.getByText("o nas")).toBeInTheDocument();
	});
});
