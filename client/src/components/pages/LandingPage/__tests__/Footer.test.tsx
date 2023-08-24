import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { BrowserRouter } from "react-router-dom";
import { ContactInfoContext } from "../context/ContactInfoContext";
import {renderWithBrowserRouter} from "../__utils__/RenderWithRouter";

describe("Footer tests", () => {
	it("should display logo and navigation items with proper redirection routes", () => {
		renderWithBrowserRouter(<Footer />);

		expect(screen.getByLabelText("logo")).toHaveAttribute("href", "/");
		expect(screen.getByText("menu")).toHaveAttribute("href", "/menu");
		expect(screen.getByText("order")).toHaveAttribute("href", "/order");
		expect(screen.getByText("people")).toHaveAttribute("href", "/people");
		expect(screen.getByText("events")).toHaveAttribute("href", "/news");
		expect(screen.getByText("contact")).toHaveAttribute("href", "/contact");
	});

	it("should display contact information", () => {
		const phoneNumber = "123123123";
		const email = "sample@mail.com";

		render(
			<ContactInfoContext.Provider
				value={{
					adress: "adress",
					openingHours: [{ day: "PN-PT", time: "8:00-18:00" }],
					phoneNumber: phoneNumber,
					email: email,
					tiktok: "",
					facebook: "",
					instagram: "",
				}}
			>
				<BrowserRouter>
					<Footer />
				</BrowserRouter>
			</ContactInfoContext.Provider>
		);

		expect(screen.getByText("Münch")).toBeInTheDocument();
		expect(screen.getByText("adress")).toBeInTheDocument();
		expect(screen.getByText("PN-PT 8:00-18:00")).toBeInTheDocument();
		expect(screen.getByText("reserve-table")).toBeInTheDocument();
		expect(screen.getByText(phoneNumber)).toBeInTheDocument();
		expect(screen.getByText(email)).toBeInTheDocument();
	});

	it("should display socials links", () => {
		const tiktok = "tiktok";
		const facebook = "facebook";
		const instagram = "instagram";

		render(
			<ContactInfoContext.Provider
				value={{
					adress: "",
					openingHours: [],
					phoneNumber: "",
					email: "",
					tiktok: tiktok,
					facebook: facebook,
					instagram: instagram,
				}}
			>
				<BrowserRouter>
					<Footer />
				</BrowserRouter>
			</ContactInfoContext.Provider>
		);

		expect(screen.getByLabelText("Facebook")).toHaveAttribute("href", facebook);
		expect(screen.getByLabelText("Instagram")).toHaveAttribute(
			"href",
			instagram
		);
		expect(screen.getByLabelText("Tiktok")).toHaveAttribute("href", tiktok);
	});
});
