

class override{
   public dbFunc(): String{
        return "Connected to oracle DB";
    }
}

class override1 extends override{
  public  dbFunc(): String {
        return "Connected to Mysql DB";
    }
}
 let obj :  override1 = new override1();
 console.log(obj.dbFunc());