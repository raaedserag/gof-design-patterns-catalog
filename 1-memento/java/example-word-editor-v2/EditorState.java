public class EditorState {
    private final Document stateData;

    public EditorState(Document data){
        this.stateData = data;
    }

    public Document getStateData(){
        return this.stateData;
    }

}
