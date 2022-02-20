import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';

export function Advice({ children }) {
    return (
        <div className="text-[28px] font-extrabold">
            {
                isValidElement(children)
                    ? children
                    : `{"${children}"}`
            }
        </div>
    );
}

export default Advice;

Advice.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
};
