import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebase';
import Loading from './components/Loading';
import Tours from './components/Tours';

export default function App() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const fetchCard = async () => {
		setLoading(false);
		try {
			const snapshot = await getDocs(collection(db, 'card'));
			let tours = [];
			snapshot.forEach((doc) => tours.push({ ...doc.data(), id: doc.id }));
			setTours(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};
	useEffect(() => {
		fetchCard();
	}, []);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	if (loading) {
		return <Loading />;
	}
	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>no tours left</h2>
					<button className="btn" onClick={() => fetchCard()}>
						refresh
					</button>
				</div>
			</main>
		);
	}
	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	);
}
