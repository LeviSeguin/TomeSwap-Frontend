import React, { useState } from 'react';
import styles from '../styles/ListingsSearchBar.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/listings?query=${query}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search listings..."
        value={query}
        onChange={handleChange}
        className={styles.SearchBar}
      />
    </form>
  );
};

export default SearchBar;
