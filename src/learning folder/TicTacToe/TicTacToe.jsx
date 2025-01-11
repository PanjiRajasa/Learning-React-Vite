import { useState } from "react";

function Square({value, onSquareClicks}) {

    return (
        <button className="square" onClick={onSquareClicks}>{value}</button>
    )
}

function TicTacToe( { xIsNext, squares, onPlay } ) {
    function handleClicks(i) {
        if(squares[i] || CalculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();

        if(xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        
        onPlay(nextSquares);
    }

    const winner = CalculateWinner(squares);
    let status;
    if(winner) {
        status = "Winner " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className="status">{status}</div>
                <div className="board-row">
                    <Square value={squares[0]} onSquareClicks={() => {handleClicks(0)}}/>
                    <Square value={squares[1]} onSquareClicks={() => {handleClicks(1)}}/>
                    <Square value={squares[2]} onSquareClicks={() => {handleClicks(2)}}/>
                </div>

                <div className="board-row">
                    <Square value={squares[3]} onSquareClicks={() => {handleClicks(3)}}/>
                    <Square value={squares[4]} onSquareClicks={() => {handleClicks(4)}}/>
                    <Square value={squares[5]} onSquareClicks={() => {handleClicks(5)}}/>
                </div>

                <div className="board-row">
                    <Square value={squares[6]} onSquareClicks={() => {handleClicks(6)}}/>
                    <Square value={squares[7]} onSquareClicks={() => {handleClicks(7)}}/>
                    <Square value={squares[8]} onSquareClicks={() => {handleClicks(8)}}/>
                </div>
        </>
    )
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquare = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    };

    const moves = history.map( (squares, move) => {
        let description;

        if (move > 0) {
            description = "Go to move #" + move;
        } else {
            description = "Go to game start";
        }
        return (
            <li key={move}>
                <button onClick={() => {jumpTo(move)}}>{description}</button>
            </li>
        );
    });

    return (
            <>  
                <div className="game">
                    <div className="game-board">
                        <TicTacToe xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
                    </div>
                    <div className="game-info">
                        <ol>{moves}</ol>
                    </div>
                </div>
            </>
            
        )
}

function CalculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}