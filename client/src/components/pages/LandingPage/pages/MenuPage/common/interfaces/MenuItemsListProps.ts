import { Context } from "react";
import { MenuItem } from "../../../../common/interfaces/MenuItem";

interface MenuItemsListProps {
	context: Context<MenuItem[]>;
	namespace: string;
}

export default MenuItemsListProps;
