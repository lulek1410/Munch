import { List, TextField, EditButton, ImageField } from "react-admin";

import CustomDatagrid from "../common/CustomDatagrid";

const PeopleInfoList = () => {
	return (
		<>
			<List title="Informacje kontaktowe" pagination={false} actions={false}>
				<CustomDatagrid>
					<TextField source="id" />
					<TextField source="description" label="Opis" />
					<ImageField source="link" label="Zdjęcie" />
					<EditButton />
				</CustomDatagrid>
			</List>
		</>
	);
};

export default PeopleInfoList;
