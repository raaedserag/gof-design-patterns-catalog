import java.util.Stack;

public class EditorHistory {
    private Stack<EditorState> states = new Stack<EditorState>();

    public void push(EditorState state) {
        this.states.push(state);
    }

    public EditorState pop() {
        return this.states.pop();
    }
}
