import React, { useEffect, useRef, useState } from 'react';
import TrashImage from '/image/trash.jpg';

export default function Trash({ renderOrNot }: { renderOrNot: boolean }): JSX.Element {
  const [buttonClicks, setbuttonclicks] = useState(renderOrNot);

  const activeRef = useRef<string>('');

  useEffect(() => {
    if (!renderOrNot) {
      activeRef.current = '';
      setbuttonclicks(false);
    }
  }, [renderOrNot]);

  function buttonClicked() {
    activeRef.current = 'trash';
    setbuttonclicks(prevClicks => !prevClicks);
  }
  return (
    <div>
      <button
        onClick={buttonClicked}
        style={{
          display: 'flex',
          justifyItems: 'center',
          borderRadius: 0,
          backgroundColor: 'transparent',
          borderBottom: activeRef.current == 'trash' && buttonClicks ? '3px solid black' : 'none',
        }}>
         <picture>
          <source srcSet={TrashImage} type="image/jpeg" />
          <img
            src={TrashImage} 
            alt="Eraser Icon"
            height="20px"
            width="20px"
            style={{
              objectFit: 'contain',
              cursor: 'pointer',
              margin: 0,
            }}
          />
        </picture>
        <p style={{ fontSize: '12px', marginLeft: '8px', marginTop: '5px' }}>Trash</p>
      </button>
    </div>
  );
}
