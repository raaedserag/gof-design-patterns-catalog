public class Document {
    private String content;
    private String fontName;
    private Integer fontSize;

    public Document(String property1, String property2, Integer property3){
        this.content = property1;
        this.fontName = property2;
        this.fontSize = property3;
    }

    public String getContent(){
        return this.content;
    }

    public void setContent(String property1){
        this.content = property1;
    }

    public String getFontName(){
        return this.fontName;
    }

    public void setFontName(String property2){
        this.fontName = property2;
    }

    public Integer getFontSize(){
        return this.fontSize;
    }

    public void setFontSize(Integer property3){
        this.fontSize = property3;
    }

    public void print(){
        System.out.println("property1: '" + this.content + "', property2: '" + this.fontName + "', property3: '" + this.fontSize + "'" );
    }
}
