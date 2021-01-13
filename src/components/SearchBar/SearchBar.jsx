import { useState } from 'react';
import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
// import '../css/styles.css';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Please enter a valid query string');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        value={query}
        onChange={handleChange}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}

// SearchForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
