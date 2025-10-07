import React, { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Calculator.scss';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize VanillaTilt when component mounts
    if (containerRef.current) {
      VanillaTilt.init(containerRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2
      });
    }

    // Cleanup function to destroy VanillaTilt instance
    return () => {
      if (containerRef.current && containerRef.current.vanillaTilt) {
        containerRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  const handleClear = () => {
    setDisplay('');
  };

  const handleInput = (value) => {
    setDisplay(prev => prev + value);
  };

  const handleEquals = () => {
    try {
      // Using Function constructor instead of eval for better security
      const result = Function('"use strict"; return (' + display + ')')();
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const renderButton = (value, onClick, className = '') => {
    return (
      <span 
        className={`num ${className}`} 
        onClick={onClick}
      >
        {value}
      </span>
    );
  };

  return (
    <div className="container" ref={containerRef}>
      <div className="calculator">
        <textarea 
          name="txt" 
          readOnly 
          className="value" 
          rows="3"
          value={display}
        />
        
        {renderButton('c', handleClear, 'clear')}
        {renderButton('/', () => handleInput('/'), '')}
        {renderButton('*', () => handleInput('*'), '')}
        
        {renderButton('7', () => handleInput('7'), '')}
        {renderButton('8', () => handleInput('8'), '')}
        {renderButton('9', () => handleInput('9'), '')}
        {renderButton('-', () => handleInput('-'), '')}
        
        {renderButton('4', () => handleInput('4'), '')}
        {renderButton('5', () => handleInput('5'), '')}
        {renderButton('6', () => handleInput('6'), '')}
        {renderButton('+', () => handleInput('+'), 'plus')}
        
        {renderButton('1', () => handleInput('1'), '')}
        {renderButton('2', () => handleInput('2'), '')}
        {renderButton('3', () => handleInput('3'), '')}
        
        {renderButton('0', () => handleInput('0'), '')}
        {renderButton('00', () => handleInput('00'), '')}
        {renderButton('.', () => handleInput('.'), '')}
        {renderButton('=', handleEquals, 'equal')}
      </div>
    </div>
  );
};

export default Calculator;
