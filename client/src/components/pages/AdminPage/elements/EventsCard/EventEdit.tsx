import {
	SimpleForm,
	TextInput,
	useNotify,
	Edit,
	useRedirect,
	required,
} from "react-admin";

import { RichTextInput } from "ra-input-rich-text";

import LinkedImage from "../LinkedImage";

const EventEdit = () => {
	const notify = useNotify();
	const redirect = useRedirect();

	const onSuccess = () => {
		window.scrollTo(0, 0);
		notify("Element updated", {
			type: "info",
			messageArgs: { smart_count: 1 },
		});
		redirect("/admin/events");
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
			title="Edytuj Wydarzenie"
			mutationOptions={{ onError, onSuccess }}
			mutationMode="pessimistic"
		>
			<SimpleForm className="form centered-container">
				<TextInput className="input" disabled source="id" />
				<TextInput
					className="input"
					label="Nazwa"
					source="name"
					inputProps={{ maxLength: 35 }}
					validate={required("Wymagane")}
					resettable
				/>
				<TextInput
					className="input"
					label="Krótki opis"
					source="shortDescription"
					inputProps={{ maxLength: 240 }}
					multiline
					validate={required("Wymagane")}
					resettable
				/>
				<RichTextInput label="Opis" source="description" />
				<RichTextInput label="Tłumaczenie" source="translation" />
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
					validate={required("Wymagane")}
					resettable
				/>
				<LinkedImage />
			</SimpleForm>
		</Edit>
	);
};

export default EventEdit;
