import { useContext } from "react";
import { PeopleInfoContext } from "../../context/PeopleInfoContext";
import { useTranslation } from "react-i18next";

const PeopleBio = () => {
	const { description, link } = useContext(PeopleInfoContext);
	const { t } = useTranslation();

	return (
		<div id="people-bio">
			<div>
				<img id="people-img" src={link} alt="people" />
			</div>
			<div id="about">
				<h2>{t("about")}</h2>
				<p className="description">
					{t("o nas", { ns: "Ludzie", defaultValue: { description } })}
				</p>
			</div>
		</div>
	);
};

export default PeopleBio;
