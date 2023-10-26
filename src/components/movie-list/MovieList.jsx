/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import { useEffect, useState } from 'react';

import './movie-list.scss';

import tmdbApi, { category, genre } from '../../api/tmdbApi';
import MovieCard from '../movie-card/MovieCard';

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            response =
              props.genre === 16
                ? await tmdbApi.getAllMovie(props.type, {
                    with_genres: genre.animation,
                  })
                : props.genre === 27
                ? await tmdbApi.getAllMovie(props.type, {
                    with_genres: genre.horror,
                  })
                : props.type === 'trending'
                ? await tmdbApi.getTrendingAll(props.category, { params})
                : await tmdbApi.getMovieList(props.type, { params });

            break;
          default:
            props.genre === 16
              ? (response = await tmdbApi.getAllTV(props.type, {
                  with_genres: genre.animation,
                }))
              : (response = await tmdbApi.getTvList(props.type, { params }));
        }
      }
       else {
        response = await tmdbApi.similar(props.category, props.id);
      }

      setItems(response.results);
    };
    getList();
  }, [props.type, props.category, props.id, props.genre]);

  return (
    <div className='movie-list'>
      <Swiper
        modules={[Mousewheel]}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        mousewheel={true}
        speed={300}
        effect='slide'>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard
              item={item}
              category={props.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string,
  type: PropTypes.string,
  genre: PropTypes.number,
};

export default MovieList;
