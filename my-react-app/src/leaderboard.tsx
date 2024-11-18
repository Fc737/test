import react from 'react';


export default function Leaderboard(): JSX.Element{

    return(
        <div>
                    <div style={{paddingTop: '5px'}}>
                      <table style={{position: 'absolute', display: 'table', tableLayout: 'auto', width: '210px', borderCollapse: 'collapse'}}>
                          <thead style={{backgroundColor: 'lightgreen'}}>
                            <tr>
                              <th>Rank</th>
                              <th>Player</th>
                              <th>Score</th>
                            </tr>
                          </thead>
                          <tbody style={{backgroundColor: "#f2f2f2", textAlign: 'center'}}>
                            <tr>
                              <td>1</td>
                              <td>Alice</td>
                              <td>80</td>
                            </tr>
                          </tbody>
                      </table>
                    </div>
        </div>

    )



}