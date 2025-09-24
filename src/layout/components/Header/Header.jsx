import styles from "./Header.module.scss";
import { NavLink } from "react-router";
import { routes } from "@/router/router";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<nav className={styles.menu}>
					<ul className={styles.menu__list}>
						{routes[0].children.map((route, index) => (
							<li
								key={index}
								className={styles.menu__item}
							>
								<NavLink
									to={route.path ?? ""}
									className={({ isActive }) =>
										`${styles.menu__link} ${isActive ? styles.active : ""}`
									}
								>
									{route.handler.title}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
