/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import ErrorBoundary from '../error/ErrorBoundary';
import Button, { Outlinebutton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';

import './banner-slide.scss';

const BannerSlide = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMovieList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 4));
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
    getMovies();
  }, []);

  return (
    <ErrorBoundary>
      <div className='banner-slide'>
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}>
          {movieItems.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <BannerSlideItem
                  item={item}
                  className={`${isActive ? 'active' : ''}`}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ErrorBoundary>
  );
};

const BannerSlideItem = (props) => {
  let navigate = useNavigate();
  const [isModalActive, setModalActive] = useState(false);
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const ModalTrailer = async () => {
    try {
      const modal = document.querySelector(`#modal_${item.id}`);
      const videos = await tmdbApi.getVideos(category.movie, item.id);
      if (videos.results.length > 0) {
        const videoSrc =
          'https://www.youtube.com/embed/' + videos.results[0].key;
        setModalActive(true);
        modal
          .querySelector('.modal-content > iframe')
          .setAttribute('src', videoSrc);
      } else {
        modal.querySelector('.modal-content').innerHTML = 'No trailer';
      }
    } catch (error) {
      console.error('An error occurred while fetching the video:', error);
    }
  };

  return (
    <div
      className={`banner-slide-item ${props.className}`}
      style={{
        backgroundImage: `url(${background})`,
      }}>
      <div className='banner-slide-item-content container'>
        <div className='banner-slide-item-content-info'>
          <h2 className='title'>{item.title}</h2>
          <div className='overview'>{item.overview}</div>
          <div className='buttons'>
            <Button onClick={() => navigate(`/movie/${item.id}`)}>
              Watch Now
            </Button>
            <Outlinebutton onClick={ModalTrailer}>Watch Trailer</Outlinebutton>
          </div>
        </div>
        <div className='banner-slide-item-content-poster'>
          <img
            src={apiConfig.w500Image(item.poster_path)}
            alt=''
          />
        </div>
      </div>
      <Modal
        active={isModalActive}
        id={`modal_${item.id}`}
        onModalClose={() => {
          const iframe = document.getElementById(`iframe_${item.id}`);
          if (iframe) {
            iframe.setAttribute('src', '');
          }
          setModalActive(false);
        }}>
        <ModalContent>
          <iframe
            id={`iframe_${item.id}`}
            width='100%'
            height='500px'
            title='trailer'></iframe>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BannerSlide;
