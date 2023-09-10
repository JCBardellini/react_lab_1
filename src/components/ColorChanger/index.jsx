import React, { useState } from 'react';
import './index.css'

const ColorChanger = () => {

    const [backgroundColor, setBackgroundColor] = useState("red")
    
    const bgColorChanger = ["red", "blue", "yellow", "green", "purple"];

    const changeColor = (color) => {

        const num = Math.floor(Math.random() * bgColorChanger.length);

        const randomColor = bgColorChanger[num];

        setBackgroundColor(randomColor);
    }

  return (
    <>
    <button className={backgroundColor} onClick={changeColor}>Background Color</button>
    </>
  )
}

export default ColorChanger