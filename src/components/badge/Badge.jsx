import React, {Component} from 'react';
import './Badge.css';

import confLogo from '../../static/img/badge-header.svg';
import Gravatar from '../gravatar//Gravatar';

export default class Badge extends Component {
  render() {
    const {firstName, lastName, email, jobTitle, twitter} = this.props;
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='' />
        </div>
        <div className='Badge__section-name'>
          <Gravatar className='Badge__avatar' email={email} />
          <h1>
            {firstName}
            <br />
            {lastName}
          </h1>
        </div>
        <div className='Badge__section-info'>
          <h3 className='text-center'>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>
        <div></div>
        <div className='Badge__footer pb-4'>#platziconf</div>
      </div>
    );
  }
}
