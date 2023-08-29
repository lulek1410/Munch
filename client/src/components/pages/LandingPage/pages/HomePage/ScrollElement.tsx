import { useContext, useMemo } from "react";

import { DishesContext } from "../../context/DishesContext";
import { MenuItem } from "../../common/interfaces/MenuItem";
import ScrollElementProps from "./common/interfaces/ScrollElementProps";

const ScrollElement = (props: ScrollElementProps) => {
	const { animation } = props;

	const dishes = useContext(DishesContext);
	const getRandomImages = useMemo(() => {
		const usedIndexes: number[] = [];
		const images: string[] = [];
		const dishesWithLink = dishes.filter((dish) => {
			return dish.link;
		});
		const dishesWithLinkCount = dishesWithLink.length;
		if (dishesWithLinkCount > 12) {
			while (images.length !== 9) {
				const index = Math.floor(Math.random() * dishes.length);
				if (!usedIndexes.includes(index)) {
					images.push(dishes[index].link!);
				}
			}
			return images;
		} else if (dishesWithLinkCount >= 9) {
			return dishesWithLink.slice(0, 9).map((dish: MenuItem) => dish.link);
		} else {
			return [];
		}
	}, [dishes]);

	const classNames = `scroll-element ${animation}`;

	return (
		<>
			<ul className={classNames}>
				{getRandomImages.map((image, index) => (
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
