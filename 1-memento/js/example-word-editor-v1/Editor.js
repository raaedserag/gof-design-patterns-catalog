const EditorState = require("./EditorState.js")

module.exports = class Editor {
    #content = null;
    #fontName = null;
    #fontSize = null;

    setState(content, fontName, fontSize) {
        this.#content = content;
        this.#fontName = fontName;
        this.#fontSize = fontSize;
    }
    printState() {
        console.log(`content: ${this.#content}, fontName: ${this.#fontName}, fontSize: ${this.#fontSize}`);
    }
    createEditorState() {
        return new EditorState(this.#content, this.#fontName, this.#fontSize);
    }
    restoreEditorState(editorState) {
        if (!(editorState instanceof EditorState)) throw new Error("editorState must be a EditorState");
        this.#content = editorState?.getContent();
        this.#fontName = editorState?.getFontName();
        this.#fontSize = editorState?.getFontSize();
    }
}