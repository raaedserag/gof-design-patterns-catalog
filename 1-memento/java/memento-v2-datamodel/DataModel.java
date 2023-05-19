public class DataModel {
    private String property1;
    private Boolean property2;
    private Integer property3;

    public DataModel(String property1, Boolean property2, Integer property3){
        this.property1 = property1;
        this.property2 = property2;
        this.property3 = property3;
    }

    public String getProperty1(){
        return this.property1;
    }

    public void setProperty1(String property1){
        this.property1 = property1;
    }

    public Boolean getProperty2(){
        return this.property2;
    }

    public void setProperty2(Boolean property2){
        this.property2 = property2;
    }

    public Integer getProperty3(){
        return this.property3;
    }

    public void setProperty3(Integer property3){
        this.property3 = property3;
    }

    public void print(){
        System.out.println("property1: '" + this.property1 + "', property2: '" + this.property2 + "', property3: '" + this.property3 + "'" );
    }
}
