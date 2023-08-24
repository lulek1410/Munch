import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routesConfig from "./RoutesConfig";

const LandingPage = () => {
	return <RouterProvider router={createBrowserRouter(routesConfig)} />;
};

export default LandingPage;
