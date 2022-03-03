import { useEffect, useState } from 'react';

const calculateTimeLeft = () => {
	// get current year
	const year = new Date().getFullYear();
	console.log(year);
	let difference = +new Date(`03/15/${year}`) - +new Date();
	console.log('difference', difference);

	let timeLefty = {};

	if (difference > 0) {
		timeLefty = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	}

	return timeLefty;
};

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<span>
				{timeLeft[interval]} {interval}{' '}
			</span>,
		);
	});

	const [year] = useState(new Date().getFullYear());

	return (
		<div>
			<h1>
				<div>
					<h1>Emma's Resin Shop</h1>
					<h2>{year} Grand Opening</h2>
					<p style={{ fontSize: 20 }}>
						{' '}
						{timerComponents.length ? timerComponents : <span>Time's up!</span>}
					</p>
				</div>
				<div className='day'></div>
				<div className='hour'></div>
				<div className='minute'></div>
				<div className='day'></div>
			</h1>
		</div>
	);
};

export default Countdown;
