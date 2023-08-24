export interface MenuItem {
	[key: string]: string | undefined;
	_id: string;
	name: string;
	variants?: string;
	description?: string;
	price: string;
	category: string;
	link?: string;
}
