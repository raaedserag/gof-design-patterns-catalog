const Editor = require("./Editor.js")
const EditorHistory = require("./EditorHistory.js")

function main() {
    const editor = new Editor();
    const history = new EditorHistory();

    history.push(editor.createEditorState());
    editor.setState('a', 'Arial', 12);
    editor.printState()

    history.push(editor.createEditorState());
    editor.setState('b', 'Times New Roman', 14);
    editor.printState()

    history.push(editor.createEditorState());
    editor.setState('b', 'Times New Roman', 16);
    editor.printState()
    
    editor.restoreEditorState(history.pop());
    editor.printState()
}
main();