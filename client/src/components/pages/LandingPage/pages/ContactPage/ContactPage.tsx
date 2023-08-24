import "./ContactPage.css";

import contact from "./../../../../../assets/contact.webp";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ContactInfoContext } from "../../context/ContactInfoContext";

const ContactPage = () => {
	const { t } = useTranslation();
	const contactInfo = useContext(ContactInfoContext);

	return (
		<main>
			<section id="contact-title" className="screen-width">
				<img src={contact} alt="phone" />
			</section>
			<section id="contact-section">
				<h1>{t("contact")}</h1>
				<h2>{t("restaurant-w-name")}</h2>
				<p>{t("adress")}</p>
				{contactInfo.openingHours.map(({ day, time }) => {
					return (
						<p key={day}>
							{t(`${day}`, { ns: "Kontakt", defaultValue: `${day}` })}{" "}
							{t(`${time}`, { ns: "Kontakt" })}
						</p>
					);
				})}
				<h2>{t("reservations")}</h2>
				<p>tel.: +48 {contactInfo.phoneNumber}</p>
				<p>{contactInfo.email}</p>
			</section>
		</main>
	);
};

export default ContactPage;
