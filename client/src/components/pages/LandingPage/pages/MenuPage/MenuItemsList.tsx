import { useContext } from "react";

import splitMenuItemsByCategory from "./common/splitMenuItemsByCategory";
import MenuCategory from "./MenuCategory";
import { MenuItem } from "../../common/interfaces/MenuItem";
import MenuItemsListProps from "./common/interfaces/MenuItemsListProps";
import React from "react";

const MenuItemsList = React.memo(({ context, namespace }: MenuItemsListProps) => {
  const elements = useContext<MenuItem[]>(context);
  const sections = splitMenuItemsByCategory(elements);

  return (
    <>
      {sections.map((data, index) => (
        <MenuCategory key={index} data={data} namespace={namespace} />
      ))}
    </>
  );
});

export default MenuItemsList;
