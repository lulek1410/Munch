import {
	render,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import Layout from "../Layout";
import axios from "axios";
import { parseMenuItems } from "../common/ParseMenuItems";
import { renderWithBrowserRouter } from "../__utils__/RenderWithRouter";

jest.mock("axios");
jest.mock("../common/ParseMenuItems.ts");

describe("Layout tests", () => {
	const axiosGetMock = jest.mocked(axios.get);

	const dishes = {
		elements: [{ _id: "1", name: "dish1", price: "10", category: "category1" }],
		categories: [{ name: "category1", priority: 1 }],
	};
	const alcohol = {
		elements: [
			{ _id: "2", name: "alcohol1", price: "20", category: "category2" },
		],
		categories: [{ categories: [{ name: "category2", priority: 1 }] }],
	};
	const drinks = {
		elements: [{ _id: "3", name: "drink1", price: "5", category: "category3" }],
		categories: [{ categories: [{ name: "category3", priority: 1 }] }],
	};
	const softDrinks = {
		elements: [
			{ _id: "4", name: "softDrink1", price: "3", category: "category4" },
		],
		categories: [{ categories: [{ name: "category4", priority: 1 }] }],
	};
	const events = [
		{
			_id: "5",
			name: "event1",
			shortDescription: "shortDescription1",
			description: "description1",
			translation: "translation1",
			link: "link1",
			postDate: new Date().toISOString(),
		},
	];
	const contactInfo = {
		phoneNumber: "123456789",
		email: "email@example.com",
		adress: "adress1",
		facebook: "",
		instagram: "",
		tiktok: "",
		openingHours: [],
	};

	const peopleInfo = { title: "", description: "" };

	const expectFooterAndHeaderToDisplay = () => {
		expect(screen.getByRole("banner")).toBeInTheDocument();
		expect(screen.getByRole("contentinfo")).toBeInTheDocument();
	};

	beforeEach(() => {
		axiosGetMock.mockClear();
	});

	it("should display loading page while data is being fetched", async () => {
		axiosGetMock.mockResolvedValueOnce(new Promise(() => {}));
		render(<Layout />);
		expect(screen.getByTestId("loading")).toBeInTheDocument();
	});

	it("should fetch data from server and store it in state", async () => {
		axiosGetMock.mockResolvedValueOnce({
			data: {
				food: { dishes, alcohol, drinks, softDrinks },
				events,
				contactInfo: [contactInfo],
				peopleInfo: [peopleInfo],
			},
		});
		await renderWithBrowserRouter(<Layout />);
		expect(parseMenuItems).toBeCalledTimes(4);
		expect(parseMenuItems).toBeCalledWith(dishes.categories, dishes.elements);
		expect(parseMenuItems).toBeCalledWith(alcohol.categories, alcohol.elements);
		expect(parseMenuItems).toBeCalledWith(drinks.categories, drinks.elements);
		expect(parseMenuItems).toBeCalledWith(
			softDrinks.categories,
			softDrinks.elements
		);

		await waitForElementToBeRemoved(screen.queryByTestId("loading"));
		expectFooterAndHeaderToDisplay();
	});

	it("should load data from cache and store it in state", async () => {
		localStorage.setItem("dishes", JSON.stringify(dishes));
		localStorage.setItem("alcohol", JSON.stringify(alcohol));
		localStorage.setItem("drinks", JSON.stringify(drinks));
		localStorage.setItem("softDrinks", JSON.stringify(softDrinks));
		localStorage.setItem("events", JSON.stringify(events));
		localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
		localStorage.setItem("peopleInfo", JSON.stringify(peopleInfo));
		localStorage.setItem("lastUpdate", new Date().getDate().toString());
		await renderWithBrowserRouter(<Layout />);
		await waitForElementToBeRemoved(screen.queryByTestId("loading"));
		expectFooterAndHeaderToDisplay();
	});
});
