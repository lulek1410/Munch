const getTitle = (sectionName: string, actionName: "add" | "edit" | "list") => {
	let title = "";
	let action = "";
	switch (actionName) {
		case "add":
			action = "Dodaj ";
			break;
		case "edit":
			action = "Edytuj ";
			break;
	}
	switch (sectionName) {
		case "dishes": {
			title = `${action}Jedzenie`;
			break;
		}
		case "alcohol": {
			title = `${action}Alkohol`;
			if (actionName === "list") {
				title += "e";
			}
			break;
		}
		case "drinks": {
			title = `${action}Drink`;
			if (actionName === "list") {
				title += "i";
			}
			break;
		}
		case "softDrinks": {
			title = `${action}Napój`;
			if (actionName === "list") {
				title = "Napoje";
			}
			break;
		}
	}

	return title;
};

export default getTitle;
