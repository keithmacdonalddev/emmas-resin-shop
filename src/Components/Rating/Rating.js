const Rating = ({ value, text, color }) => {
	return (
		<div className='rating'>
			<span>
				<i
					className={
						value >= 1
							? 'fas fa-star'
							: value >= 0.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
					style={{ color }}
					aria-hidden='true'></i>
			</span>
			<span>
				<i
					className={
						value >= 2
							? 'fas fa-star'
							: value >= 0.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
					style={{ color }}
					aria-hidden='true'></i>
			</span>
			<span>
				<i
					className={
						value >= 3
							? 'fas fa-star'
							: value >= 0.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
					style={{ color }}
					aria-hidden='true'></i>
			</span>
			<span>
				<i
					className={
						value >= 4
							? 'fas fa-star'
							: value >= 0.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
					style={{ color }}
					aria-hidden='true'></i>
			</span>
			<span>
				<i
					className={
						value >= 5
							? 'fas fa-star'
							: value >= 0.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
					style={{ color }}
					aria-hidden='true'></i>
			</span>
			<span>{text && text}</span>
		</div>
	);
};

Rating.defaultProps = { color: '#ffc107' };
export default Rating;
