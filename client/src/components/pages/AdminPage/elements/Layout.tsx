import { Layout } from "react-admin";

import { CustomMenu } from "./CustomMenu";

export const CustomLayout = (props: any) => (
	<Layout
		{...props}
		sx={{
			"& .RaLayout-appFrame": {
				marginInline: "calc(-1 * var(--document-padding-h))",
				marginBottom: "calc(-1 * (var(--footer-height) + 2rem))",
				marginTop: "calc(-1 * var(--header-height))",
				paddingTop: "70px",
				backgroundColor: "#FAFAFB",
			},
		}}
		menu={CustomMenu}
	/>
);
