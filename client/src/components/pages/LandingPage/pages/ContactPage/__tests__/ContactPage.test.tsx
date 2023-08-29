import { screen, render } from "@testing-library/react";
import ArrowButtonProps from "../../../common/interfaces/ArrowButtonProps";
import { useTranslation } from "react-i18next";
import ContactPage from "../ContactPage";
import { ContactInfoContext } from "../../../context/ContactInfoContext";

jest.mock("react-i18next", () => ({
	useTranslation: jest.fn(),
}));
const useTranslationSpy = useTranslation as jest.Mock;
useTranslationSpy.mockReturnValue({
	t: (key: string, options?: { ns?: string; defaultValue?: string }) => key,
});

describe("ContactPage tests", () => {
	const contactInfo = {
		adress: "Adress",
		phoneNumber: "123 123 123",
		email: "email@email.com",
		facebook: "facebook",
		instagram: "instagram",
		tiktok: "tiktok",
		openingHours: [
			{ day: "PN-PT", time: "12:00-23:00" },
			{ day: "SB", time: "15:00-2:00" },
			{ day: "ND", time: "zamknięte" },
		],
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("should render without crashing", () => {
		render(<ContactPage />);
	});

	it("should display the contact image", () => {
		render(<ContactPage />);
		const contactImage = screen.getByAltText("contact");
		expect(contactImage).toBeInTheDocument();
	});

	it("should display contact heading", () => {
		render(<ContactPage />);
		const contact = screen.getByRole("heading", { name: "contact" });
		expect(contact).toBeInTheDocument();
	});

	it("should display restaurant name", () => {
		render(<ContactPage />);
		const contact = screen.getByRole("heading", { name: "restaurant-w-name" });
		expect(contact).toBeInTheDocument();
	});

	it("should display restaurant adress", () => {
		render(
			<ContactInfoContext.Provider value={contactInfo}>
				<ContactPage />
			</ContactInfoContext.Provider>
		);
		const contact = screen.getByRole("heading", { name: "restaurant-w-name" });
		expect(contact).toBeInTheDocument();
	});

	it("should display restaurant opening hours", () => {
		render(
			<ContactInfoContext.Provider value={contactInfo}>
				<ContactPage />
			</ContactInfoContext.Provider>
		);
		expect(screen.getByText("PN-PT 12:00-23:00")).toBeInTheDocument();
		expect(screen.getByText("SB 15:00-2:00")).toBeInTheDocument();
		expect(screen.getByText("ND zamknięte")).toBeInTheDocument();
	});

	it("should display reservation heading", () => {
		render(<ContactPage />);
		expect(
			screen.getByRole("heading", { name: "reservations" })
		).toBeInTheDocument();
	});

	it("should display restaurant phone number", () => {
		render(
			<ContactInfoContext.Provider value={contactInfo}>
				<ContactPage />
			</ContactInfoContext.Provider>
		);
		expect(screen.getByText("tel.: +48 123 123 123")).toBeInTheDocument();
	});

	it("should display restaurant email", () => {
		render(
			<ContactInfoContext.Provider value={contactInfo}>
				<ContactPage />
			</ContactInfoContext.Provider>
		);
		expect(screen.getByText("email@email.com")).toBeInTheDocument();
	});
});
