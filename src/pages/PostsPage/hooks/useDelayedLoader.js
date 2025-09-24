import { useEffect, useState } from "react";

/**
 * @param {boolean} loading - справжній стан завантаження з Redux ToolKit
 * @param {number} delay - час у мс, скільки ще тримати спінер після loading=false
 */
export function useDelayedLoader(loading, delay = 1500) {
	const [show, setShow] = useState(false);

	useEffect(() => {
		let timer;
		if (loading) {
			// Якщо почалося завантаження — показуємо спінер відразу
			setShow(true);
		} else {
			// Якщо loading=false — чекаємо "delay" мс перед тим, як прибрати спінер
			timer = setTimeout(() => setShow(false), delay);
		}

		// При розмонтуванні або при зміні loading — чистимо таймер
		return () => clearTimeout(timer);
	}, [loading, delay]);

	return show;
}
