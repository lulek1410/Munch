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
					{/* <TextField source="openingHours" label="Godziny otwarcia" /> */}
					<TextField source="facebook" label="Facebook" />
					<TextField source="instagram" label="Instagram" />
					<TextField source="tiktok" label="TikTok" />
					<EditButton />
				</CustomDatagrid>
			</List>
		</>
	);
};

export default ContactInfoList;
