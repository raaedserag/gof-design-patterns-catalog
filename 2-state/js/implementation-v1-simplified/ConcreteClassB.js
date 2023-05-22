const State = require('./State.js');

module.exports = class ConcreteClassB extends State {
    handle() {
        console.log('handle Concrete Class B');
    }
}