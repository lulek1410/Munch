import {
	SimpleForm,
	TextInput,
	NumberInput,
	useNotify,
	Edit,
	useRedirect,
	required,
} from "react-admin";

const CategoryEdit = () => {
	const notify = useNotify();
	const redirect = useRedirect();

	const onSuccess = () => {
		window.scrollTo(0, 0);
		notify("Element updated", {
			type: "info",
			messageArgs: { smart_count: 1 },
		});
		redirect("/admin/dishes/categories");
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
			title="Edytuj Kategorię Jedzenia"
			mutationOptions={{ onError, onSuccess }}
			mutationMode="pessimistic"
		>
			<SimpleForm className="form centered-container">
				<TextInput className="input" disabled source="id" />
				<TextInput
					label="Nazwa"
					className="input"
					source="name"
					validate={required("Wymagane")}
					resettable
				/>
				<NumberInput
					label="Priorytet"
					className="input"
					source="priority"
					validate={required("Wymagane")}
				/>
			</SimpleForm>
		</Edit>
	);
};

export default CategoryEdit;
