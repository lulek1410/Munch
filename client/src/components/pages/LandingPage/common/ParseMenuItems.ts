import { Category } from "./interfaces/Category";
import { MenuItem } from "./interfaces/MenuItem";

export const parseMenuItems = (
	categories: Array<Category>,
	menuItems: Array<MenuItem>
) => {
	const mappedCategories = new Map<string, number>(
		categories.map((category: Category) => {
			return [category.name, category.priority];
		})
	);
	const sorted = [...menuItems].sort((a: MenuItem, b: MenuItem) => {
		if (!mappedCategories.get(a.category)) {
			return 1;
		} else if (!mappedCategories.get(b.category)) {
			return -1;
		}
		return (
			mappedCategories.get(a.category)! - mappedCategories.get(b.category)!
		);
	});
	return sorted;
};
