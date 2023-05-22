const State = require('./State.js');

module.exports = class ConcreteClassA extends State {
    handle() {
        console.log('handle Concrete Class A');
    }
}