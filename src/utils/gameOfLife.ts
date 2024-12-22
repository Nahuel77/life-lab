export const computeNextGeneration = (grid: boolean[][]): boolean[][] => {
    const rows = grid.length;
    const cols = grid[0].length;
    const nextGen = grid.map(arr => [...arr]);

    const getNeighbors = (x: number, y: number) => {
        let neighbors = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                const nx = x + i;
                const ny = y + j;
                if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && grid[nx][ny]) {
                    neighbors++;
                }
            }
        }
        return neighbors;
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const neighbors = getNeighbors(row, col);
            if (grid[row][col]) {
                nextGen[row][col] = neighbors === 2 || neighbors === 3;
            } else {
                nextGen[row][col] = neighbors === 3;
            }
        }
    }

    return nextGen;
};