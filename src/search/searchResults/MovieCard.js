import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';

function MovieCard({ movie, className }) {
    return (
        <div className={`movie-card ${className}`}>
            <img src={movie.poster_path} alt="movie poster" />
        </div>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieCard;
