import {
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	DialogActions,
	Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { ContactInfoContext } from "../../context/ContactInfoContext";
import { useContext } from "react";

interface JoinUsDialogProps {
	open: boolean;
	onClose: Function;
}

const JoinUsDialog = ({ open, onClose }: JoinUsDialogProps) => {
	const { t } = useTranslation();
	const contactInfo = useContext(ContactInfoContext);
	const defaultText =
		"Chcesz dołączyć do zespołu naszego zespołu? Przyjdź i daj się poznać! Odwiedź naszą restaurację i poproś o rozmowę z menedżerem. Koniecznie zabierz ze sobą swoje CV. Od razu przeprowadzimy wstępną rozmowę po której dostaniesz informację zwrotną i dowiesz się co będzie dalej… Będzie sprawnie i profesjonalnie. Możesz też wysłać do nas mail ze swoim CV:";

	const closeDialog = () => {
		onClose();
	};

	return (
		<Dialog open={open} onClose={closeDialog}>
			<DialogTitle>{t("join-us")}</DialogTitle>
			<DialogContent>
				<DialogContentText>
					{t("dołącz do nas", { ns: "Ludzie", defaultValue: { defaultText } })}
				</DialogContentText>
				<DialogContentText mt={2}>
					<a className="email-link" href={`mailto:${contactInfo.email}`}>
						{contactInfo.email}
					</a>
				</DialogContentText>
				<DialogActions>
					<Button onClick={closeDialog} color="primary" autoFocus>
						{t("close")}
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
};

export default JoinUsDialog;
