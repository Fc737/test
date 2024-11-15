import { ColorPalette, Eraser, Pencil, Trash } from './toolbox';
import React, { useState } from 'react';
import { border } from '@chakra-ui/react';

export function Artist(): JSX.Element {
  const [colorButton, setcolorButton] = useState(false);
  const [pencilButton, setpencilButton] = useState(false);
  const [eraserButton, seteraserButton] = useState(false);
  const [trashButton, settrashButton] = useState(false);
  const [styling, setStyling] = useState(true);

  const handleColorButton = () => {
    setcolorButton(!colorButton);

  }

  const handlePencilButton = () => {
    setpencilButton(!pencilButton);
 }
 const handleraserButton = () =>{
    seteraserButton(!eraserButton);
 }
 const handletrashButton =()=>{
    settrashButton(!trashButton);
 }

  const styles = {};

  return (
    <div>
      <nav style={{ display: 'inline-block' }}>
        <button style={styles} onClick={handleColorButton}>{colorButton && <ColorPalette />}</button>
        <button style={styles} onClick={handlePencilButton}>{pencilButton && <Pencil />}</button>
        <button style={styles} onClick={handleraserButton}>{eraserButton && <Eraser />}</button>
        <button style={styles} onClick={handletrashButton}>{trashButton && <Trash />}</button>
      </nav>
    </div>
  );
}
