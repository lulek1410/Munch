const loadImage = (imageUrl: string) => {
	return new Promise((resolve, reject) => {
		const loadImg = new Image();
		loadImg.src = imageUrl;
		loadImg.onload = () => {
			return resolve(imageUrl);
		};
		loadImg.onerror = (err) => {
			return reject(err);
		};
	});
};

export default loadImage;
