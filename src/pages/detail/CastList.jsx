/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const CastList = (props) => {
  const { category } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const response = await tmdbApi.credits(category, props.id);
      setCasts(response.cast.slice(0, 5));
    };
    getCast();
  }, [category, props.id]);

  return (
    <div className='casts'>
      {casts.map((item, i) => (
        <div
          key={i}
          className='casts-item'>
          <div
            className='casts-item-img'
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}></div>
          <p className='casts-item-name'>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
