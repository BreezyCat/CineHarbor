import { Outlinebutton } from '../components/button/Button';
import { Link } from 'react-router-dom';
import BannerSlide from '../components/banner-slide/BannerSlide';
import MovieList from '../components/movie-list/MovieList';
import { category, movieType, tvType } from '../api/tmdbApi';
const Home = () => {
  return (
    <>
      <BannerSlide />
      <div className='container'>
        <div className='section mb-3'>
          <div className='section-header mb-2'>
            <h2 className='title-home'>Trending This Week</h2>
          </div>
          <MovieList
          category={category.movie}
            type={`trending`}
          />
        </div>

        <div className='section mb-3'>
          <div className='section-header mb-2'>
            <h2 className='title-home'>Popular Movies</h2>
            <Link to='/movie'>
              <Outlinebutton className='small'>View More</Outlinebutton>
            </Link>
          </div>
          <MovieList
            category={category.movie}
            type={movieType.popular}
          />
        </div>

        <div className='section mb-3'>
          <div className='section-header mb-2'>
            <h2 className='title-home'>Top Rated Movies</h2>
            <Link to='/movie'>
              <Outlinebutton className='small'>View More</Outlinebutton>
            </Link>
          </div>
          <MovieList
            category={category.movie}
            type={movieType.top_rated}
          />
        </div>

        <div className='section mb-3'>
          <div className='section-header mb-2'>
            <h2 className='title-home'>Animated Movies</h2>
            <Link to='/movie'>
              <Outlinebutton className='small'>View More</Outlinebutton>
            </Link>
          </div>
          <MovieList
            category={category.movie}
            genre={16}
          />
        </div>

        <div className='section mb-3'>
          <div className='section-header mb-2'>
            <h2 className='title-home'>Horror Movies</h2>
            <Link to='/movie'>
              <Outlinebutton className='small'>View More</Outlinebutton>
            </Link>
          </div>
          <MovieList
            category={category.movie}
            genre={27}
          />
        </div>

        <div className='section mb-3'>
          <div className='section-header mb-2'>
            <h2 className='title-home'>Popular Series</h2>
            <Link to='/tv'>
              <Outlinebutton className='small'>View More</Outlinebutton>
            </Link>
          </div>
          <MovieList
            category={category.tv}
            type={tvType.popular}
          />
        </div>

        <div className='section mb-3'>
          <div className='section-header mb-2'>
            <h2 className='title-home'>Top Rated Series</h2>
            <Link to='/tv'>
              <Outlinebutton className='small'>View More</Outlinebutton>
            </Link>
          </div>
          <MovieList
            category={category.tv}
            type={tvType.top_rated}
          />
        </div>

        <div className='section mb-3'>
          <div className='section-header mb-2'>
            <h2 className='title-home'>Animated Series</h2>
            <Link to='/movie'>
              <Outlinebutton className='small'>View More</Outlinebutton>
            </Link>
          </div>
          <MovieList
            category={category.tv}
            genre={16}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
