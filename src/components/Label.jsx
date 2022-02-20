import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export function Label({ number }) {
    const parse = parseInt(number, 10);

    let output = number;

    if (Number.isNaN(parse)) {
        output = 'Daily';
    } 

    return (
        <em className={clsx(
            'not-italic text-primary-green tracking-[0.25rem] text-xs font-extrabold',
        )}> ADVICE #{output}</em>
    );
}

export default Label;

Label.propTypes = {
    number: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
};