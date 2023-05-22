public class Context {
    private State currentState;

    public void changeState(State state){
        this.currentState = state;
    }

    public void handle(){
        this.currentState.handle();
    }
    
}
