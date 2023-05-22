module.exports = class Memento{
    #state;
    constructor(state){
        this.#state = state;
    }
    getState(){
        return this.#state;
    }
}