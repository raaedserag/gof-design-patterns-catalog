const Editor = require("./Editor.js")
const EditorHistory = require("./EditorHistory.js")
const Document = require("./Document.js");

function main() {
    const editor = new Editor();
    const history = new EditorHistory();

    history.push(editor.createEditorState());
    editor.setState(new Document('a', 'Arial', 12));
    editor.printState();

    history.push(editor.createEditorState());
    editor.setState(new Document('b', 'Times New Roman', 14));
    editor.printState();

    history.push(editor.createEditorState());
    editor.setState(new Document('b', 'Times New Roman', 16));
    editor.printState();

    editor.restoreEditorState(history.pop());
    editor.printState();
}
main();