import { screen } from "@testing-library/react";
import Header from "../Header";
import { renderWithBrowserRouter } from "../__utils__/RenderWithRouter";

describe("Header tests", () => {
	it("should display logo and navigation items as links with proper redirection routes", () => {
		renderWithBrowserRouter(<Header />);

		expect(screen.getByLabelText("logo")).toHaveAttribute("href", "/");
		expect(screen.getByRole("link", { name: "menu" })).toHaveAttribute(
			"href",
			"/menu"
		);
		expect(screen.getByRole("link", { name: "order" })).toHaveAttribute(
			"href",
			"/order"
		);
		expect(screen.getByRole("link", { name: "people" })).toHaveAttribute(
			"href",
			"/people"
		);
		expect(screen.getByRole("link", { name: "events" })).toHaveAttribute(
			"href",
			"/news"
		);
		expect(screen.getByRole("link", { name: "contact" })).toHaveAttribute(
			"href",
			"/contact"
		);
	});
});
