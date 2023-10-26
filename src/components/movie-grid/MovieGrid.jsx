/* eslint-disable react/prop-types */
import './movie-grid.scss';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import tmdbApi, { tvType, category, movieType } from '../../api/tmdbApi';
import MovieCard from '../movie-card/MovieCard';
import Button, { Outlinebutton } from '../button/Button';
import Input from '../input/Input';
import { useCallback } from 'react';

const MovieGrid = (props) => {
  const [item, setItem] = useState([]);

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMovieList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.on_the_air, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItem(response.results);
      setTotal(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMovieList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.on_the_air, { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setItem([...item, ...response.results]);
    setPage(page + 1);
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
};

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

export default MovieGrid;