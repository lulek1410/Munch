import {
	fireEvent,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import loadImage from "../common/loadImage";
import restaurant from "./../../../../../assets/munch_bg.webp";
import { renderWithRouter } from "../../../__utils__/RenderWithRouter";
import userEvent from "@testing-library/user-event";

const mockInfiniteDishScroll = jest.fn();
jest.mock("../InfiniteDishScroll", () => () => {
	mockInfiniteDishScroll();
	return <div></div>;
});

const mockNewestEvents = jest.fn();
jest.mock("../../../common/EventsGrid", () => () => {
	mockNewestEvents();
	return <div></div>;
});

const mockUseClickRedirection = jest.fn();
const mockClickRedirection = jest.fn();
jest.mock("../../../common/hooks/useClickRedirection", () => (path: string) => {
	mockUseClickRedirection(path);
	return mockClickRedirection;
});

jest.mock("../common/loadImage");

describe("HomePage tests", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("should display loading page while images are being loaded", async () => {
		(loadImage as jest.Mock).mockResolvedValue(restaurant);
		renderWithRouter("/");
		const loadingElement = screen.getByTestId("loading");
		expect(loadingElement).toBeInTheDocument();
		expect(loadImage).toBeCalledTimes(1);
		expect(loadImage).toBeCalledWith(restaurant);
		await waitForElementToBeRemoved(loadingElement);
		const images = screen.getAllByRole("img");
		images.forEach((image) => {
			fireEvent.load(image);
		});
	});

	it("should render hero section with image and logo", async () => {
		(loadImage as jest.Mock).mockResolvedValue(restaurant);
		renderWithRouter("/");
		const image = await screen.findByAltText("restaurant interior");
		expect(screen.getByAltText("logo")).toBeInTheDocument();
		expect(image).toBeInTheDocument();
	});

	it("should render menu invitation with infinite dish scroll", async () => {
		(loadImage as jest.Mock).mockResolvedValue(restaurant);
		renderWithRouter("/");
		const btn = await screen.findByRole("button", { name: "menu-btn" });
		expect(btn).toBeInTheDocument();
		expect(mockInfiniteDishScroll).toBeCalledTimes(1);
	});

	it("should render newest events section", async () => {
		(loadImage as jest.Mock).mockResolvedValue(restaurant);
		renderWithRouter("/");
		await waitForElementToBeRemoved(screen.queryByTestId("loading"));
		expect(mockNewestEvents).toBeCalledTimes(1);
	});

	it("should redirect when menu button clicked", async () => {
		(loadImage as jest.Mock).mockResolvedValue(restaurant);
		renderWithRouter("/");
		expect(mockUseClickRedirection).toBeCalledTimes(1);
		expect(mockUseClickRedirection).toBeCalledWith("/menu");
		const btn = await screen.findByRole("button", { name: "menu-btn" });
		userEvent.click(btn);
		expect(mockClickRedirection).toBeCalledTimes(1);
	});
});
