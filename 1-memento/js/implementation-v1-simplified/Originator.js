const  Memento = require("./Memento.js")

module.exports = class Originator {
    #state = null;
    setState(state) {
        this.#state = state;
    }
    getState() {
        return this.#state;
    }
    createMemento() {
        return new Memento(this.#state);
    }
    restoreMemento(memento) {
        if(!(memento instanceof Memento)) throw new Error("memento must be a Memento");
        this.#state = memento.getState();
    }
}