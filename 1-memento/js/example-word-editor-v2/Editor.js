const EditorState = require("./EditorState.js")
const Document = require("./Document.js");

module.exports = class Originator {
    #state = new Document();
    setState(state) {
        if (!(state instanceof Document)) throw new Error("state must be a Document");
        this.#state = state;
    }
    getState() {
        return this.#state;
    }
    printState() {
        this.#state.print();
    }
    createEditorState() {
        return new EditorState(this.#state);
    }
    restoreEditorState(editorState) {
        if (!(editorState instanceof EditorState)) throw new Error("editorState must be a EditorState");
        this.#state = editorState.getState();
    }
}