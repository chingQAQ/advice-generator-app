import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export function Card({ children, className }) {
    return (
        <section className={
            clsx(
                'relative',
                'flex flex-col items-center p-8 w-full',
                'bg-neutral-blue',
                'rounded-lg shadow-xl',
                'space-y-6',
                className
            )
        }>
            {children}
        </section>
    );
}

export default Card;

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    className: PropTypes.string
};
