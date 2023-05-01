import React, { useState } from 'react';
import TweetCard from './TweetCard/TweetCard';
import BackBtn from '../BackBtn/BackBtn';
import FilterDropdown from '../FilterDropdown/FilterDropdown';

import { List, NavContainer } from './TweetList.styled';
import BackToTopBtn from '../BackToTopBtn/BackToTopBtn';

function TweetList({ tweets }) {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = option => {
    setFilter(option.value);
  };

  const filteredTweets = tweets.filter(tweet => {
    if (filter === 'follow') {
      return localStorage.getItem(tweet.id)
        ? !JSON.parse(localStorage.getItem(tweet.id)).isFollowing
        : true;
    } else if (filter === 'following') {
      return localStorage.getItem(tweet.id)
        ? JSON.parse(localStorage.getItem(tweet.id)).isFollowing
        : false;
    } else {
      return true;
    }
  });

  return (
    <>
      <NavContainer>
        <BackBtn>Go back</BackBtn>
        <FilterDropdown
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
      </NavContainer>
      <List>
        {filteredTweets.map(tweet => (
          <TweetCard
            key={tweet.id}
            tweets={tweet.tweets}
            followers={tweet.followers}
            avatar={tweet.avatar}
            id={tweet.id}
          />
        ))}
      </List>
      <BackToTopBtn />
    </>
  );
}

export default TweetList;
