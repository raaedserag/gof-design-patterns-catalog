const State = require('./State.js');

module.exports = class Context{
    #currentState;

    changeState(state) {
        if (! state instanceof State) throw new Error('Invalid state');
        this.#currentState = state;
    }

    handle() {
        this.#currentState.handle();
    }
}