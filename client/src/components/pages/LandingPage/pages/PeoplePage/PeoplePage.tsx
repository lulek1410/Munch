import "./PeoplePage.css";

import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";

import ArrowButton from "../../common/ArrowButton";
import { useTranslation } from "react-i18next";
import JoinUsDialog from "./JoinUsDialog";
import PeopleBio from "./PeopleBio";

const PeoplePage = () => {
	const { t } = useTranslation();
	const [dialogOpen, setDialogOpen] = useState(false);

	const openDialog = () => {
		setDialogOpen(true);
	};

	const closeDialog = () => {
		setDialogOpen(false);
	};

	return (
		<main id="people-page">
			<ScrollRestoration />
			<div className="join-button">
				<ArrowButton handleClick={openDialog} text={t("join-us")} />
			</div>
			<PeopleBio />
			<JoinUsDialog open={dialogOpen} onClose={closeDialog} />
		</main>
	);
};

export default PeoplePage;
