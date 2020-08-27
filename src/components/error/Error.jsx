import React from 'react';
import './Error.css';
export default function Error(props) {
	return (
		<div className='PageError'>
			<span role='img' aria-labelledby='img'>
				❌
			</span>{' '}
			{props.error.message}
			<span role='img' aria-labelledby='img'>
				😨
			</span>
		</div>
	);
}
