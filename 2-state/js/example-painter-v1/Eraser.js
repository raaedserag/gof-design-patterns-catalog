const Tool = require('./Tool.js');

module.exports = class Eraser extends Tool {
    mouseDown() {
        console.log('Eraser icon');
    }
    mouseUp() {
        console.log('Delete something');
    }
}