import React, { useEffect, useRef, useState } from 'react';
import ColorImage from '/image/color_palette_icon.png';


export interface Color {
  color: string;
  label: string;
}
//THE DIV IS THE ISSUE
export default function ColorPalette({ renderOrNot }: { renderOrNot: boolean }): JSX.Element {
  const [color, setColor] = useState('black');
  const [render, setRender] = useState(renderOrNot);
  const whichButton = useRef<string>('');

  /*
      setup the colors for the color Palette
   */
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

  function colorButtonClicked(square: Color) {
    whichButton.current = 'color';
    setColor(square.color);
  }

  useEffect(() => {
    if (!renderOrNot) {
      whichButton.current = '';
    }
  }, [renderOrNot]);

  const buttonClicked = () => {
    if (whichButton.current == 'color') {
      setRender(false);
    } else if (whichButton.current == '' && renderOrNot == false) {
      setRender(true);
    } else {
      setRender(prevRender => !prevRender);
    }
    whichButton.current = 'ButtonClicked';
  };

  return (
    <div>
      <button
        onClick={buttonClicked}
        style={{
          borderRadius: 0,
          display: 'flex',
          justifyItems: 'center',
          backgroundColor: 'transparent',
          borderBottom: render && renderOrNot ? '3px solid black' : 'none',
        }}>
        <picture>
          <source srcSet={ColorImage} type="image/png" />
          <img
            src={ColorImage}
            height="20px"
            width="20px"
            style={{
              objectFit: 'contain',
              cursor: 'pointer',
              margin: 0,
            }}
          />
        </picture>
        <p style={{ fontSize: '12px', marginLeft: '8px', marginTop: '5px' }}>Color</p>
      </button>

      {render && renderOrNot && (
        <div style={{ paddingTop: '5px', display: 'flex', backgroundColor: '#f2f2f2' }}>
          <div
            style={{
              backgroundColor: color,
              borderRadius: 0,
              height: '40px',
              width: '35px',
            }}></div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              marginLeft: '5px',
              marginTop: '5px',
            }}>
            {paLette.map(row => {
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
                  key={row.label}>
                  {row.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
