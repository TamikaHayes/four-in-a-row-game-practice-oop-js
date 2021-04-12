class Space {
    constructor(x,y) {
        this.x =x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
    }
/**
 * Generates 2D array of spaces.
 * @return  {array}     An array of space objectes
 */
    createSpaces() {
        const spaces = [];

        for (let x = 0;  x < this.columns; x++) {
            const column = [];

            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x,y);
                column.push(space);
            }

            spaces.push(column);
        }

        return spaces;
    }
}