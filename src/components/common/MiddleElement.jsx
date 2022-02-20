import React, { isValidElement, cloneElement } from 'react';
import PropTypes from 'prop-types';

const middleDiv = (
    <div className="w-full h-full grid place-items-center"></div>
);

export function MiddleElement({ children, className }) {
    if (!isValidElement) return (<></>);

    return cloneElement(
        middleDiv,
        [className],
        children
    );
}

export default MiddleElement;

MiddleElement.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string
};