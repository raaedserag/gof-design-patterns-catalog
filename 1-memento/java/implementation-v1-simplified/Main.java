public class Main {
    public static void main(String[] args) throws Exception {
        var originator = new Originator();
        var careTaker = new CareTaker();

        originator.setProperty1("a");
        careTaker.push(originator.createMemento());
        System.out.println(originator.getProperty1());
        
        
        originator.setProperty1("b");
        careTaker.push(originator.createMemento());
        System.out.println(originator.getProperty1());
        
        originator.setProperty1("c");
        // history.push(editor.createState());
        System.out.println(originator.getProperty1());
        
        System.out.println("-------------------------");
        originator.setMemento(careTaker.pop());
        System.out.println(originator.getProperty1());
    }
}
