import { useParams } from 'react-router-dom';

import PageHeader from '../components/page-header/PageHeader';
import { genre as gnr } from '../api/tmdbApi';
import MovieGenre from '../components/movie-genre/MovieGenre';

const Genre = () => {
  const { genre } = useParams();
  const { category } = useParams();
  console.log(genre);
  return (
    <>
      <PageHeader>
        {genre === gnr.animation
          ? 'Animation'
          : gnr.fantasy
          ? 'Fantasy'
          : gnr.horror
          ? 'Horror'
          : 'All'}
      </PageHeader>
      <div className='container'>
        <div className='section mb-3'>
        <MovieGenre category={category} genre={genre} />
        </div>
      </div>
    </>
  );
};

export default Genre;
