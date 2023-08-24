import {
	SimpleForm,
	TextInput,
	useNotify,
	Edit,
	useRedirect,
	required,
	ArrayInput,
	SimpleFormIterator,
	Toolbar,
	SaveButton,
} from "react-admin";

const SaveToolBar = () => {
	return (
		<Toolbar>
			<SaveButton />
		</Toolbar>
	);
};

const ContactInfoEdit = () => {
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
			title="Edytuj informacje kontaktowe"
			mutationOptions={{ onError, onSuccess }}
			mutationMode="pessimistic"
		>
			<SimpleForm className="form centered-container" toolbar={<SaveToolBar />}>
				<TextInput className="input" disabled source="id" />
				<TextInput
					className="input"
					label="Email"
					source="email"
					validate={required("Wymagane")}
					resettable
				/>
				<TextInput
					className="input"
					label="Numer telefonu"
					source="phoneNumber"
					validate={required("Wymagane")}
					resettable
				/>
				<TextInput
					className="input"
					label="Adres"
					source="adress"
					inputProps={{ maxLength: 240 }}
					multiline
					validate={required("Wymagane")}
					resettable
				/>
				<ArrayInput source="openingHours" label="Godziny otwarcia">
					<SimpleFormIterator inline>
						<TextInput
							source="day"
							label="Dni"
							validate={required("Wymagane")}
						/>
						<TextInput
							source="time"
							label="Godziny otwarcia"
							validate={required("Wymagane")}
						/>
					</SimpleFormIterator>
				</ArrayInput>
				<br />
				<h2>Media społecznościowe:</h2>
				<TextInput source="facebook" label="Facebook" />
				<TextInput source="instagram" label="Instagram" />
				<TextInput source="tiktok" label="TikTok" />
			</SimpleForm>
		</Edit>
	);
};

export default ContactInfoEdit;
