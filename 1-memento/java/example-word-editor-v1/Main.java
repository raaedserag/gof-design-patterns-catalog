public class Main {
    public static void main(String[] args) throws Exception {
        var editor = new Editor();
        var history = new EditorHistory();

        history.push(editor.createState());
        editor.setContent("a");
        editor.print();
        
        
        history.push(editor.createState());
        editor.setFontName("Arial");
        editor.print();
        
        history.push(editor.createState());
        editor.setFontSize(18);
        editor.print();
        
        System.out.println("-------------------------");
        editor.restoreState(history.pop());
        editor.print();
    }
}
