const Tool = require('./Tool.js');

module.exports = class SelectionTool extends Tool {
    mouseDown() {
        console.log('Selection tool icon');
    }
    mouseUp() {
        console.log('Draw dashed rectangle');
    }
}