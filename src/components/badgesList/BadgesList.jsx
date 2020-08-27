import React, {useState, useMemo} from 'react';
import './BadgesList.css';
import {Link} from 'react-router-dom';
import Gravatar from '../gravatar/Gravatar';

function useSearchBadges(badges) {
  const [query, setQuery] = useState('');
  const [filteredBadges, setFilteredBadges] = useState(badges);
  useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);
  return {query, setQuery, filteredBadges};
}

export default function BadgesList(props) {
  const badges = props.badges;

  const {query, setQuery, filteredBadges} = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className='form-group'>
          <label htmlFor=''>Filter Badges</label>
          <input
            type='text'
            className='form-control'
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className='btn btn-primary' to='/badges/add'>
          Create a new badge
        </Link>
      </div>
    );
  }
  return (
    <div className='BadgesList'>
      <div className='form-group'>
        <label htmlFor=''>Filter Badges</label>
        <input
          type='text'
          className='form-control'
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className='list-unstyled'>
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id} className='BadgesListItem'>
              <Link
                className='text-reset text-decoration-none'
                to={`/badges/${badge.id}`}
              >
                <div className='row container'>
                  <div className='col-3'>
                    <Gravatar
                      className='BadgesListItem__avatar'
                      email={badge.email}
                    />
                  </div>
                  <div className='col-9'>
                    <div className='ml-5'>
                      <strong>
                        {badge.firstName} {badge.lastName}
                      </strong>
                    </div>
                    <div className='Twitter__name ml-5'>@{badge.twitter}</div>
                    <div className='ml-5'>{badge.jobTitle}</div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
