import React from 'react';

const Button = ({ onClick, text, type }) => {
    return (
      <button
        className="block 
        border
        border-gray-400
        bg-white
        rounded-lg
        hover:shadow-md
        hover:border-opacity-0
        transform
        transition-all duration-200
        text-gray-700
        text-sm
        text-center
        font-sans
        py-3
        px-8"
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;