import React from 'react';
import PropTypes from 'prop-types';

function ResultsFilter({ className, title, filters }) {
    const filtersList = filters.map((filter, index) => (
        <React.Fragment key={`filterRadioFragment_${filter}`}>
            <input
                key={`filterRadioInput_${filter}`}
                type="radio"
                name={`filter_${title.split(' ').join('_')}`}
                id={`filterRadio_${filter}`}
                value={filter}
                className="results-filter__radio"
                defaultChecked={index === 0}
            />
            <label
                key={`filterRadioLabel_${filter}`}
                htmlFor={`filterRadio_${filter}`}
                className="results-filter__radio-label"
            >
                {filter}
            </label>
        </React.Fragment>
    ));

    return (
        <div
            className={`results-filter ${className}`}
            role="radiogroup"
            aria-labelledby="radiogroupTitle"
        >
            <h3 id="radiogroupTitle" className="results-filter__title">
                {title}
            </h3>
            {filtersList}
        </div>
    );
}

ResultsFilter.defaultProps = {
    className: ''
};

ResultsFilter.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ResultsFilter;
