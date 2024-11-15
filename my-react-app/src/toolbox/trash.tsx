import React, { useEffect, useRef, useState } from 'react';
import TrashImage from './image/trash.jpg'

export default function Trash({renderOrNot}:{renderOrNot: boolean}): JSX.Element {
  const [buttonClicks,setbuttonclicks] = useState(renderOrNot);

  const activeRef = useRef<string>('');

  useEffect(() => {
    if(!renderOrNot) {
      activeRef.current = '';
      setbuttonclicks(false);
    }
  }, [renderOrNot]);
  //const [Cursor, setCursor] = useState('crosshair');
  function buttonClicked (){
    activeRef.current = 'trash';
    setbuttonclicks((prevClicks => !prevClicks));
  }
  return (
    <div>
      <button 
        onClick={buttonClicked} 
        style={{ 
          display: 'flex', 
          justifyItems: 'center', 
          borderRadius: 0,
          borderBottom: activeRef.current == 'trash' && buttonClicks ? '3px solid black' : 'none',
          borderBottomWidth: activeRef.current == 'trash' && buttonClicks ? '3px' : 'none'
          }}>
        <img
          src={TrashImage}
          height='20px'
          width='20px'
          style={{ 
            objectFit: 'contain', 
            cursor: 'pointer',
          }}
        />
        <p style={{fontSize: '12px', marginLeft: '8px', marginTop: '5px'}}>Trash</p>
      </button>

    </div>
  );
}
