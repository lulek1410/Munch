export interface Event {
	[key: string]: string | undefined;
	_id: string;
	name: string;
	shortDescription: string;
	description: string;
	translation: string;
	aditionalInfo?: string;
	link: string;
	postDate: string;
}
