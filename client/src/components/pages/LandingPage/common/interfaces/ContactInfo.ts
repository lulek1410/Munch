interface OpeningHours {
	day: string;
	time: string;
}

export interface ContactInfo {
	[key: string]: string | Array<OpeningHours>;
	phoneNumber: string;
	email: string;
	adress: string;
	facebook: string;
	instagram: string;
	tiktok: string;
	openingHours: Array<OpeningHours>;
}
