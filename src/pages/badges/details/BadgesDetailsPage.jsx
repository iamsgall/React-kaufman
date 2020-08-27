import React, {useState} from 'react';
import confLogo from '../../../static/img/platziconf-logo.svg';
import Badge from '../../../components/badge/Badge';
import {Link} from 'react-router-dom';
import './BadgesDetailsPage.css';
import DeleteBadgeModal from '../../../components/deleteBadge/DeleteBadgeModal';

export default function BadgesDetailsPage(props) {
  const {id, firstName, lastName, email, jobTitle, twitter} = props.badge;

  function useIncreaseCount(max) {
    const [count, setCount] = useState(0);

    if (count > max) {
      setCount(0);
    }
    return [count, setCount];
  }

  const [count, setCount] = useIncreaseCount(3);

  return (
    <React.Fragment>
      <div className='BadgeDetails__hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={confLogo} alt='' />
            </div>
            <div className='col-6 BadgeDetails__hero-attendant-name'>
              <h1>
                {firstName} {lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <Badge
              firstName={firstName}
              lastName={lastName}
              email={email}
              jobTitle={jobTitle}
              twitter={twitter}
            />
          </div>
          <div className='col-6'>
            <button
              className='btn btn-warning'
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Increase Count: {count}
            </button>
            <h2>Actions</h2>
            <div className='btn btn-primary mb-4'>
              <Link className='text-white' to={`/badges/${id}/edit`}>
                Edit
              </Link>
            </div>
            <div>
              <button
                onClick={props.onOpenModal}
                className='btn btn-danger mb-4'
              >
                Delete
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
