import {
	Datagrid,
	DeleteWithConfirmButton,
	EditButton,
	List,
	TextField,
	useResourceContext,
} from "react-admin";

const CategoryList = () => {
	const resource = useResourceContext().split("/");
	let title = "Kategorie ";
	switch (resource[0]) {
		case "dishes": {
			title += "Jedzenia";
			break;
		}
		case "alcohol": {
			title += "Alkoholi";
			break;
		}
		case "drinks": {
			title += "Drinków";
			break;
		}
		case "softDrinks": {
			title += "Napojów";
		}
	}

	return (
		<List title={title} pagination={false}>
			<Datagrid>
				<TextField source="id" />
				<TextField source="name" label="Nazwa" />
				<TextField source="priority" label="Priorytet" />
				<EditButton />
				<DeleteWithConfirmButton />
			</Datagrid>
		</List>
	);
};

export default CategoryList;
