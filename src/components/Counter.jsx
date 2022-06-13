import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';

const Counter = () => {
	const renderer = ({ minutes, seconds }) => {
		let timeMinutes = 'mins';
		let timeSeconds = 'segs';

		return (
			<div className="flex gap-4 counter-num">
				<div className="flex flex-col items-center min-w-18 p-2 text-black lg:p-4">
					<p className="text-xl lg:text-3xl">{minutes}</p>
					<p>{timeMinutes}</p>
				</div>

				<div className="flex flex-col items-center min-w-18 p-2 text-black lg:p-4">
					<p className="text-xl lg:text-3xl">{zeroPad(seconds)}</p>
					<p>{timeSeconds}</p>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="grid">
				<Countdown date={Date.now() + 900000} renderer={renderer} />
			</div>
		</>
	);
};

export default Counter;
