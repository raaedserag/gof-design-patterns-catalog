public class Eraser implements Tool{
    @Override
    public void mouseDown() {
        System.out.println("Eraser Icon");
    }
    
    @Override
    public void mouseUp() {
        System.out.println("Delete Something");
    }
}
