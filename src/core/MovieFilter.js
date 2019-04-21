import React from 'react';
import PropTypes from 'prop-types';


function MovieFilter({ className, title, filters }) {
    const filtersList = filters.map((filter, index) => (
        <React.Fragment key={`filterRadioFragment_${filter}`}>
            <input
                key={`filterRadioInput_${filter}`}
                type="radio"
                name={`filter_${title.split(' ').join('_')}`}
                id={`filterRadio_${filter}`}
                value={filter}
                className="movie-filter__radio"
                defaultChecked={index === 0}
            />
            <label
                key={`filterRadioLabel_${filter}`}
                htmlFor={`filterRadio_${filter}`}
                className="movie-filter__radio-label"
            >
                { filter }
            </label>
        </React.Fragment>
    ));

    return (
        <div className={`movie-filter ${className}`} role="radiogroup" aria-labelledby="radiogroupTitle">
            <h3 id="radiogroupTitle" className="movie-filter__title">{ title }</h3>
            {filtersList}
        </div>
    );
}

MovieFilter.defaultProps = {
    className: ''
};

MovieFilter.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MovieFilter;
