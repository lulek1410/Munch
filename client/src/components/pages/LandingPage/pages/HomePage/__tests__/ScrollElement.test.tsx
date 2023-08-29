import { render, screen } from "@testing-library/react";
import { DishesContext } from "../../../context/DishesContext";
import ScrollElement from "../ScrollElement";

describe("ScrollElement tests", () => {
	let animation = "fade-in";
	const makeDishesList = (size: number) => {
		const result = [];
		for (let i = 0; i < size; ++i) {
			result.push({
				_id: `${i}`,
				name: `Dish ${i}`,
				variants: `Variant ${i}`,
				description: `Description ${i}`,
				price: `${i}0`,
				category: `Category ${i}`,
				link: `image${i}.jpg`,
			});
		}
		return result;
	};
	const dishes = makeDishesList(9);

	it("should render a list of images with the correct props and styles", () => {
		render(
			<DishesContext.Provider value={dishes}>
				<ScrollElement animation={animation} />
			</DishesContext.Provider>
		);

		const images = screen.getAllByAltText("dish");

		expect(images[0]).toHaveAttribute("src", "image0.jpg");
		expect(images[0]).toHaveClass("scroll-image");
		expect(images[1]).toHaveAttribute("src", "image1.jpg");
		expect(images[1]).toHaveClass("scroll-image");
		expect(images[2]).toHaveAttribute("src", "image2.jpg");
		expect(images[2]).toHaveClass("scroll-image");
		expect(images[3]).toHaveAttribute("src", "image3.jpg");
		expect(images[3]).toHaveClass("scroll-image");
		expect(images[4]).toHaveAttribute("src", "image4.jpg");
		expect(images[4]).toHaveClass("scroll-image");
		expect(images[5]).toHaveAttribute("src", "image5.jpg");
		expect(images[5]).toHaveClass("scroll-image");
		expect(images[6]).toHaveAttribute("src", "image6.jpg");
		expect(images[6]).toHaveClass("scroll-image");
		expect(images[7]).toHaveAttribute("src", "image7.jpg");
		expect(images[7]).toHaveClass("scroll-image");
		expect(images[8]).toHaveAttribute("src", "image8.jpg");
		expect(images[8]).toHaveClass("scroll-image");
	});

	it("should not render images if there is less than 9 dishes with links", () => {
		const dishes = makeDishesList(8);
		render(
			<DishesContext.Provider value={dishes}>
				<ScrollElement animation={animation} />
			</DishesContext.Provider>
		);

		const listItemElements = screen.queryAllByRole("listitem");
		expect(listItemElements).toHaveLength(0);
	});

	it('should render images with the correct animation based on the "animation" prop', () => {
		animation = "primary";
		render(
			<DishesContext.Provider value={dishes}>
				<ScrollElement animation={animation} />
			</DishesContext.Provider>
		);

		const ulElement = screen.getByRole("list");

		expect(ulElement).toHaveClass("scroll-element primary");
	});
});
