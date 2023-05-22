const  Memento = require("./Memento.js")

module.exports = class CareTeker {
    #mementos = [];
    push(memento) {
        if (!(memento instanceof Memento)) throw new Error('memento must be instanceof Memento');
        this.#mementos.push(memento);
    }
    pop() {
        return this.#mementos.pop();
    }
}