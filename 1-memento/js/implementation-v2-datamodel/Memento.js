const DataModel = require("./DataModel.js");
module.exports = class Memento{
    #state;
    constructor(state){
        if(!(state instanceof DataModel)) throw new Error("state must be a DataModel");
        this.#state = state;
    }
    getState(){
        return this.#state;
    }
}