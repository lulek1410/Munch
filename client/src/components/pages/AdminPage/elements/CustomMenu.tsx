import { Menu } from "react-admin";

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LiquorIcon from "@mui/icons-material/Liquor";
import EventIcon from "@mui/icons-material/Event";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PeopleIcon from "@mui/icons-material/People";

export const CustomMenu = () => (
	<Menu>
		<Menu.Item
			to="/admin/dishes"
			primaryText="Jedzenie"
			leftIcon={<RestaurantMenuIcon />}
		/>
		<Menu.Item
			to="/admin/softDrinks"
			primaryText="Napoje"
			leftIcon={<LocalDrinkIcon />}
		/>
		<Menu.Item
			to="/admin/drinks"
			primaryText="Drinki"
			leftIcon={<LocalBarIcon />}
		/>
		<Menu.Item
			to="/admin/alcohol"
			primaryText="Alkohol"
			leftIcon={<LiquorIcon />}
		/>
		<Menu.Item
			to="/admin/events"
			primaryText="Wydarzenia"
			leftIcon={<EventIcon />}
		/>
		<Menu.Item
			to="/admin/contactInfo"
			primaryText="Kontakt"
			leftIcon={<ContactPhoneIcon />}
		/>
		<Menu.Item
			to="/admin/peopleInfo"
			primaryText="Ludzie"
			leftIcon={<PeopleIcon />}
		/>
	</Menu>
);
