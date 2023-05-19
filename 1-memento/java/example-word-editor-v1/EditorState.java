public class EditorState {
    private final String content;
    private final String fontName;
    private final Integer fontSize;

    public EditorState(String content, String fontName, Integer fontSize){
        this.content = content;
        this.fontName = fontName;
        this.fontSize = fontSize;
    }

    public String getContent(){
        return this.content;
    }

    public String getFontName(){
        return this.fontName;
    }

    public Integer getFontSize(){
        return this.fontSize;
    }
}
