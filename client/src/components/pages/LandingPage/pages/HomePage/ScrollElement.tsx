import { useContext } from "react";

import { DishesContext } from "../../context/DishesContext";
import { MenuItem } from "../../common/interfaces/MenuItem";

interface ScrollElementProps {
	direction: string;
	animation: string;
}

const ScrollElement = (props: ScrollElementProps) => {
	const { direction, animation } = props;

	const dishes = useContext(DishesContext);
	const images = dishes.map((dish: MenuItem) => dish.link);

	const classNames = `scroll-element ${animation}`;
	const directionStyle = () => {
		return direction === "left" ? { left: 0 } : { right: 0 };
	};

	return (
		<>
			<ul style={directionStyle()} className={classNames}>
				{images.map((image, index) => (
					<li key={index}>
						<img
							src={image}
							alt="dish"
							className="scroll-image"
							loading="lazy"
						/>
					</li>
				))}
			</ul>
		</>
	);
};

export default ScrollElement;
