import React from 'react';
import 'normalize.css';

import './App.scss';

import ErrorBoundary from './core/ErrorBoundary';
import MovieSearch from './search/searchForm/SearchForm';
import SearchResultsList from './search/searchResults/SearchResultsList';
import SearchResultsBar from './search/searchResults/SearchResultsBar';
import movies from './fixtures/movie';

function App() {
    const searchType = 'title';

    return (
        <div className="app">
            <header className="app__header">
                <div className="container">
                    <h1 className="app__logo app__logo--header">
                        netflixroulette
                    </h1>
                    <ErrorBoundary>
                        <MovieSearch />
                    </ErrorBoundary>
                </div>
            </header>
            <main className="app__main">
                <div className="app__search-results-bar">
                    <div className="container">
                        <ErrorBoundary>
                            <SearchResultsBar
                                searchResults={movies}
                                type={searchType}
                            />
                        </ErrorBoundary>
                    </div>
                </div>
                <div className="container">
                    <ErrorBoundary>
                        <SearchResultsList searchResults={movies} />
                    </ErrorBoundary>
                </div>
            </main>
            <footer className="app__footer">
                <div className="container app__logo">netflixroulette</div>
            </footer>
        </div>
    );
}

export default App;
