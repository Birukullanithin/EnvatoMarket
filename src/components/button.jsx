import React from 'react';
import './nav.css';

function Button({ backgroundColor, color,px,py,fontWeight,fontSize, children }) {
  const style = {
    background: backgroundColor,
    color: color || 'black',
    textAlign: 'center',
    textDecoration: 'none',
    padding: `${py} ${px}`,
    border: 'none',
    fontWeight,
    fontSize
  };

  return (
    <button style={style} className="btn">
      {children}
    </button>
  );
}

export default Button;
