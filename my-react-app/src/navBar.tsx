import react, { useState } from 'react';


export default function Navbar(): JSX.Element{
    const [whichButton, setWhichButton] = useState('');
    
    function handleClick(button: string){
        setWhichButton(button);
    }
    const styles: React.CSSProperties = { 
        top: '10%', 
        right: '20%', 
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
                borderBottom: whichButton == 'leaderboard' ? '3px solid black' : 'none',
                borderBottomWidth: whichButton == 'leaderboard' ? '3px' : 'none'
            }}>LeaderBoard</button>
            <button 
                onClick={() => handleClick('players')} 
                style={{
                borderRadius: 0,
                borderBottom: whichButton == 'players' ? '3px solid black' : 'none',
                borderBottomWidth: whichButton == 'players' ? '3px' : 'none'}}>Players</button>
        </nav>
    )

}
