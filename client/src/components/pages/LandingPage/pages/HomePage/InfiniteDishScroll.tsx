import "./InfiniteDishScroll.css";

import ScrollElement from "./ScrollElement";

const InfiniteDishScroll = () => {
	return (
		<>
			<div className="scroll-container">
				<ScrollElement animation="primary" />
				<ScrollElement animation="secondary" />
			</div>
			<div className="scroll-container">
				<ScrollElement animation="primary-reversed" />
				<ScrollElement animation="secondary-reversed" />
			</div>
		</>
	);
};

export default InfiniteDishScroll;
