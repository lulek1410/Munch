import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import axios from "axios";

import Footer from "./Footer";
import Header from "./Header";

import { DishesContext } from "./context/DishesContext";
import { EventsContext } from "./context/EventsContext";
import { AlcoholsContext } from "./context/AlcoholsContext";
import { DrinksContext } from "./context/DrinksContext";
import { SoftDrinksContext } from "./context/SoftDrinksContext";

import { MenuItem } from "./common/interfaces/MenuItem";
import { Event } from "./common/interfaces/Event";
import { ContactInfoContext } from "./context/ContactInfoContext";
import { ContactInfo } from "./common/interfaces/ContactInfo";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { AnimatePresence, motion } from "framer-motion";
import { PeopleInfo } from "./common/interfaces/PeopleInfo";
import { PeopleInfoContext } from "./context/PeopleInfoContext";
import { parseMenuItems } from "./common/ParseMenuItems";

interface Food {
	[key: string]: MenuItem[];
	dishes: MenuItem[];
	alcohol: MenuItem[];
	drinks: MenuItem[];
	softDrinks: MenuItem[];
}

const Layout = () => {
	const [dishes, setDishes] = useState([] as MenuItem[]);
	const [alcohol, setAlcohol] = useState([] as MenuItem[]);
	const [drinks, setDrinks] = useState([] as MenuItem[]);
	const [softDrinks, setSoftDrinks] = useState([] as MenuItem[]);
	const [events, setEvents] = useState([] as Event[]);
	const [contactInfo, setContactInfo] = useState({} as ContactInfo);
	const [peopleInfo, setPeopleInfo] = useState({} as PeopleInfo);
	const [isLoading, setIsLoading] = useState(true);

	const fetchAll = useCallback(async () => {
		try {
			const resp = await axios.get("/all");
			const data = resp.data;
			const food = data.food;
			const foodResult = {} as Food;
			for (const key of Object.keys(food)) {
				const parsedMenuItems = parseMenuItems(
					food[key].categories,
					food[key].elements
				);
				foodResult[key] = parsedMenuItems;
			}
			const events = data.events;
			events.sort((a: Event, b: Event) => {
				return Date.parse(b.postDate) - Date.parse(a.postDate);
			});

			return {
				food: foodResult,
				contactInfo: data.contactInfo[0],
				events: events,
				peopleInfo: data.peopleInfo[0],
			};
		} catch (error: unknown) {
			console.log(error);
			return null;
		}
	}, []);

	const cacheData = useCallback(
		(
			dishes: MenuItem[],
			alcohol: MenuItem[],
			drinks: MenuItem[],
			softDrinks: MenuItem[],
			events: Event[],
			contactInfo: ContactInfo,
			peopleInfo: PeopleInfo
		) => {
			localStorage.setItem("dishes", JSON.stringify(dishes));
			localStorage.setItem("alcohol", JSON.stringify(alcohol));
			localStorage.setItem("drinks", JSON.stringify(drinks));
			localStorage.setItem("softDrinks", JSON.stringify(softDrinks));
			localStorage.setItem("events", JSON.stringify(events));
			localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
			localStorage.setItem("peopleInfo", JSON.stringify(peopleInfo));
			localStorage.setItem("lastUpdate", new Date().getDate().toString());
		},
		[]
	);

	const loadFromCache = useCallback(() => {
		setDishes(JSON.parse(localStorage.getItem("dishes")!));
		setAlcohol(JSON.parse(localStorage.getItem("alcohol")!));
		setDrinks(JSON.parse(localStorage.getItem("drinks")!));
		setSoftDrinks(JSON.parse(localStorage.getItem("softDrinks")!));
		setEvents(JSON.parse(localStorage.getItem("events")!));
		setContactInfo(JSON.parse(localStorage.getItem("contactInfo")!));
		setPeopleInfo(JSON.parse(localStorage.getItem("peopleInfo")!));
		setIsLoading(false);
	}, []);

	useEffect(() => {
		const dataFetch = async () => {
			const result = await Promise.all([fetchAll()]);

			const data = await Promise.all(result);
			if (data[0] !== null) {
				const { food, contactInfo, events, peopleInfo } = data[0];
				const { dishes, alcohol, drinks, softDrinks } = food;
				setDishes(dishes);
				setAlcohol(alcohol);
				setDrinks(drinks);
				setSoftDrinks(softDrinks);
				setEvents(events);
				setContactInfo(contactInfo);
				setPeopleInfo(peopleInfo);
				cacheData(
					dishes,
					alcohol,
					drinks,
					softDrinks,
					events,
					contactInfo,
					peopleInfo
				);
				if ("openingHours" in contactInfo) {
					setIsLoading(false);
				}
			}
		};
		const lastUpdate = localStorage.getItem("lastUpdate");
		if (lastUpdate === null || lastUpdate !== new Date().getDate().toString()) {
			dataFetch();
		} else {
			loadFromCache();
		}
	}, [cacheData, fetchAll, loadFromCache]);

	return (
		<DishesContext.Provider value={dishes}>
			<EventsContext.Provider value={events}>
				<AlcoholsContext.Provider value={alcohol}>
					<DrinksContext.Provider value={drinks}>
						<SoftDrinksContext.Provider value={softDrinks}>
							<ContactInfoContext.Provider value={contactInfo}>
								<PeopleInfoContext.Provider value={peopleInfo}>
									<AnimatePresence>
										{isLoading ? (
											<LoadingPage key="loading" />
										) : (
											<motion.div
												key="page"
												initial={{ opacity: 0 }}
												animate={{ opacity: 1, transition: { duration: 0.6 } }}
											>
												<Header />
												<Outlet />
												<Footer />
											</motion.div>
										)}
									</AnimatePresence>
								</PeopleInfoContext.Provider>
							</ContactInfoContext.Provider>
						</SoftDrinksContext.Provider>
					</DrinksContext.Provider>
				</AlcoholsContext.Provider>
			</EventsContext.Provider>
		</DishesContext.Provider>
	);
};

export default Layout;
