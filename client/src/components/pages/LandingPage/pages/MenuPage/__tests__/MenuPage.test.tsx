import { screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "../../../__utils__/RenderWithRouter";
import userEvent from "@testing-library/user-event";
import MenuItemsListProps from "../common/interfaces/MenuItemsListProps";
import { SoftDrinksContext } from "../../../context/SoftDrinksContext";

const mockMenuItemsList = jest.fn();
jest.mock("../MenuItemsList", () => (props: MenuItemsListProps) => {
	mockMenuItemsList(props);
	return <div></div>;
});

describe("MenuPage tests", () => {
	it("should render the main menu page with navigation links and title", () => {
		renderWithRouter("/menu");
		expect(screen.getAllByRole("link").length).toBe(4);
		expect(screen.getByRole("heading", { name: "menu" })).toBeInTheDocument();
	});

	it("should display the navigation links in the correct order", () => {
		renderWithRouter("/menu");
		const navLinks = screen.getAllByRole("link");
		expect(navLinks[0]).toHaveAttribute("href", "/menu");
		expect(navLinks[1]).toHaveAttribute("href", "/menu/softs");
		expect(navLinks[2]).toHaveAttribute("href", "/menu/drinks");
		expect(navLinks[3]).toHaveAttribute("href", "/menu/alcohol");
	});

	it("should render the corresponding menu page when a navigation link is clicked", async () => {
		renderWithRouter("/menu");
		const navLinks = screen.getAllByRole("link");
		userEvent.click(navLinks[1]);
		await waitFor(() => {
			expect(mockMenuItemsList).toHaveBeenCalledWith(
				expect.objectContaining({
					context: SoftDrinksContext,
					namespace: "Napoje",
				})
			);
		});
	});
});
