import Countdown from '../../Components/Countdown/Countdown';
import './index.css';

const HomePage = () => {
	return (
		<div className=''>
			<div className='container'>
				<Countdown />
				<div className='tagline'>
					Get on the VIP list to be the first to know when we launch!
				</div>
			</div>
			<div className='email-input'>
				<label htmlFor=''>Email:</label>
				<input type='text' />
			</div>
		</div>
	);
};

export default HomePage;
