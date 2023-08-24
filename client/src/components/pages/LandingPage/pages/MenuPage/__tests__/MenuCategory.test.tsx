import { render, screen } from "@testing-library/react";
import MenuCategory from "../MenuCategory";
import MenuItemCardProps from "../common/interfaces/MenuItemCardProps";
import { MenuItem } from "../../../common/interfaces/MenuItem";

const mockMenuItemCard = jest.fn();
jest.mock("../MenuItemCard", () => (props: MenuItemCardProps) => {
	mockMenuItemCard(props);
	return <div></div>;
});

describe("MenuCategory tests", () => {
	it("should render the correct name, description, price and image for each menu item", async () => {
		const name = ["Dish 1", "Dish 2"];
		const description = ["Description 1", "Description 2"];
		const price = ["10", "20"];
		const category = "Category 1";
		const link = ["image1.jpg", "image2.jpg"];
		const data = [
			{
				_id: "1",
				name: name[0],
				description: description[0],
				price: price[0],
				category: category,
				link: link[0],
			},
			{
				_id: "2",
				name: name[1],
				description: description[1],
				price: price[1],
				category: category,
				link: link[1],
			},
		];
		const namespace = "translation";
		await render(<MenuCategory data={data} namespace={namespace} />);
		expect(mockMenuItemCard).toBeCalledTimes(2);
		expect(mockMenuItemCard).toHaveBeenNthCalledWith(1, {
			name: name[0],
			description: `${category}-${name[0]}`,
			price: price[0],
			image: link[0],
		});
		expect(mockMenuItemCard).toHaveBeenNthCalledWith(2, {
			name: name[1],
			description: `${category}-${name[1]}`,
			price: price[1],
			image: link[1],
		});
		expect(screen.getByRole("heading", { name: category })).toBeInTheDocument();
	});

	it("should handle an empty data array", () => {
		const data = [] as MenuItem[];
		const namespace = "translation";
		render(<MenuCategory data={data} namespace={namespace} />);
		expect(screen.getByRole("heading", { name: "" })).toBeInTheDocument();
	});
});
