import React, { Component } from 'react';
import header from '../../../static/img/badge-header.svg';
import './BadgesAddPage.css';

// Components
import Badge from '../../../components/badge/Badge';
import BadgeForm from '../../../components/badgeForm/BadgeForm';
import api from '../../../api';
import Loading from '../../../components/loading/Loading';

export default class BadgeAddPage extends Component {
	state = {
		loading: false,
		error: null,
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: '',
		},
	};

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleSubmit = async (e) => {
		// console.log('handle submit');
		e.preventDefault();
		this.setState({
			loading: true,
			error: null,
		});
		try {
			await api.badges.create(this.state.form);
			this.setState({
				loading: false,
			});
			this.props.history.push('/badges');
		} catch (error) {
			this.setState({
				loading: false,
				error: error,
			});
		}
	};

	render() {
		if (this.state.loading) {
			return <Loading />;
		}
		return (
			<React.Fragment>
				<div className='BadgeNew__hero'>
					<img src={header} className='img-fluid' alt='' />
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<Badge
								firstName={this.state.form.firstName || 'FIRST_NAME'}
								lastName={this.state.form.lastName || 'LAST_NAME'}
								email={this.state.form.email || 'EMAIL'}
								jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
								twitter={this.state.form.twitter || 'twitter'}
							/>
						</div>
						<div className='col-6'>
							<h1>New Attendant</h1>
							<BadgeForm
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
								formValues={this.state.form}
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
