const Tool = require('./Tool.js');

module.exports = class Brush extends Tool {
    mouseDown() {
        console.log('Brush icon');
    }
    mouseUp() {
        console.log('Draw line');
    }
}