/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import tmdbApi, { genre, category } from '../../api/tmdbApi';
import MovieCard from '../movie-card/MovieCard';
import Button, { Outlinebutton } from '../button/Button';
import Input from '../input/Input';

const MovieGenre = (props) => {
  const [item, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotalPages] = useState(1);

  const { keyword } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let response = null;
        const params = { };
        if (keyword === undefined) {
          switch (props.genre) {
            case genre.animation:
              response = await tmdbApi.getAllMovie(props.type, {
                with_genres: genre.animation,
              });
              break;
            case genre.fantasy:
              response = await tmdbApi.getAllMovie(props.type, {
                with_genres: genre.fantasy,
              });
              break;
            case genre.horror:
              response = await tmdbApi.getAllMovie(props.type, {
                with_genres: genre.horror,
              });
              break;
            default:
              response = await tmdbApi.getAllMovie(props.type, params);
          }
        } else {
          const params = {
            query: keyword,
          };
          response = await tmdbApi.search(props.category, params);
        }

        setItems([response.results]);
        setTotalPages(response.total_pages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchItems();
  }, [props.genre, props.type, props.category, keyword]);

  const loadMore = async () => {
    try {
      const nextPage = page + 1;
      let response = null;
      const params = { page: nextPage };

      if (keyword === undefined) {
        switch (props.genre) {
          case genre.animation:
              response = await tmdbApi.getAllMovie(props.type, {
                with_genres: genre.animation,
              });
              break;
            case genre.fantasy:
              response = await tmdbApi.getAllMovie(props.type, {
                with_genres: genre.fantasy,
              });
              break;
            case genre.horror:
              response = await tmdbApi.getAllMovie(props.type, {
                with_genres: genre.horror,
              });
              break;
            default:
              response = await tmdbApi.getAllMovie(props.type, params);
        }
      } else {
        const searchParams = {
          query: keyword,
          page: page + 1,
        };
        response = await tmdbApi.search(props.category, searchParams);
      }

      setItems([...item, ...response.results]);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching more data:', error);
    }
  };

  return (
    <>
      <div className='section input-search mb-3'>
        <MovieSearch
          category={props.category}
          keyword={keyword}
        />
      </div>

      <div className='movie-grid'>
        {item.map((item, i) => (
          <MovieCard
            category={props.category}
            item={item}
            key={i}
          />
        ))}
      </div>
      {page < total ? (
        <div className='movie-grid-loadmore'>
          <Outlinebutton
            className='small'
            onClick={loadMore}>
            Load More
          </Outlinebutton>
        </div>
      ) : null}
    </>
  );
}

const MovieSearch = (props) => {
    const navigate = useNavigate();
  
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
  
    const goSearch = useCallback(() => {
      if (keyword.trim().length > 0) {
        navigate(`/${category[props.category]}/search/${keyword}`);
      }
    }, [keyword, props.category, navigate]);
  
    useEffect(() => {
      const enter = (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
          goSearch();
        }
      };
      document.addEventListener('keyup', enter);
  
      return () => {
        document.removeEventListener('keyup', enter);
      };
    }, [keyword, goSearch]);
  
    const placeholderText =
      props.category === category.movie ? 'Search Your Favorite Movies' : 'Search Your Favorite Series';
  
    return (
      <div className='movie-search'>
        <Input
          type='text'
          placeholder={placeholderText}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button
          className='small'
          onClick={goSearch}>
          Search
        </Button>
      </div>
    );
  };
  

export default MovieGenre;
