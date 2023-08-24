import {
	Create,
	SimpleForm,
	TextInput,
	NumberInput,
	required,
	useResourceContext,
} from "react-admin";

import ItemCreateToolbar from "../common/ItemCreateToolbar";

const CategoryCreate = () => {
	const resource = useResourceContext();

	return (
		<Create
			className="centered-container"
			title="Dodaj Kategorię"
			redirect={false}
		>
			<SimpleForm
				toolbar={<ItemCreateToolbar sectionName={resource} />}
				className="form centered-container"
			>
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
		</Create>
	);
};

export default CategoryCreate;
