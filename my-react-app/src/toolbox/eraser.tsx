import React, { useEffect, useRef, useState } from 'react';
import eraserImage from '/image/eraser.jpg';


export default function Eraser({ renderOrNot }: { renderOrNot: boolean }): JSX.Element {
  const [strokeSize, setstrokeSize] = useState(50);
  const [render, setRender] = useState(renderOrNot);
  const whichButton = useRef<string>('');

  useEffect(() => {
    if (!renderOrNot) {
      whichButton.current = '';
    }
  }, [renderOrNot]);

  const buttonClicked = () => {
    if (whichButton.current == 'slider') {
      setRender(false);
    } else if (whichButton.current == '' && renderOrNot == false) {
      setRender(true);
    } else {
      setRender(prevRender => !prevRender);
    }
  };
  const stroke = (event: React.ChangeEvent<HTMLInputElement>) => {
    whichButton.current = 'slider';
    const size = Number(event.target.value);
    if (size < 0) {
      setstrokeSize(0);
    } else if (size > 100) {
      setstrokeSize(100);
    } else {
      setstrokeSize(size);
    }
    whichButton.current = 'ButtonClicked';
  };

  return (
    <div>
      <button
        onClick={buttonClicked}
        style={{
          display: 'flex',
          justifyItems: 'center',
          borderRadius: 0,
          backgroundColor: 'transparent',
          borderBottom: render && renderOrNot ? '3px solid black' : 'none',
        }}>
         <picture>
          <source srcSet={eraserImage} type="image/jpeg" />
          <img
            src={eraserImage} 
            height="20px"
            width="20px"
            style={{
              objectFit: 'contain',
              cursor: 'pointer',
              margin: 0,
            }}
          />
        </picture>
        <p style={{ fontSize: '12px', marginLeft: '8px', marginTop: '5px' }}>Eraser</p>
      </button>

      {render && renderOrNot && (
        <div
          onChange={stroke}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1,1fr)',
            backgroundColor: 'lightgreen',
            padding: '10px',
            marginTop: '5px',
          }}>
          <input onChange={stroke} value={strokeSize || ''} type='number' />
          <input type='range' min={1} max={100} step={1} onChange={stroke} />
        </div>
      )}
    </div>
  );
}
