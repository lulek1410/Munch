import "./Header.css";

import { Link } from "react-router-dom";

import logo from "../../../assets/munchlogo.svg";

import DropdownItem from "./DropdownItem";
import LanguageChangeButton from "./LanguageChangeButton";
import { navigation } from "./common/navigation";
import { useTranslation } from "react-i18next";

const Header = () => {
	const { t } = useTranslation();

	return (
		<header id="page-header">
			<LanguageChangeButton />
			<Link to="/" aria-label="logo">
				<img src={logo} alt="logo" id="header-logo" role="button" />
			</Link>
			<nav className="centered-container">
				<ul className="navigation-list">
					{navigation.map(({ name, link, dropdown }) => (
						<li key={name}>
							{dropdown ? (
								<DropdownItem
									name={t(`${name}`)}
									link={link}
									dropdown={dropdown}
								/>
							) : (
								<Link className="link" to={link}>
									{t(`${name}`)}
								</Link>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
