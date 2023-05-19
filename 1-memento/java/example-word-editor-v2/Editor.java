public class Editor {
    private Document data;

    public Document getData() {
        return this.data;
    }

    public void setData(Document data) {
        this.data = data;
    }

    public void printData() {
        this.data.print();
    }

    public EditorState createState() {
        return new EditorState(this.data);
    }

    public void restoreState(EditorState state) {
        this.data = state.getStateData();
    }
}
