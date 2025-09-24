import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function MainLayout() {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default MainLayout;
