import ReactLoading from 'react-loading';

export default function Loading({ type, color }) {
	return (
		<div className="loading">
			<ReactLoading
				type="spinningBubbles"
				color="#b5b5b5"
				height={'50px'}
				width={'50px'}
				className="loading"
			/>
		</div>
	);
}
