import { useTranslation } from "react-i18next";
import StyledDivider from "../../common/StyledDivider";
import { MenuItem } from "../../common/interfaces/MenuItem";
import MenuItemCard from "./MenuItemCard";

interface MenuCategoryProps {
	data: Array<MenuItem>;
	namespace: string;
}

const MenuCategory = ({ data, namespace }: MenuCategoryProps) => {
	const { t } = useTranslation(namespace);
	const category = data.length > 0 ? data[0].category ?? "" : "";
	return (
		<section className="menu-section" aria-labelledby={`${category}-name`}>
			<h2 id={`${category}-name`}>{t(`${category}`)}</h2>
			<StyledDivider />
			<ul className="menu-section-items">
				{data.map(
					({ _id, name, variants, description, price, link }: MenuItem) => (
						<li className="menu-item" key={_id}>
							<MenuItemCard
								name={t(`${name}`)}
								variants={variants && t(`${variants}`)}
								description={
									description &&
									t(`${category}-${name}`, {
										defaultValue: `${description}`,
									})
								}
								price={price}
								image={link}
							/>
						</li>
					)
				)}
			</ul>
		</section>
	);
};

export default MenuCategory;
