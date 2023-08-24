import { useEffect, useState } from "react";
import {
	Create,
	SimpleForm,
	TextInput,
	SelectInput,
	required,
	useResourceContext,
} from "react-admin";

import LinkedImage from "../LinkedImage";
import ItemCreateToolbar from "../common/ItemCreateToolbar";
import getTitle from "./getTitle";
import fetchCategories from "./fetchCategories";

const MenuItemCreate = () => {
	const [choices, setChoices] = useState([]);
	const sectionName = useResourceContext().split("/")[0];
	const title = getTitle(sectionName, "add");

	useEffect(() => {
		fetchCategories(sectionName).then((categories) => {
			setChoices(categories);
		});
	}, [sectionName]);

	return (
		<Create className="centered-container" title={title} redirect={false}>
			<SimpleForm
				toolbar={<ItemCreateToolbar sectionName={sectionName} />}
				className="form centered-container"
				mode="all"
			>
				<SelectInput
					className="input"
					source="category"
					label="Kategoria"
					choices={choices}
				/>
				<TextInput
					className="input"
					label="Nazwa"
					source="name"
					validate={required("Wymagane")}
					resettable
				/>
				<TextInput
					className="input"
					label="Warianty"
					source="variants"
					resettable
				/>
				<TextInput
					className="input"
					label="Opis"
					multiline
					source="description"
					resettable
				/>
				<TextInput
					className="input"
					source="price"
					label="Cena"
					validate={required("Wymagane")}
				/>
				<TextInput
					className="input"
					label="Link do zdjęcia"
					source="link"
					resettable
				/>
				<LinkedImage />
			</SimpleForm>
		</Create>
	);
};

export default MenuItemCreate;
