import "./InfiniteDishScroll.css";

import ScrollElement from "./ScrollElement";

const InfiniteDishScroll = () => {
	return (
		<>
			<div id="scroll-container">
				<ScrollElement direction="left" animation="primary" />
				<ScrollElement direction="left" animation="secondary" />
			</div>
			<div id="scroll-container">
				<ScrollElement direction="right" animation="primary-reversed" />
				<ScrollElement direction="right" animation="secondary-reversed" />
			</div>
		</>
	);
};

export default InfiniteDishScroll;
