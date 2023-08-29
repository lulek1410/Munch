import { render, screen } from "@testing-library/react";
import OrderPage from "../OrderPage";

describe("OrderPage tests", () => {
	it("renders placeholder information", () => {
		render(<OrderPage />);
		expect(
			screen.getByRole("heading", { name: "Dostawy dostępne wkrótce..." })
		).toBeInTheDocument();
	});
});
