const  Memento = require("./Memento.js")
const DataModel = require("./DataModel.js");

module.exports = class Originator {
    #state = new DataModel();
    setState(state) {
        if(!(state instanceof DataModel)) throw new Error("state must be a DataModel");
        this.#state = state;
    }
    getState() {
        return this.#state;
    }
    printState() {
        this.#state.print();
    }
    createMemento() {
        return new Memento(this.#state);
    }
    restoreMemento(memento) {
        if(!(memento instanceof Memento)) throw new Error("memento must be a Memento");
        this.#state = memento.getState();
    }
}