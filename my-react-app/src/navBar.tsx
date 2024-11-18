import react, { useState } from 'react';
import Leaderboard from './leaderboard';
import Playertable from './playertable';

export default function Navbar(): JSX.Element{
    const [whichButton, setWhichButton] = useState('');
    const [leaderboardClicks, setLeaderboardClicks] = useState(false);
    const [playersClicks, setPlayersClicks] = useState(false);


    function handleClick(button: string){
        if(button == 'players'){
            setLeaderboardClicks(false);
            setPlayersClicks((prevClicks) => !prevClicks);
        }
        else if(button == 'leaderboard'){
            setPlayersClicks(false);
            setLeaderboardClicks((prevClicks) =>!prevClicks);
        }
        
    }


    const styles: React.CSSProperties = { 
        top: '12%', 
        right: '10%',
        position: 'absolute', 
        fontSize: '12px', 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr',
    };
    
    return(
        <nav style={styles}>
              <button 
                    onClick={() => handleClick('leaderboard')} 
                    style={{
                    borderRadius: 0, 
                    position: 'relative',
                    width: '100%',
                    backgroundColor: 'transparent',
                    borderBottom: leaderboardClicks ? '3px solid black' : 'none'
                }}>LeaderBoard</button>

            <button 
                onClick={() => handleClick('players')} 
                style={{
                borderRadius: 0,
                position: 'relative',
                width: '100%',
                backgroundColor: 'transparent',
                borderBottom: playersClicks? '3px solid black' : 'none',
                }}>Players</button>
            
            
            {leaderboardClicks && !playersClicks ? <Leaderboard /> : !leaderboardClicks && playersClicks ? <Playertable /> : null}
        </nav>
    )

}
