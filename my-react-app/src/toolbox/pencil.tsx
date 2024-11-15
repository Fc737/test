import React, { useEffect, useRef, useState } from 'react';
import pencilImage from './image/pencil.png'


export default function Pencil({renderOrNot}:{renderOrNot: boolean}): JSX.Element {
  //const [Cursor, setCursor] = useState('default');
  //const [buttonclick, setbuttonclick] = useState(false);
  const [strokeSize, setstrokeSize] = useState(0);
  const [render, setRender] = useState(renderOrNot);
  const whichButton = useRef<string>('');
 //const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });
   
 
  useEffect(() => {
    if(!renderOrNot){
      whichButton.current = '';
    }
    
  }, [renderOrNot]);
  //const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });

    // useEffect(() => {
    //   const mousePos = (event: MouseEvent) => {
    //       setmousePosition({ x: event.clientX, y: event.clientY });
    //   }
    //     window.addEventListener('mousemove', mousePos);
    //   return () => {
    //     window.removeEventListener('mousemove', mousePos);
    //   }
    // },[]);
    // const buttonClicked = () => {
    //   if(renderOrNot == true){
    //     setbuttonclick(prevClick => !prevClick);
    //   }
    //   else{
    //     setbuttonclick(false);
    //   }
  
    // }
    const buttonClicked = () =>{
      if(whichButton.current == 'stroke') {
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

    const stroke = (event: React.ChangeEvent<HTMLInputElement> ) => {
      whichButton.current = 'Stroke';
      const size = Number(event.target.value);
        if(size < 0){
          setstrokeSize(0);
        }
        else if(size > 100){
          setstrokeSize(100);
        }
        else{
          setstrokeSize(size);
        }
    }
    return (
    <div>

      <button 
        onClick={buttonClicked} 
        style={{
          display: 'flex',
          justifyItems: 'center', 
          borderRadius: 0,
          borderBottom: render && renderOrNot ? '3px solid black' : 'none',
          borderBottomWidth: render && renderOrNot ? '3px' : 'none'
        }}>
        <img
          src={pencilImage}
          height='20px'
          width='20px'
          style={{ 
            objectFit: 'contain', 
            cursor: 'pointer',
            margin: 0,
          }}
        />
        <p style={{fontSize: '12px', marginLeft: '8px', marginTop: '5px'}}>Pencil</p>
      </button>

      {render && renderOrNot && (
            <div onChange={stroke} style={{backgroundColor: 'lightblue', display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', padding: '10px'}}>
              <input
                onChange={stroke}
                value={strokeSize || ''}
                type='number'
              />
              <input type="range" min={0} max={100} step={1} onChange={stroke}/>
            </div>
            
          )} 
    </div>
  );
}
