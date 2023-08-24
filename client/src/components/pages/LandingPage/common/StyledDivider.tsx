import { Divider } from "@mui/material";

const StyledDivider = () => {
	return (
		<Divider
			component="div"
			role="presentation"
			sx={{
				mb: "0.5rem",
				mt: "0.2rem",
				background: "var(--c-accent)",
				height: "2px",
				borderRadius: "50%",
			}}
		/>
	);
};

export default StyledDivider;
