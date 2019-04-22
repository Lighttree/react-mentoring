import React from 'react';
import PropTypes from 'prop-types';

import './SearchResultsList.scss';

function SearchResultsList({ searchResults }) {
    if (!searchResults.length) {
        return (
            <div className="search-results search-results--no-results">
                No Results Found !
            </div>
        );
    }

    return <div>tile card</div>;
}

SearchResultsList.propTypes = {
    searchResults: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchResultsList;
