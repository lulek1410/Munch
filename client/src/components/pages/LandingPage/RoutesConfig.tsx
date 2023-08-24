import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import PeoplePage from "./pages/PeoplePage/PeoplePage";
import EventsGridPage from "./pages/EventsPage/EventsGridPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import EventPage from "./pages/EventsPage/EventPage";
import AdminPage from "../AdminPage/AdminPage";
import Layout from "./Layout";
import MenuItemsList from "./pages/MenuPage/MenuItemsList";
import { DishesContext } from "./context/DishesContext";
import { AlcoholsContext } from "./context/AlcoholsContext";
import { DrinksContext } from "./context/DrinksContext";
import { SoftDrinksContext } from "./context/SoftDrinksContext";

const routesConfig = [
	{
		path: "/admin/*",
		element: <AdminPage />,
	},
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/menu",
				element: <MenuPage />,
				children: [
					{
						path: "/menu",
						element: (
							<MenuItemsList context={DishesContext} namespace="Jedzenie" />
						),
					},
					{
						path: "/menu/softs",
						element: (
							<MenuItemsList context={SoftDrinksContext} namespace="Napoje" />
						),
					},
					{
						path: "/menu/drinks",
						element: (
							<MenuItemsList context={DrinksContext} namespace="Drinki" />
						),
					},
					{
						path: "/menu/alcohol",
						element: (
							<MenuItemsList context={AlcoholsContext} namespace="Alkohol" />
						),
					},
				],
			},
			{
				path: "/order",
				element: <OrderPage />,
			},
			{
				path: "/people",
				element: <PeoplePage />,
			},
			{
				path: "/news",
				element: <EventsGridPage />,
			},
			{
				path: "/news/:id",
				element: <EventPage />,
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
		],
	},
];

export default routesConfig;
