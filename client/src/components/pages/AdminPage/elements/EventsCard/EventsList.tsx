import {
	List,
	TextField,
	EditButton,
	DeleteWithConfirmButton,
	ImageField,
} from "react-admin";

import ListActions from "../common/ListActions";
import CustomDatagrid from "../common/CustomDatagrid";

const EventsList = () => {
	return (
		<>
			<List actions={<ListActions />} title="Wydarzenia" pagination={false}>
				<CustomDatagrid>
					<TextField source="id" />
					<TextField source="name" label="Nazwa" />
					<TextField source="shortDescription" name="Krótki opis" />
					<TextField source="description" label="Opis" />
					<TextField source="aditionalInfo" label="Informacje dodatkowe" />
					<TextField source="postDate" label="Data dodania" />
					<ImageField source="link" label="Zdjęcie" />
					<EditButton />
					<DeleteWithConfirmButton />
				</CustomDatagrid>
			</List>
		</>
	);
};

export default EventsList;
