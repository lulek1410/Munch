import { Admin, Resource } from "react-admin";

import { Auth0Client } from "@auth0/auth0-spa-js";
import { httpClient } from "ra-auth-auth0";

import { Auth0AuthProvider } from "./authProvider";
import dataProvider from "./dataProvider";

import { CustomLayout } from "./elements/Layout";
import CategoryList from "./elements/CategoryCard/CategoryList";
import CategoryCreate from "./elements/CategoryCard/CategoryCreate";
import CategoryEdit from "./elements/CategoryCard/CategoryEdit";
import EventsList from "./elements/EventsCard/EventsList";
import EventCreate from "./elements/EventsCard/EventCreate";
import EventEdit from "./elements/EventsCard/EventEdit";
import MenuItemsList from "./elements/MenuItemsCard/MenuItemsList";
import MenuItemCreate from "./elements/MenuItemsCard/MenuItemCreate";
import MenuItemEdit from "./elements/MenuItemsCard/MenuItemEdit";
import ContactInfoList from "./elements/ContactInfoCard/ContactInfoList";
import ContactInfoEdit from "./elements/ContactInfoCard/ContactInfoEdit";
import PeopleInfoList from "./elements/PeopleInfoCard/PeopleInfoList";
import PeopleInfoEdit from "./elements/PeopleInfoCard/PeopleInfoEdit";

const auth0 = new Auth0Client({
	domain: process.env.REACT_APP_AUTH0_DOMAIN,
	clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
	cacheLocation: "localstorage",
	authorizationParams: {
		audience: process.env.REACT_APP_AUTH0_AUDIENCE,
	},
});

const authProvider = Auth0AuthProvider(auth0, {
	loginRedirectUri: process.env.REACT_APP_LOGIN_REDIRECT_URL,
	logoutRedirectUri: process.env.REACT_APP_LOGOUT_REDIRECT_URL,
});

const AdminPage = () => {
	return (
		<Admin
			layout={CustomLayout}
			dataProvider={dataProvider(
				httpClient(auth0),
				process.env.REACT_APP_API_URL
			)}
			authProvider={authProvider}
			basename="/admin"
			requireAuth
		>
			<>
				<Resource
					name="dishes"
					list={MenuItemsList}
					create={MenuItemCreate}
					edit={MenuItemEdit}
				/>
				<Resource
					name="dishes/categories"
					list={CategoryList}
					create={CategoryCreate}
					edit={CategoryEdit}
				></Resource>
				<Resource
					name="softDrinks"
					list={MenuItemsList}
					create={MenuItemCreate}
					edit={MenuItemEdit}
				/>
				<Resource
					name="softDrinks/categories"
					list={CategoryList}
					create={CategoryCreate}
					edit={CategoryEdit}
				></Resource>
				<Resource
					name="drinks"
					list={MenuItemsList}
					create={MenuItemCreate}
					edit={MenuItemEdit}
				/>
				<Resource
					name="drinks/categories"
					list={CategoryList}
					create={CategoryCreate}
					edit={CategoryEdit}
				></Resource>
				<Resource
					name="alcohol"
					list={MenuItemsList}
					create={MenuItemCreate}
					edit={MenuItemEdit}
				/>
				<Resource
					name="alcohol/categories"
					list={CategoryList}
					create={CategoryCreate}
					edit={CategoryEdit}
				/>
				<Resource
					name="events"
					list={EventsList}
					create={EventCreate}
					edit={EventEdit}
				/>
				<Resource
					name="contactInfo"
					list={ContactInfoList}
					edit={ContactInfoEdit}
				/>
				<Resource name="peopleInfo" list={PeopleInfoList} edit={PeopleInfoEdit}/>
			</>
		</Admin>
	);
};

export default AdminPage;
