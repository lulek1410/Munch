import { render, screen, waitFor } from "@testing-library/react";
import JoinUsDialog from "../JoinUsDialog";
import { ContactInfoContext } from "../../../context/ContactInfoContext";
import userEvent from "@testing-library/user-event";

describe("JoinUsDialog", () => {
	it("should open dialog when open prop is true", () => {
		render(<JoinUsDialog open={true} onClose={() => {}} />);
		const dialog = screen.getByRole("dialog");
		expect(dialog).toBeInTheDocument();
	});

	it("should not open dialog when open prop is false", () => {
		render(<JoinUsDialog open={false} onClose={() => {}} />);
		const dialog = screen.queryByRole("dialog");
		expect(dialog).not.toBeInTheDocument();
	});

	it("should set dialog email link to contactInfo.email", () => {
		const contactInfo = {
			phoneNumber: "123456789",
			email: "test@example.com",
			adress: "adress1",
			facebook: "",
			instagram: "",
			tiktok: "",
			openingHours: [],
		};

		render(
			<ContactInfoContext.Provider value={contactInfo}>
				<JoinUsDialog open={true} onClose={() => {}} />
			</ContactInfoContext.Provider>
		);
		const emailLink = screen.getByRole("link");
		expect(emailLink).toHaveAttribute("href", "mailto:test@example.com");
	});

	it("should call onClose function when close button is clicked", async () => {
		const onClose = jest.fn();
		render(<JoinUsDialog open={true} onClose={onClose} />);
		const closeButton = screen.getByRole("button", { name: "close" });
		userEvent.click(closeButton);

		await waitFor(() => {
			expect(onClose).toHaveBeenCalledTimes(1);
		});
	});
});
