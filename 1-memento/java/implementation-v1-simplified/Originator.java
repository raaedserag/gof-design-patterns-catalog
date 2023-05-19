public class Originator {
    private String property1;
    private String property2;

    public String getProperty1(){
        return this.property1;
    }

    public void setProperty1(String property1){
        this.property1 = property1;
    }

    public String getProperty2(){
        return this.property2;
    }

    public void setProperty2(String property2){
        this.property2 = property2;
    }

    public Memento createMemento(){
        return new Memento(this.property1, this.property2);
    }

    public void setMemento(Memento state){
        this.property1 = state.getProperty1();
        this.property2 = state.getProperty2();
    }
}
