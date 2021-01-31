import SearchBar from '../../components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import FetchMovieRequest from '../../components/FetchMovieRequest/FetchMovieRequest';
import 'react-toastify/dist/ReactToastify.css';

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('query') ?? '';
    setQuery(searchQuery, query);
  }, [location.search, query]);

  const handleFormSubmit = (query) => {
    setQuery(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <ToastContainer autoClose={3000} />
      <FetchMovieRequest query={query} />
    </>
  );
}
