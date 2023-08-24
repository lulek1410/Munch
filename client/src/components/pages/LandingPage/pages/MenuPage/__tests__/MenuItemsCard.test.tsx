import { render, screen } from "@testing-library/react";
import MenuItemCard from "../MenuItemCard";

describe("MenuItemsCard tests", () => {
	it("should render the component with required props", () => {
		render(<MenuItemCard name="Pizza" price="20" />);
		expect(screen.getByRole("article")).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: "Pizza" })).toBeInTheDocument();
		expect(screen.getByText("20zł")).toBeInTheDocument();
	});

	it("should render the component with all props", () => {
		render(
			<MenuItemCard
				image="pizza.jpg"
				name="Pizza"
				price="20"
				description="Delicious pizza"
			/>
		);
		expect(screen.getByRole("article")).toBeInTheDocument();
		expect(screen.getByAltText("dish")).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: "Pizza" })).toBeInTheDocument();
		expect(screen.getByText("20zł")).toBeInTheDocument();
		expect(screen.getByText("Delicious pizza")).toBeInTheDocument();
	});
});
