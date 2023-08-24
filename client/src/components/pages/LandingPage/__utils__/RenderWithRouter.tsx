import { render } from "@testing-library/react";
import {
	BrowserRouter,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import stubRoutesConfig from "./StubRoutesConfig";
import { ReactElement } from "react";

export const renderWithRouter = (route = "/") => {
	window.history.pushState({}, "Test page", route);
	return {
		user: render(
			<RouterProvider router={createBrowserRouter(stubRoutesConfig)} />
		),
	};
};

export const renderWithBrowserRouter = (ui: ReactElement) => {
	return {
		user: render(ui, { wrapper: BrowserRouter }),
	};
};
