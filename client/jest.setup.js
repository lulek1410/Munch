import { enableFetchMocks } from "jest-fetch-mock";
import "@testing-library/jest-dom";
enableFetchMocks();

jest.mock("react-i18next", () => ({
	useTranslation: () => {
		return {
			t: (str) => str,
			i18n: {
				changeLanguage: () => new Promise(() => {}),
			},
		};
	},
}));

Object.defineProperty(global.self, "crypto", {
	value: {
		getRandomValues: (arr) => crypto.randomBytes(arr.length),
	},
});
global.crypto.subtle = {};

window.scrollTo = jest.fn();
