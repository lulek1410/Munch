import { render, screen } from "@testing-library/react";
import MenuItemsList from "../MenuItemsList";
import { DishesContext } from "../../../context/DishesContext";

describe("MenuItemsList tests", () => {
	it("should render all menu items for each category", () => {
		const elements = [
			{
				_id: "1",
				name: "item1",
				description: "desc1",
				price: "1.00",
				category: "category1",
			},
			{
				_id: "2",
				name: "item2",
				description: "desc2",
				price: "2.00",
				category: "category1",
			},
			{
				_id: "3",
				name: "item3",
				description: "desc3",
				price: "3.00",
				category: "category2",
			},
		];
		render(
			<DishesContext.Provider value={elements}>
				<MenuItemsList context={DishesContext} namespace="test" />
			</DishesContext.Provider>
		);
		const items = screen.getAllByRole("listitem");
		expect(items).toHaveLength(3);
		expect(items[0]).toHaveTextContent("item1");
		expect(items[1]).toHaveTextContent("item2");
		expect(items[2]).toHaveTextContent("item3");
	});
});
