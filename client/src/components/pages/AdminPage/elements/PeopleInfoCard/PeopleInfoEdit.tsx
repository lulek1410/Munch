import {
	SimpleForm,
	TextInput,
	useNotify,
	Edit,
	useRedirect,
	required,
	Toolbar,
	SaveButton,
} from "react-admin";
import LinkedImage from "../LinkedImage";

const SaveToolBar = () => {
	return (
		<Toolbar>
			<SaveButton />
		</Toolbar>
	);
};

const PeopleInfoEdit = () => {
	const notify = useNotify();
	const redirect = useRedirect();

	const onSuccess = () => {
		window.scrollTo(0, 0);
		notify("Element updated", {
			type: "info",
			messageArgs: { smart_count: 1 },
		});
		redirect("/admin/peopleInfo");
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
					label="Opis"
					source="description"
					validate={required("Wymagane")}
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

export default PeopleInfoEdit;
