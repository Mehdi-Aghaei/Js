class Emp{
    constructor(namee,age,salary,position){
        this.namee = namee;
        this.age = age;
        this.salary = salary;
        this.position = position;
    }
    meeting(){
        console.log(`the name is ${this.namee}`)
    }
}

module.exports = Emp;
