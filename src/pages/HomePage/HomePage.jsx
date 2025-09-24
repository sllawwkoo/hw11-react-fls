import { useNavigate } from "react-router";
import styles from "./HomePage.module.scss";
import frontRoutes from "@/router/frontRoutes";

function HomePage() {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Домашня робота №11</h1>
			<div className={styles.tasks}>
				<div className={styles.task}>
					<h2 className={styles.taskTitle}>
						<span>Задача 1.</span> Список з фільтрацією
					</h2>
					<p className={styles.taskDescription}>
						<span>Завдання: </span> Створити список товарів. Має бути можливість
						додавання нового товару та фільтрації товарів за назвою (може бути
						одна сторінка, а можна додавання товарів зробити на окремій
						сторінці).
					</p>
					<button
						onClick={() => navigate(frontRoutes.navigate.products)}
						className={styles.taskButton}
					>
						Переглянути результат
					</button>
				</div>
				<div className={styles.task}>
					<h2 className={styles.taskTitle}>
						<span>Задача 2.</span> Список постів з API (createAsyncThunk)
					</h2>
					<p className={styles.taskDescription}>
						<span>Завдання: </span> Завантажити список постів з публічного API
						(https://jsonplaceholder.typicode.com/posts) та відобразити їхні
						заголовки. Додати індикатор завантаження та повідомлення про
						помилку.
						<br /> Використати: createAsyncThunk для отримання масиву даних.
					</p>
					<button
						onClick={() => navigate(frontRoutes.navigate.posts)}
						className={styles.taskButton}
					>
						Переглянути результат
					</button>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
