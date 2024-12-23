import React, { useState, useEffect } from 'react';
import { computeNextGeneration } from '../utils/gameOfLife'
import './tablero.css'

const createInitialGrid = (rows: number, cols: number): boolean[][] => {
    const grid: boolean[][] = [];
    for (let row = 0; row < rows; row++) {
        const newRow: boolean[] = [];
        for (let col = 0; col < cols; col++) {
            newRow.push(Math.random() < 0.5);
        }
        grid.push(newRow);
    }
    return grid;
};

const clearGrid = (rows: number, cols: number): boolean[][] => {
    const grid: boolean[][] = [];
    for (let row = 0; row < rows; row++) {
        const newRow: boolean[] = [];
        for (let col = 0; col < cols; col++) {
            newRow.push(Math.random() < 0);
        }
        grid.push(newRow);
    }
    return grid;
};


const Tablero: React.FC = () => {
    let size = 63;
    const [grid, setGrid] = useState<boolean[][]>(createInitialGrid(size, size));
    const [isRunning, setIsRunning] = useState(false);
    const [counter, setCounter] = useState(0);

    const handleClearGrid = ()=>{
        setGrid(clearGrid(size, size));
        setIsRunning(false);
        setCounter(0);
    }

    const handleGenerate = ()=>{
        setGrid(createInitialGrid(size, size));
        setIsRunning(false);
        setCounter(0);
    }

    const toggleCell = (row: number, col: number) => {
        const newGrid = [...grid];
        newGrid[row][col] = !newGrid[row][col];
        setGrid(newGrid);
    };

    const handleNextStep = () => {
        setGrid(computeNextGeneration(grid));
        setCounter(prevCounter => prevCounter + 1);
    };

    useEffect(() => {
        let interval: number | undefined;
        if (isRunning) {
            interval = setInterval(() => {
                handleNextStep();
            }, 300);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, grid]);

    return (
        <div>
            <div className="grid"
            style={{ "--size-px": size } as React.CSSProperties}>
                {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`cell ${cell ? 'alive' : 'dead'}`}
                            onClick={() => toggleCell(rowIndex, colIndex)}
                        />
                    ))
                )}
            </div>
            <button onClick={handleNextStep}>Avanzar</button>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Pausar' : 'Iniciar'}
            </button>
            <button onClick={handleClearGrid}>Clear</button>
            <button onClick={handleGenerate}>Generate</button>
            <label htmlFor="counter">counter: {counter}</label>
        </div>
    );
}

export default Tablero;