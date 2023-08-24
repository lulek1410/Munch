import axios from "axios";
import { Category } from "../../../LandingPage/common/interfaces/Category";

const fetchCategories = async (sectionName: string) => {
	try {
		const response = await axios.get(`/${sectionName}/categories`);
		const categories = response.data.map((category: Category) => {
			return {
				id: category.name,
				name: category.name,
			};
		});
		return categories;
	} catch (error: unknown) {
		if (typeof error === "object" && error != null && "message" in error) {
			console.log(error.message);
		}
	}
};

export default fetchCategories;
