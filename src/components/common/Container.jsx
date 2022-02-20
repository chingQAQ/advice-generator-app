import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export function Container({ children, className }) {
    return (
        <div className={clsx('container', className)}>
            {children}
        </div>
    );
}

export default Container;

Container.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
};