public class Editor {
    private String content;
    private String fontName;
    private Integer fontSize;

    public String getContent(){
        return this.content;
    }

    public void print(){
        System.out.println("content: '" + this.content + "', fontName: '" + this.fontName + "', fontSize: '" + this.fontSize + "'" );
    }

    public void setContent(String content){
        this.content = content;
    }

    public String getFontName(){
        return this.fontName;
    }

    public void setFontName(String fontName){
        this.fontName = fontName;
    }

    public Integer getFontSize(){
        return this.fontSize;
    }

    public void setFontSize(Integer fontSize){
        this.fontSize = fontSize;
    }

    public EditorState createState(){
        return new EditorState(this.content, this.fontName, this.fontSize);
    }

    public void restoreState(EditorState state){
        this.content = state.getContent();
        this.fontName = state.getFontName();
        this.fontSize = state.getFontSize();
    }
}
