import ReactDOM from 'react-dom/client';
import React, {useState} from 'react'
import '../styles/tictactoe.css';

const Tictactoe = () => {
    //set background
    const Background = require('../assets/cyberimg.gif');
    const divBackground = {
        width: '100%',
        height: '800px',
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover'
    };

    //handle click states and win
    const [turn, setTurn]= useState('X');
    const [cells, setCells] =useState(Array(9).fill(''));
    const [win, setWin] = useState('');

    const handleClick= (num) =>{
        //handle double click 
        if(cells[num]!==''){
            alert('already clicked!');
            return;
        }
        //spread operator ...
        let squares=[...cells];
        if(turn === 'X'){
            squares[num]= 'X';
            setTurn('O');
        }
        else{
            squares[num]= '0';
            setTurn('X');
        }

        checkWin(squares);
        setCells(squares);
        console.log(squares);
    };

    const handleReset = ()=>{
        setWin(null);
        setCells(Array(9).fill(''));
    }

    //return col
    const Cell=({num})=>{
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    }

    const checkWin = (squares) =>{
        let combos={
            across:[
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagonal: [
                [0,4,8],
                [2,4,6],
            ]
        };

        for(let combo in combos){
            combos[combo].forEach((pattern)=>{
                //console.log(pattern);
                if(
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === ''
                ){

                }
                else if(
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ){
                    setWin(squares[pattern[0]]);

                }

            });
        }

    };
    
  return (
    <div className="container" style={divBackground}>
        
        <table>
            <h2>Turn:{turn}</h2>
            <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>            
            </tbody>
        </table>
        {win &&(
            <>
                <h3> {win} is the winner!</h3>
                <button id="reset-btn" onClick={()=> handleReset()}>
                    PLAY AGAIN 👾
                </button>
            </>
        )}
        <button id="reset-btn" onClick={()=> handleReset()}>
                    RESTART 👾
        </button>
        

    </div>
  )
}

export default Tictactoe


