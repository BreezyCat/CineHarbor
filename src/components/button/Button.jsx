/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

import './button.scss';

const Button = (props) => {
  return (
    <button
      className={`button ${props.className}`}
      onClick={props.onClick? () => props.onClick() : null}>
        {props.children}
      </button>
  );
};

export const Outlinebutton = (props) => {
  return (
    <button
      className={`button-outline ${props.className}`}
      onClick={props.onClick? () => props.onClick() : null}>
        {props.children}
      </button>
  );
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;
