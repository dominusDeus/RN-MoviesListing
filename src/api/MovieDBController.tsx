import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'ab6eaf3ca78126a0d9ac9c2491b7bfde',
    language: 'en-US',
  },
});

export default movieDB;
