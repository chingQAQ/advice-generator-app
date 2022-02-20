import React from 'react';
import PropTypes from 'prop-types';

export function Advice({ children }) {
    return (
        <div className="text-[28px] font-extrabold">
            {`"${children}"`}
        </div>
    );
}

export default Advice;

Advice.propTypes = {
    children: PropTypes.string
};
