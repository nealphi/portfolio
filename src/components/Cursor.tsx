import React, { useState, useEffect } from 'react';
import "./../App.css";

const Cursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const onMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      document.addEventListener('mousemove', onMouseMove);
      return () => {
        document.removeEventListener('mousemove', onMouseMove);
      };
    }, []);
  
    return (
      <>
        <div
          className="cursor"
          style={{
            left: `${position.x-400}px`,
            top: `${position.y-500}px`,
          }}
        />
      </>
    );
  };
  
  export default Cursor;