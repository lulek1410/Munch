import "./form.css";

import {
	List,
	TextField,
	EditButton,
	DeleteWithConfirmButton,
	ImageField,
	useResourceContext,
} from "react-admin";

import ListActions from "../common/ListActions";
import CustomDatagrid from "../common/CustomDatagrid";
import getTitle from "./getTitle";

const MenuItemsList = () => {
	const sectionName = useResourceContext().split("/")[0];
	const title = getTitle(sectionName, "list");

	return (
		<>
			<List
				actions={<ListActions sectionName={sectionName} />}
				title={title}
				pagination={false}
			>
				<CustomDatagrid>
					<TextField source="id" />
					<TextField source="category" label="Kategoria" />
					<TextField source="name" label="Nazwa" />
					<TextField source="variants" label="Warianty" />
					<TextField source="description" label="Opis" />
					<TextField source="price" label="Cena" />
					<ImageField source="link" label="Zdjęcie" />
					<EditButton />
					<DeleteWithConfirmButton />
				</CustomDatagrid>
			</List>
		</>
	);
};

export default MenuItemsList;
