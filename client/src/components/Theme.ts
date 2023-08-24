import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#0066B3",
			dark: "#004d88",
			contrastText: "#000000",
		},
		contrastThreshold: 3,
	},
});

export default theme;
