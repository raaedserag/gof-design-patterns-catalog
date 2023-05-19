public class Memento {
    private final DataModel stateData;

    public Memento(DataModel data){
        this.stateData = data;
    }

    public DataModel getStateData(){
        return this.stateData;
    }

}
