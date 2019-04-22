import React from 'react';
import PropTypes from 'prop-types';

import './SearchResultsList.scss';

import MovieCard from './MovieCard';

function SearchResultsList({ searchResults }) {
    if (!searchResults.length) {
        return (
            <div className="search-results search-results--no-results">
                No Results Found !
            </div>
        );
    }

    return (
        <div className="search-results">
            {searchResults.map(result => (
                <MovieCard
                    className="search-results__item"
                    key={result.id}
                    movie={result}
                />
            ))}
        </div>
    );
}

SearchResultsList.propTypes = {
    searchResults: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchResultsList;
