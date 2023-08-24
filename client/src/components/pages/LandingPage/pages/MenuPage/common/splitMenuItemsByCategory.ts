import { MenuItem } from "../../../common/interfaces/MenuItem";

const splitMenuItemsByCategory = (items: Array<MenuItem>) => {
	const splitItems = items.reduce((result, item: MenuItem) => {
		if (!result[item.category]) {
			result[item.category] = [];
		}
		result[item.category].push(item);
		return result;
	}, {} as { [key: string]: Array<MenuItem> });

	return Object.values(splitItems);
};

export default splitMenuItemsByCategory;
