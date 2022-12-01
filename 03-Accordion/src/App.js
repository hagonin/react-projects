import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebase';
import Loading from './components/Loading';
import SingleQuestion from './components/Question';

export default function App() {
	const [loading, setLoading] = useState(true);
	const [questions, setQuestions] = useState([]);

	const fetchQuestion = async () => {
		setLoading(false);
		try {
			const snapshot = await getDocs(collection(db, 'accordion'));
			let questionData = [];
			snapshot.forEach((doc) =>
				questionData.push({ ...doc.data(), id: doc.id })
			);
			setQuestions(questionData);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};
	useEffect(() => {
		fetchQuestion();
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<main>
			<div className="container">
				<h3>Some Questions and Answers </h3>
				<section className="info">
					{questions.map((question) => {
						return (
							<SingleQuestion key={question.id} {...question}></SingleQuestion>
						);
					})}
				</section>
			</div>
		</main>
	);
}
