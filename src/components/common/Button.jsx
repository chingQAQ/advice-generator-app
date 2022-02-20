import React, {memo} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Icon } from './Icon';

export function Button({ children, className, onClick }) {
    return (
        <button
            className={clsx(
                'min-w-10 min-h-10 p-4',
                'rounded-full bg-primary-green',
                className
            )}
            onClick={onClick}
        >{children}</button>
    );
}

export function _DiceButton({ className, onClick }) {
    return (
        <Button className={className} onClick={onClick}>
            <Icon.Dice className="group-hover:animate-pulse"></Icon.Dice>
        </Button>
    );
}

export const DiceButton = memo(_DiceButton);

export default Button;

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    className: PropTypes.string,
    onClick: PropTypes.func
};

_DiceButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};