import { useEffect, useState } from "react";
import {
	SimpleForm,
	TextInput,
	useNotify,
	Edit,
	useRedirect,
	SelectInput,
	required,
	useResourceContext,
} from "react-admin";

import LinkedImage from "../LinkedImage";
import getTitle from "./getTitle";
import fetchCategories from "./fetchCategories";

const MenuItemEdit = () => {
	const notify = useNotify();
	const redirect = useRedirect();

	const [choices, setChoices] = useState([]);

	const sectionName = useResourceContext().split("/")[0];
	const title = getTitle(sectionName, "edit");

	useEffect(() => {
		fetchCategories(sectionName).then((categories) => {
			setChoices(categories);
		});
	}, [sectionName]);

	const onSuccess = () => {
		window.scrollTo(0, 0);
		notify("Element updated", {
			type: "info",
			messageArgs: { smart_count: 1 },
		});
		redirect(`/admin/${sectionName}`);
	};

	const onError = (error: any) => {
		notify(error.message, {
			type: "error",
			messageArgs: { smart_count: 1 },
		});
	};

	return (
		<Edit
			className="centered-container"
			title={title}
			mutationOptions={{ onError, onSuccess }}
			mutationMode="pessimistic"
		>
			<SimpleForm className="form centered-container" mode="all">
				<TextInput className="input" disabled source="id" />
				<SelectInput
					className="input"
					source="category"
					label="Kategoria"
					choices={choices}
					validate={required("Wymagane")}
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
					label="Cena"
					source="price"
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
		</Edit>
	);
};

export default MenuItemEdit;
