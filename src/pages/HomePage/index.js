import Countdown from '../../Components/Countdown/Countdown';
import './index.css';
import products from '../../products';
import Product from '../../Components/Product/Product';
import { Row, Col } from 'react-bootstrap';

const HomePage = () => {
	return (
		<div className=''>
			<div className='section-1'>
				<div className='container'>
					<Countdown />
					<div className='tagline'>
						Get on the VIP list to be the first to know when we launch!
					</div>
					<div className='email-input'>
						<label htmlFor=''>Email:</label>
						<input type='text' />
					</div>
				</div>
			</div>
			<Row>
				{products.map((product) => (
					<Col key={product.id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default HomePage;
