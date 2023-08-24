import "./ArrowButton.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type ClickHandler = () => void;

interface ArrowButtonProps {
	handleClick: ClickHandler;
	text: string;
}

const ArrowButton = (props: ArrowButtonProps) => {
	const { handleClick, text } = props;

	return (
		<button
			id="arrow-btn"
			className=" button speced-betwean-container"
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
