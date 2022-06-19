import { Cell } from "./Cell"

export default function Board() {
    const dimension = 8;
    return (
        <article>
            {fillSquareMatrix(dimension)}
        </article>
    )
}

function createCell(i, j) {
    const isWhite = i % 2 == j % 2;
    return (
        <Cell color={isWhite ? "white" : "black"} />
    )
}

function createRow(x, size) {
    return (
        <div style={{
            display: "flex",
        }}>
            {Array(size).fill().map((u, y) => createCell(x, y))}
        </div>
    )
}

const fillSquareMatrix = (size) => {
    return Array(size).fill().map((u, y) => {
        return createRow(y, size);
    });
};