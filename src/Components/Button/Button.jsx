import React from 'react'
import './Button.scss'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

const Button = ({
  children, 
  type,
  onClick, 
  buttonStyle, 
  buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    // <Link to='404'>
      <button className={`btnn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick} 
      type={type}
      >
      {children}</button>
    // {/* </Link> */}
  )
}

export default Button