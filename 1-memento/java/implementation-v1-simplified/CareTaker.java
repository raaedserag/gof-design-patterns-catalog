import java.util.Stack;

public class CareTaker {
    private Stack<Memento> states = new Stack<Memento>();

    public void push(Memento state) {
        this.states.push(state);
    }

    public Memento pop() {
        return this.states.pop();
    }
}
