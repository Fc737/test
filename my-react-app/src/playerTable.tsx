import react  from 'react';


export default function Playertable(): JSX.Element{

    return(
        <div>
                    <div style={{paddingTop: '5px'}}>
                    <table style={{ position: 'absolute', display: 'table', tableLayout: 'auto', width: '210px', borderCollapse: 'collapse'}}>
                        <thead style={{backgroundColor: 'lightgreen', textAlign: 'center'}}>
                          <tr>
                            <th>Player</th>
                          </tr>
                        </thead>
                        <tbody style={{backgroundColor: "#f2f2f2", textAlign: 'left'}}>
                          <tr>
                            <td>Alice</td>
                          </tr>
                        </tbody>
                    </table>
                  </div>
        </div>

    )



}