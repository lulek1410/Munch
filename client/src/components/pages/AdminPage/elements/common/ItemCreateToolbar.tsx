import { useFormState } from "react-hook-form";
import { SaveButton, Toolbar, useNotify } from "react-admin";
import { useFormContext } from "react-hook-form";

interface ItemCreateToolbarProps {
	sectionName: string;
}

const ItemCreateToolbar = ({ sectionName }: ItemCreateToolbarProps) => {
	const notify = useNotify();
	const { isValid } = useFormState();
	const { reset } = useFormContext();

	return (
		<Toolbar>
			<SaveButton
				type="button"
				label="zapisz"
				variant="contained"
				disabled={!isValid}
				mutationOptions={{
					onSuccess: () => {
						reset();
						notify("ra.notification.created", {
							type: "info",
							messageArgs: { smart_count: 1 },
						});
					},
					onError: (error: any) => {
						notify(error.message, {
							type: "error",
							messageArgs: { smart_count: 1 },
						});
					},
				}}
			/>
		</Toolbar>
	);
};

export default ItemCreateToolbar;
