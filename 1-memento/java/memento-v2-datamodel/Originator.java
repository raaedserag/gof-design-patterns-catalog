public class Originator {
    private DataModel data;

    public DataModel getData() {
        return this.data;
    }

    public void setData(DataModel data) {
        this.data = data;
    }

    public void printData() {
        this.data.print();
    }

    public Memento createMemento() {
        return new Memento(this.data);
    }

    public void setMemento(Memento state) {
        this.data = state.getStateData();
    }
}
