import "./MenuItemCard.css";

import StyledDivider from "../../common/StyledDivider";
import MenuItemCardProps from "./common/interfaces/MenuItemCardProps";

const MenuItemCard = ({
	image,
	name,
	price,
	variants,
	description,
}: MenuItemCardProps) => {
	return (
		<article className="item-card">
			{image && <img src={image} alt="dish" className="dish-image" />}
			<section className="card-content">
				<header className="card-title">
					<div>
						<h3>{name}</h3>
						<p>{variants}</p>
					</div>
					<div>{price}zł</div>
				</header>
				{description && (
					<section>
						<StyledDivider />
						<p className="card-description">{description}</p>
					</section>
				)}
			</section>
		</article>
	);
};

export default MenuItemCard;
