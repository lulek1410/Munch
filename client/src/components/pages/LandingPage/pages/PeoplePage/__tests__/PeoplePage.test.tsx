import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "../../../__utils__/RenderWithRouter";

describe("PeoplePage tests", () => {
	describe("test display default view", () => {
		it("should display the join us button", () => {
			renderWithRouter("/people");
			const joinButton = screen.getByRole("button", { name: "join-us" });
			expect(joinButton).toBeInTheDocument();
		});

		it("should display the people bio information", () => {
			renderWithRouter("/people");
			const bioText = screen.getByText("about");
			expect(bioText).toBeInTheDocument();
		});
	});

	describe("test display dialog", () => {
		it("should open the join us dialog when the button is clicked", () => {
			renderWithRouter("/people");
			const joinButton = screen.getByRole("button", { name: "join-us" });
			fireEvent.click(joinButton);
			const dialog = screen.getByRole("dialog");
			expect(dialog).toBeInTheDocument();
		});

		it("should close the join us dialog when the close button is clicked", async () => {
			renderWithRouter("/people");
			const joinButton = screen.getByRole("button", { name: "join-us" });
			fireEvent.click(joinButton);
			const closeButton = screen.getByRole("button", { name: "close" });
			fireEvent.click(closeButton);
			await waitFor(() => {
				const dialog = screen.queryByRole("dialog");
				expect(dialog).not.toBeInTheDocument();
			});
		});
	});
});
