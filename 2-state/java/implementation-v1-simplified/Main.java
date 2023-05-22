public class Main {
    public static void main(String[] args) throws Exception {
        var canvas = new Context();
        canvas.changeState(new ConcreteClassA());
        canvas.handle();

        canvas.changeState(new ConcreteClassB());
        canvas.handle();

        canvas.changeState(new ConcreteClassA());
        canvas.handle();
    }
}
