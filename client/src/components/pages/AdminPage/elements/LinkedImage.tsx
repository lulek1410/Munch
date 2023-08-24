import "./LinkedImage.css";

import { FormDataConsumer } from "react-admin";

const LinkedImage = () => {
	return (
		<FormDataConsumer>
			{({ formData, ...rest }) => (
				<div>
					<h5>Zdjęcie:</h5>
					<img id="linked-image" src={formData.link} alt="linked" />
				</div>
			)}
		</FormDataConsumer>
	);
};

export default LinkedImage;
