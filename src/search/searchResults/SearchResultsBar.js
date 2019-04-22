import React from 'react';
import PropTypes from 'prop-types';

import './SearchResultsBar.scss';

import ResultsFilter from '../../core/resultsFilter/ResultsFilter';

function SearchResultsStatusBar({ type, searchQuery, searchResults }) {
    const filters = ['RELEASE_DATE', 'RATING'];

    const filtersNames = filters.map(filter =>
        filter
            .toLowerCase()
            .split('_')
            .join(' ')
    );

    const byTitleResultsBar = (
        <React.Fragment>
            <span className="search-results-bar__count">
                {searchResults.length} movies found
            </span>
            <ResultsFilter
                className="search-results-bar__filter"
                title="Sort by"
                filters={filtersNames}
            />
        </React.Fragment>
    );

    const byGenereResultsBar = (
        <span className="search-results-bar__genre">
            Films by {searchQuery}
        </span>
    );

    if (!searchResults.length) {
        return <div className="search-results-bar" />;
    }

    return type === 'genre' ? byGenereResultsBar : byTitleResultsBar;
}

SearchResultsStatusBar.defaultProps = {
    searchQuery: ''
};

SearchResultsStatusBar.propTypes = {
    type: PropTypes.string.isRequired,
    searchQuery: PropTypes.string,
    searchResults: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchResultsStatusBar;
