public class Main {
    public static void main(String[] args) throws Exception {
        var originator = new Originator();
        var careTaker = new CareTaker();

        careTaker.push(originator.createMemento());
        originator.setData(new DataModel("a", null, null));
        originator.printData();
        
        careTaker.push(originator.createMemento());
        originator.setData(new DataModel("b", null, null));
        originator.printData();
        
        careTaker.push(originator.createMemento());
        originator.setData(new DataModel("c", null, null));
        originator.printData();
        
        System.out.println("-------------------------");
        originator.setMemento(careTaker.pop());
        originator.printData();
    }
}
