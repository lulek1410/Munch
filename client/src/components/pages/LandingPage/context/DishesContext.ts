import { createContext } from "react";
import { MenuItem } from "../common/interfaces/MenuItem";

export const DishesContext = createContext([] as MenuItem[]);
