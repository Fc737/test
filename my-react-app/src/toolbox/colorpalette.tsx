import React, { useEffect, useRef, useState } from 'react';
import ColorImage from './image/color_palette_icon.png'

export interface Color {
  color: string;
  label: string;
}
//THE DIV IS THE ISSUE
export default function ColorPalette({renderOrNot}:{renderOrNot: boolean}): JSX.Element {
   const [color, setColor] = useState('white');
   const [render, setRender] = useState(renderOrNot);

   const whichButton = useRef<string>('');
   //const [buttonclick, setButtonclick] = useState(false);
   const paLette: Color[] = [
       { color: '#FF0000', label: 'red' },      
       { color: '#00FF00', label: 'green' },    
       { color: '#3399FF', label: 'blue' },     
       { color: '#FFCC00', label: 'yellow' },   
       { color: '#00FFFF', label: 'cyan' },     
       { color: '#E5008D', label: 'magenta' },  
       { color: '#000000', label: 'black' },     
       { color: '#FFFFFF', label: 'white' },     
       { color: '#808080', label: 'gray' },      
       { color: '#FFA500', label: 'orange' },    
       { color: '#800080', label: 'purple' },    
       { color: '#FF69B4', label: 'pink' },     
   ];

   //THE ERROR IS IN THE RENDER OF RENDER AND RENDERORNOT USESTATE VALUE RENDER CAN BECOME FALSE WHILE THE OTHER IS TRUE WHICH CREATE BUGS
  function colorButtonClicked(square: Color) {
    whichButton.current = 'color';
    setColor(square.color);
  }
  
  useEffect(() => {
    if(!renderOrNot){
      whichButton.current = '';
    }
    
  }, [renderOrNot]);
  
  //console.log('Initial whichButton:', whichButton.current);
  const buttonClicked = () => {
    if(whichButton.current == 'color') {
      setRender(false);
    }
    else if(whichButton.current == '' && renderOrNot == false){
      setRender(true);
    }
    else{
        setRender((prevRender)=> !prevRender);  
    }
    whichButton.current = 'ButtonClicked';
  }

  return (
    <div>
       <button 
          onClick={buttonClicked} 
          style={{
              borderRadius:0, 
              display: 'flex', 
              justifyItems: 'center',
              borderBottom: render && renderOrNot ? '3px solid black' : 'none',
              borderBottomWidth: render && renderOrNot ? '3px' : 'none'
            }}>
        <img
          src={ColorImage}
          height='20px'
          width='20px'
          style={{ 
            objectFit: 'contain', 
            cursor: 'pointer',
            margin: 0,
          }}
        />
        <p style={{fontSize: '12px', marginLeft: '8px', marginTop: '5px'}}>Color</p>
      </button> 
      {render && renderOrNot && (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', justifyContent: 'center', backgroundColor: 'lightgray'}}>
          {paLette.map(row =>{
              return (
                <button
                  style={{
                    backgroundColor: row.color,
                    width: '60px',  
                    height: '10px', 
                    borderRadius: '5px',
                    color: 'black',  
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    border: '1px solid black',
                    fontSize: '10px', 
                  }}
                  onClick={() => colorButtonClicked(row)}
                  key={row.label}>{row.label}</button>
              );
            })}
        </div>
    )}
    </div>
  );
}