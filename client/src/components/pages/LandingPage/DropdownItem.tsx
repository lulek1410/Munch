import "./DropdownItem.css";

import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface NavItem {
	name: string;
	link: string;
}

interface DropdownProps {
	name: string;
	link: string;
	dropdown: Array<NavItem>;
}

const DropdownItem = (props: DropdownProps) => {
	const { name, link, dropdown } = props;

	const { t } = useTranslation();

	return (
		<div id="dropdown">
			<Link id="main-link" to={link}>
				{t(`${name}`)}
			</Link>
			{dropdown.length > 0 ? (
				<ul id="dropdown-list">
					{dropdown.map(({ name, link }, index) => (
						<li
							id="dropdown-item"
							key={name}
							style={{ "--order": index } as React.CSSProperties}
						>
							<Link to={link} id="dropdown-link">
								{t(`${name}`)}
							</Link>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default DropdownItem;
