import React from 'react';

import './SearchForm.scss';

import ResultsFilter from '../../core/resultsFilter/ResultsFilter';
import Button from '../../core/button/Button';

function SearchForm() {
    const title = 'Search by';
    const filters = ['TITLE', 'GENRE'];

    return (
        <React.Fragment>
            <h2 id="searchFormHeader" className="search-form__header">
                Find your movie
            </h2>
            <form>
                <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className="search-form__input"
                    aria-labelledby="searchFormHeader"
                />
                <div className="searc-form__actions">
                    <ResultsFilter
                        className="search-form__filter"
                        title={title}
                        filters={filters}
                    />
                    <Button type="button">Search</Button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default SearchForm;
