const Tool = require('./Tool.js');

module.exports = class Canvas{
    #currentTool;

    changeTool(tool) {
        if (! tool instanceof Tool) throw new Error('Invalid tool');
        this.#currentTool = tool;
    }

    mouseDown() {
        this.#currentTool.mouseDown();
    }
    mouseUp() {
        this.#currentTool.mouseUp();
    }
}