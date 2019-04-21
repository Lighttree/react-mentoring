import React from 'react';

import './SearchForm.scss';

import MovieFilter from '../core/MovieFilter';
import Button from '../core/Button';

function SearchForm() {
    const title = 'Search by';
    const filters = [
        'TITLE',
        'GENRE'
    ];

    return (
        <React.Fragment>
            <h2 id="searchFormHeader" className="search-form__header">Find your movie</h2>
            <form>
                <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className="search-form__input"
                    aria-labelledby="searchFormHeader"
                />
                <div className="searc-form__actions">
                    <MovieFilter
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
