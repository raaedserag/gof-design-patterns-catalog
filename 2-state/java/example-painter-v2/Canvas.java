public class Canvas {
    private Tool currentTool;

    public void setCurrentTool(Tool tool){
        this.currentTool = tool;
    }

    public void mouseDown(){
        this.currentTool.mouseDown();
    }
    public void mouseUp(){
        this.currentTool.mouseUp();
    }
    
}
