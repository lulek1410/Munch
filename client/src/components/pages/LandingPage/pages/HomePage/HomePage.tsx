import "./HomePage.css";

import { ScrollRestoration } from "react-router-dom";

import restaurant from "./../../../../../assets/munch_bg.webp";
import logo from "./../../../../../assets/munchlogo.svg";

import InfiniteDishScroll from "./InfiniteDishScroll";
import NewestEvents from "./NewestEvents";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import useClickRedirection from "../../common/hooks/useClickRedirection";
import loadImage from "./common/loadImage";

const HomePage = () => {
	const { t } = useTranslation();
	const navigate = useClickRedirection("/menu");
	const [imgsLoaded, setImgsLoaded] = useState(false);
	useEffect(() => {
		loadImage(restaurant)
			.then(() => {
				setImgsLoaded(true);
			})
			.catch((err: unknown) => console.log("Failed to load images", err));
	}, []);

	if (!imgsLoaded) {
		return (
			<main>
				<LoadingPage />
			</main>
		);
	}

	return (
		<main>
			<ScrollRestoration />
			<section id="hero" className="screen-width">
				<img src={restaurant} alt="restaurant interior" />
				<div id="hero-description">
					<img src={logo} alt="logo" />
				</div>
			</section>
			<section id="invitation" className="screen-width">
				<div
					id="button-container"
					className="parent-centered-container glass centered-container"
				>
					<button className="button btn-big" onClick={navigate}>
						{t("menu-btn")}
					</button>
				</div>
				<InfiniteDishScroll />
			</section>
			<NewestEvents />
		</main>
	);
};

export default HomePage;
