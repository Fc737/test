import ColorPalette from "./toolbox/colorpalette"
import Pencil  from "./toolbox/pencil"
import Eraser  from "./toolbox/eraser"
import Trash  from "./toolbox/trash"
import { useState} from 'react'

export default function Toolboxes(): JSX.Element{
  const [rendering, setrendering] = useState('');

  function checkButtons(whichButton: string){
    setrendering(whichButton); 
  }

    return(
        <nav style={{
            bottom: '40vh',
            position: 'relative',
            }}>
            <div style={{ width: 'fit-content', height: 'fit-content', position:'absolute'}} onClick={()=> checkButtons('color')}>
              <ColorPalette renderOrNot={rendering == 'color'} />
            </div>
            <div style={{ width: 'fit-content', height: 'fit-content', position: 'absolute', left: '100px'}} onClick={()=> checkButtons('pencil')}>
              <Pencil renderOrNot={rendering == 'pencil'} />
            </div>
            <div style={{ width: 'fit-content', height: 'fit-content', position: 'absolute', left: '204px'}} onClick={()=> checkButtons('eraser')}>
              <Eraser renderOrNot={rendering == 'eraser'}/>
            </div >
            <div style={{ width: 'fit-content', height: 'fit-content', position: 'absolute', left: '310px'}} onClick={()=> checkButtons('trash')} >
              <Trash renderOrNot={rendering == 'trash'} />
            </div>
           </nav>
    )
}
