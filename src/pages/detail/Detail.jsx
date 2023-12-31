/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './detail.scss';
import CastList from './CastList';
import VideoList from './VideoList';
import MovieList from '../../components/movie-list/MovieList';

const Detail = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const detail = async () => {
      const response = await tmdbApi.getDetail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    detail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
        <div
          className='banner'
          style={{
            backgroundImage: `url(${apiConfig.originalImage(
              item.backdrop_path || item.poster_path
            )})`
          }}></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content-poster">
              <div className="movie-content-poster-img"
              style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
            </div>
            <div className="movie-content-info">
              <h1 className="title">
                {item.title || item.name}
              </h1>
              <div className="genres">
                {
                  item.genres && item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className='genres-item' >{genre.name}</span>
                  ))
                }
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section-header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList id = {item.id} />
            </div>
            <div className="section mb-3">
              <div className="section-header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
          </>
      )}
    </>
  );
}

export default Detail;
