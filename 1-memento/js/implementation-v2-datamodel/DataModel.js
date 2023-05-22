module.exports = class DataModel {
    #property1 = "";
    #property2 = "";
    #property3 = "";

    constructor(property1, property2, property3) {
        this.#property1 = property1;
        this.#property2 = property2;
        this.#property3 = property3;
    }

    print() {
        console.log(`property1: ${this.#property1}, property2: ${this.#property2}, property3: ${this.#property3}`);
    }
}