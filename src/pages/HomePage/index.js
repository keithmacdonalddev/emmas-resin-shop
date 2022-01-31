// import emmasLogo from '../../assets/logo.png';
import './index.css';

const HomePage = () => {
	return (
		<div className='container'>
			<h2>Coming Soon</h2>
			<h1>
				Emma's <span>Resin Shop</span>
				<div className='day'></div>
				<div className='hour'></div>
				<div className='minute'></div>
				<div className='day'></div>
			</h1>
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
