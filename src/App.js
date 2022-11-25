import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
	const [avatar, setAvatar] = useState(data);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = avatar.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, avatar]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	const reviewDisplay = avatar.map((review, reviewIndex) => {
		const { id, image, name, title, quote } = review;
		let position = 'nextSlide';
		if (reviewIndex === index) {
			position = 'activeSlide';
		}
		if (
			reviewIndex === index - 1 ||
			(index === 0 && reviewIndex === avatar.length - 1)
		) {
			position = 'lastSlide';
		}
		return (
			<article className={position} key={id}>
				<img src={image} alt={title} className="image" />
				<h4 className="title">{name}</h4>
				<p className="title">{title}</p>
				<p className="text">{quote}</p>
			</article>
		);
	});

	return (
		<section className="section">
			<div className="title">
				<h2>Reviews</h2>
				<span>
					<FaQuoteRight className="icon" />
				</span>
			</div>

			<div className="section-center">
				{reviewDisplay}
				<button className="prev" onClick={() => setIndex(index - 1)}>
					<FiChevronLeft />
				</button>
				<button className="next" onClick={() => setIndex(index + 1)}>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
}

export default App;
