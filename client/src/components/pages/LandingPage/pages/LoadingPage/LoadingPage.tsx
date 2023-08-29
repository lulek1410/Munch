import { motion } from "framer-motion";
import "./loader.css";

const LoadingPage = () => {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
		>
			<div className="loader-container">
				<div className="parent-centered-container">
					<div className="loader" data-testid="loading"></div>
				</div>
			</div>
		</motion.div>
	);
};

export default LoadingPage;
