import "./LanguageChangeButton.css";

import PLFlag from "./../../../assets/pl.svg";
import GBFlag from "./../../../assets/gb.svg";
import { useTranslation } from "react-i18next";

const LanguageChangeButton = () => {
	const { i18n } = useTranslation();

	const changeLanguage = () => {
		const newLanguage = i18n.language === "en" ? "pl" : "en";
		i18n.changeLanguage(newLanguage);
	};

	return (
		<button className="lang-btn" onClick={changeLanguage}>
			<img src={i18n.language === "en" ? PLFlag : GBFlag} alt="flag" />
		</button>
	);
};

export default LanguageChangeButton;
