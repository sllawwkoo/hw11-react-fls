import { createBrowserRouter } from "react-router";
import frontRoutes from "./frontRoutes";
import MainLayout from "@/layout/MainLayout";
import HomePage from "@/pages/HomePage/HomePage";
import ProductsPage from "@/pages/Products/ProductsPage/ProductsPage";
import ProductForm from "@/pages/Products/ProductForm/ProductForm";
import PostsPage from "@/pages/PostsPage/PostsPage";

export const routes = [
	{
		path: frontRoutes.pages.home,
		Component: MainLayout,
		children: [
			{
				index: true,
				Component: HomePage,
				handler: {
					title: "Головна",
				},
			},
			{
				path: frontRoutes.pages.products.index,
				handler: {
					title: "Продукти",
				},
				children: [
					{
						index: true,
						Component: ProductsPage,
					},
					{
						path: frontRoutes.pages.products.add,
						Component: ProductForm,
					},
				],
			},
			{
				path: frontRoutes.pages.posts,
				Component: PostsPage,
				handler: {
					title: "Пости",
				},
			},
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
