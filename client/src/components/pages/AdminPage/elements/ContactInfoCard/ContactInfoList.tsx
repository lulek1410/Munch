import "./ContactInfoList.css";
import {
	List,
	TextField,
	EditButton,
	ArrayField,
	WithListContext,
} from "react-admin";

import CustomDatagrid from "../common/CustomDatagrid";

const ContactInfoList = () => {
	return (
		<>
			<List title="Informacje kontaktowe" pagination={false} actions={false}>
				<CustomDatagrid>
					<TextField source="id" />
					<TextField source="email" label="Email" />
					<TextField source="phoneNumber" label="Numer telefonu" />
					<TextField source="adress" name="Adres" />
					<ArrayField source="openingHours">
						<WithListContext
							render={({ data }) => (
								<ul className="array-item">
									{data.map((backlink) => (
										<li className="list-item" key={backlink.id}>
											{backlink.day + " " + backlink.time}
										</li>
									))}
								</ul>
							)}
						/>
					</ArrayField>
					<EditButton />
				</CustomDatagrid>
			</List>
		</>
	);
};

export default ContactInfoList;
