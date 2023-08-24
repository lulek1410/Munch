import { useTranslation } from "react-i18next";
import "./MenuPage.css";

import { Link, ScrollRestoration, useLocation } from "react-router-dom";
import { menuNavigtion } from "../../common/navigation";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedOutlet from "./AnimatedOutlet";

const animationStyles = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.4 } },
  exit: { opacity: 0, x: 50 },
};

const MenuPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <main id="menu-page">
      <ScrollRestoration />
      <h1>{t("menu")}</h1>
      <nav id="menu-navigation">
        <ul className="navigation-list">
          {menuNavigtion.map(
            ({ name, link }: { name: string; link: string }) => {
              return (
                <li key={name}>
                  <Link className="link" to={link}>
                    {t(`${name}`)}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </nav>
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={animationStyles.initial}
          animate={animationStyles.animate}
          exit={animationStyles.exit}
        >
          <AnimatedOutlet />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default MenuPage;
