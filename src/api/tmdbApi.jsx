import axiosClient from './axiosClient';

export const category = {
  movie: 'movie',
  tv: 'tv',
  all: 'all'
};

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air',
};

export const genre = {
  animation: 16,
  fantasy: 14,
  horror: 27,
}

const tmdbApi = {
  
  getTrendingAll: ( cate, params) => {
    const url = 'trending/' + category[cate] + `/week`;
    return axiosClient.get(url, { params });
  },  

  getAllTV: (type, params) => {
    const url = `discover/tv`;
    return axiosClient.get(url, {
      params: {
        with_genres: genre[type],
        ...params 
      }
    });
  },
  
  getAllMovie: (type, params) => {
    const url = `discover/movie`;
    return axiosClient.get(url, {
      params: {
        with_genres: genre[type],
        ...params 
      }
    });
  },

  getMovieList: (type, params) => {
    const url = 'movie/' + movieType[type];
    return axiosClient.get(url, params);
  },

  getTvList: (type, params) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, params);
  },

  getVideos: (cate, id) => {
    const url = category[cate] + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },

  search: (cate, params) => {
    const url = 'search/' + category[cate];
    return axiosClient.get(url, params);
  },
  
  getDetail: (cate, id, params) => {
    const url = category[cate] + '/' + id;
    return axiosClient.get(url, params);
  },
  
  credits: (cate, id) => {
    const url = category[cate] + '/' + id + '/credits';
    return axiosClient.get(url, { params: {} });
  },
  
  similar: (cate, id) => {
    const url = category[cate] + '/' + id + '/similar';
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
