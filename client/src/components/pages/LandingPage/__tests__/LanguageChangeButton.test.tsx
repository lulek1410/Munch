import {
	fireEvent,
	render,
	screen,
} from "@testing-library/react";
import LanguageChangeButton from "../LanguageChangeButton";
import { useTranslation } from "react-i18next";

jest.mock("react-i18next", () => ({
	useTranslation: jest.fn(),
}));

const useTranslationSpy = useTranslation as jest.Mock;
const i18n = {
	language: "pl",
	changeLanguage: jest.fn((lng) => undefined),
};
useTranslationSpy.mockReturnValue({ i18n });

describe("LanguageChangeButton tests", () => {
	it("should change language when button is clicked", () => {
		render(<LanguageChangeButton />);
		const button = screen.getByRole("button");
		fireEvent.click(button);
		expect(i18n.changeLanguage).toBeCalledWith("en");
	});
});
