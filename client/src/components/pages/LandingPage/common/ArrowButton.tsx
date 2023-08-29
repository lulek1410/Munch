import "./ArrowButton.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowButtonProps from "./interfaces/ArrowButtonProps";

const ArrowButton = (props: ArrowButtonProps) => {
	const { handleClick, text } = props;

	return (
		<button
			className="button arrow-btn speced-betwean-container"
			onClick={() => {
				handleClick();
			}}
		>
			<div>{text}</div>
			<ArrowForwardIosIcon />
		</button>
	);
};

export default ArrowButton;
