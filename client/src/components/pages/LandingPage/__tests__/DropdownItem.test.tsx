import { screen } from "@testing-library/react";
import DropdownItem from "../DropdownItem";
import { renderWithBrowserRouter } from "../__utils__/RenderWithRouter";

describe("DropdownItem tests", () => {
	let props = {
		name: "Test",
		link: "/test",
		dropdown: [
			{ name: "Item 1", link: "/item1" },
			{ name: "Item 2", link: "/item2" },
		],
	};

	it("should render with name, link and dropdown props", () => {
		renderWithBrowserRouter(<DropdownItem {...props} />);
		const mainLink = screen.getByRole("link", { name: "Test" });
		expect(mainLink).toBeInTheDocument();
		const dropdownLinks = screen.getAllByRole("link", { name: /Item [1-2]/ });
		expect(dropdownLinks).toHaveLength(2);
	});

	it("should render without dropdown list if dropdown prop is empty", () => {
		const props = {
			name: "Test",
			link: "/test",
			dropdown: [],
		};
		renderWithBrowserRouter(<DropdownItem {...props} />);
		const dropdownList = screen.queryByRole("list");
		expect(dropdownList).not.toBeInTheDocument();
	});

	it("should render with correct link for each dropdown item", () => {
		renderWithBrowserRouter(<DropdownItem {...props} />);
		const dropdownLinks = screen.getAllByRole("link", { name: /Item [1-2]/ });
		expect(dropdownLinks[0]).toHaveAttribute("href", "/item1");
		expect(dropdownLinks[1]).toHaveAttribute("href", "/item2");
	});
});
