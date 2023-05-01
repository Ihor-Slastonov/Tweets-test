import React, { useEffect, useState } from 'react';
import TweetList from '../../components/TweetList/TweetList';

import { Title, LoadMoreBtn, SectionTweets } from './TweetsPage.styled';

import { fetchTweets } from '../../services/tweetsApi';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-hot-toast';
import { Container } from '../../components/SharedLayout/SharedLayout.styled';

function TweetsPage() {
  const [tweets, setTweets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [pageLimit, setPageLimit] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const tweets = await fetchTweets(currentPage);
        if (tweets.length === 0) {
          setPageLimit(true);
          return toast("That's all the tweets for today.");
        }
        setTweets(prevTweets => [...prevTweets, ...tweets]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [currentPage]);

  const onLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
    setTimeout(() => {
      window.scrollBy({ top: 500, behavior: 'smooth' });
    }, 200);
  };

  return (
    <SectionTweets>
      <Container>
        <Title>GoIT Tweets</Title>
        {tweets && (
          <>
            <TweetList tweets={tweets} />
            {!pageLimit && (
              <LoadMoreBtn id="moreBtn" onClick={onLoadMore}>
                Load more
              </LoadMoreBtn>
            )}
          </>
        )}
        {isLoading && <Loader />}
      </Container>
    </SectionTweets>
  );
}

export default TweetsPage;
