import React, { Component } from 'react';
import './Loading.css';
import Loader from '../loader/Loader';

export default class Loading extends Component {
	render() {
		return (
			<div className='PageLoading'>
				<Loader />
			</div>
		);
	}
}
