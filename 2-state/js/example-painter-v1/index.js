const Canvas = require("./Canvas.js")
const SelectionTool = require("./SelectionTool.js")
const Brush = require("./Brush.js")
const Eraser = require("./Eraser.js")

function main() {
    const context = new Canvas();

    context.changeTool(new SelectionTool());
    context.mouseDown();
    context.mouseUp();
    
    context.changeTool(new Brush());
    context.mouseDown();
    context.mouseUp();
    
    context.changeTool(new Eraser());
    context.mouseDown();
    context.mouseUp();

}
main();