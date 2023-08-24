import "./HomePage.css";

import { ScrollRestoration, useNavigate } from "react-router-dom";

import restaurant from "./../../../../../assets/restaurant.webp";

import InfiniteDishScroll from "./InfiniteDishScroll";
import NewestEvents from "./NewestEvents";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";

const MainPage = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [imgsLoaded, setImgsLoaded] = useState(false);

	useEffect(() => {
		const loadImage = (imageUrl: string) => {
			return new Promise((resolve, reject) => {
				const loadImg = new Image();
				loadImg.src = imageUrl;
				loadImg.onload = () => resolve(imageUrl);
				loadImg.onerror = (err) => reject(err);
			});
		};

		loadImage(restaurant)
			.then(() => setImgsLoaded(true))
			.catch((err) => console.log("Failed to load images", err));
	}, []);

	return (
		<main>
			{imgsLoaded ? (
				<>
					<ScrollRestoration />
					<section id="hero" className="screen-width">
						<img src={restaurant} alt="restaurant interior" />
						<div id="hero-description">
							<h1>Münch</h1>
							<h2>Jakieś hasło</h2>
							<p>może jakis krótki opis</p>
						</div>
					</section>
					<section id="invitation" className="screen-width">
						<div
							id="button-container"
							className="parent-centered-container glass centered-container"
						>
							<button
								className="button btn-big"
								onClick={() => {
									navigate("/menu");
								}}
							>
								{t("menu-btn")}
							</button>
						</div>
						<InfiniteDishScroll />
					</section>
					<NewestEvents />
				</>
			) : (
				<LoadingPage />
			)}
		</main>
	);
};

export default MainPage;
