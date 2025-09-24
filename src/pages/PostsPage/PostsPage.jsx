import styles from "./PostsPage.module.scss";
import { ThreeDot } from "react-loading-indicators";
import { fetchPosts } from "@/redux/slices/posts/postsThunk";
import { useDispatch, useSelector } from "react-redux";
import { useDelayedLoader } from "./hooks/useDelayedLoader";

function PostsPage() {
	const { postsList, loading, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	const showLoader = useDelayedLoader(loading, 1500);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Заголовки постів</h1>
			<button
				className={styles.button}
				onClick={() => dispatch(fetchPosts())}
			>
				Завантажити пости
			</button>

			{error && (
				<p className={styles.error}>
					Помилка при завантаженні постів: <br /> {error}
				</p>
			)}
			{showLoader ? (
				<ThreeDot
					variant="pulsate"
					color="#0077ff"
					size="medium"
				/>
			) : (
				<ul className={styles.list}>
					{postsList.length ? (
						postsList?.map((post) => <li key={post.id}>{post.title}</li>)
					) : (
						<li className={styles.emptyList}>Постів немає</li>
					)}
				</ul>
			)}
		</div>
	);
}

export default PostsPage;
