public class Main {
    public static void main(String[] args) throws Exception {
        var editor = new Editor();
        var history = new EditorHistory();

        history.push(editor.createState());
        editor.setData(new Document("a", null, null));
        editor.printData();
        
        history.push(editor.createState());
        editor.setData(new Document("b", "Arial", null));
        editor.printData();
        
        history.push(editor.createState());
        editor.setData(new Document("c",  "Arial", 18));
        editor.printData();
        
        System.out.println("-------------------------");
        editor.restoreState(history.pop());
        editor.printData();
    }
}
