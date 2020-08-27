import React, { Component } from 'react';
export default class BadgeForm extends Component {
	// handleClick = (e) => {
	// 	e.preventDefault();
	// 	console.log('button save');
	// };

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.props.onSubmit}>
					<div className='form-group'>
						<label>First Name</label>
						<input
							type='text'
							className='form-control'
							name='firstName'
							onChange={this.props.onChange}
							value={this.props.formValues.firstName}
						/>
					</div>
					<div className='form-group'>
						<label>Last Name</label>
						<input
							type='text'
							className='form-control'
							name='lastName'
							onChange={this.props.onChange}
							value={this.props.formValues.lastName}
						/>
					</div>
					<div className='form-group'>
						<label>Email</label>
						<input
							type='email'
							className='form-control'
							name='email'
							onChange={this.props.onChange}
							value={this.props.formValues.email}
						/>
					</div>
					<div className='form-group'>
						<label>Job Title</label>
						<input
							type='text'
							className='form-control'
							name='jobTitle'
							onChange={this.props.onChange}
							value={this.props.formValues.jobTitle}
						/>
					</div>
					<div className='form-group'>
						<label>Twitter</label>
						<input
							type='text'
							className='form-control'
							name='twitter'
							onChange={this.props.onChange}
							value={this.props.formValues.twitter}
						/>
					</div>
					<button className='btn btn-primary' onClick={this.handleClick}>
						Save
					</button>
					{this.props.error && (
						<p className='text-danger'>{this.props.error.message}</p>
					)}
				</form>
			</React.Fragment>
		);
	}
}
