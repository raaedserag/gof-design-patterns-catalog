const Document = require("./Document.js");
module.exports = class EditorState{
    #state;
    constructor(state){
        if(!(state instanceof Document)) throw new Error("state must be a Document");
        this.#state = state;
    }
    getState(){
        return this.#state;
    }
}