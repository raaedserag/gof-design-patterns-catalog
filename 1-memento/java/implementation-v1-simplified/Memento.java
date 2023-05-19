public class Memento {
    private final String property1;
    private final String property2;

    public Memento(String property1, String property2){
        this.property1 = property1;
        this.property2 = property2;
    }

    public String getProperty1(){
        return this.property1;
    }

    public String getProperty2(){
        return this.property2;
    }
}
