import Countdown from '../../Components/Countdown';
import './index.css';

const HomePage = () => {
	return (
		<div className='container'>
			<Countdown />
			<div className='tagline'>
				Get on the VIP list to be the first to know when we launch!
			</div>
			<div className='email-input'>
				<label htmlFor=''>Email:</label>
				<input type='text' />
			</div>
			<div className='test'></div>
		</div>
	);
};

export default HomePage;
