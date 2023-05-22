const EditorState = require("./EditorState.js")

module.exports = class EditorHistory {
    #editorStates = [];
    push(editorState) {
        if (!(editorState instanceof EditorState)) throw new Error('editorState must be instanceof EditorState');
        this.#editorStates.push(editorState);
    }
    pop() {
        return this.#editorStates.pop();
    }
}