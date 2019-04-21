import React from 'react';
import 'normalize.css';

import './App.scss';

import ErrorBoundary from './core/ErrorBoundary';
import MovieSearch from './search/SearchForm';

function App() {
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
                <div className="container">
                Some content
                </div>
            </main>
            <footer className="app__footer">
                <div className="container app__logo">
                    netflixroulette
                </div>
            </footer>
        </div>
    );
}

export default App;
