import React, { Component } from 'react';
import header from '../../../static/img/badge-header.svg';
import './BadgesEditPage.css';

// Components
import Badge from '../../../components/badge/Badge';
import BadgeForm from '../../../components/badgeForm/BadgeForm';
import api from '../../../api';
import Loading from '../../../components/loading/Loading';

export default class BadgeEditPage extends Component {
	state = {
		loading: true,
		error: null,
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: '',
		},
	};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null });
		try {
			const data = await api.badges.read(this.props.match.params.badgeId);
			this.setState({
				loading: false,
				form: data,
			});
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
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
			await api.badges.update(this.props.match.params.badgeId, this.state.form);
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
				<div className='BadgeEdit__hero'>
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
							<h1>Edit Attendant</h1>

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
