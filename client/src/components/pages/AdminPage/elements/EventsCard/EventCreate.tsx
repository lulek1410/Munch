import { Create, SimpleForm, TextInput } from "react-admin";

import { RichTextInput } from "ra-input-rich-text";

import LinkedImage from "../LinkedImage";
import ItemCreateToolbar from "../common/ItemCreateToolbar";

const EventCreate = () => {
	return (
		<Create
			className="centered-container"
			title="Dodaj Wydarzenie"
			redirect={false}
		>
			<SimpleForm
				toolbar={<ItemCreateToolbar sectionName="events" />}
				className="form centered-container"
			>
				<TextInput
					className="input"
					label="Nazwa"
					source="name"
					inputProps={{ maxLength: 30 }}
					required
				/>
				<TextInput
					className="input"
					label="Krótki opis"
					source="shortDescription"
					inputProps={{ maxLength: 240 }}
					multiline
					required
					resettable
				/>
				<RichTextInput className="input" label="Opis" source="description" />
				<RichTextInput
					className="input"
					label="Tłumaczenie"
					source="translation"
				/>
				<TextInput
					className="input"
					label="Dodatkowe informacje"
					source="aditionalInfo"
					resettable
				/>
				<TextInput
					className="input"
					label="Link do zdjęcia"
					source="link"
					required
					resettable
				/>
				<LinkedImage />
			</SimpleForm>
		</Create>
	);
};

export default EventCreate;
