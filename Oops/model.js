class Registration{
    set(){
      this.name="ramkumar";
      this.age=22;
      this.eamil_id="always.ramkumar@gmail.com";
      this.password=123456789;
    }
    get(){
        return this.name, this.age ,this.eamil_id,this.password;

    }
    display()
    {
        console.log(`name is ${this.name},\nage=${this.age},\nemail_id${this.eamil_id},\npassword=${this.password}`);
    }

}
var object= new Registration();
     object.set();
     object.get();
     object.display();

