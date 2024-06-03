// export default class Person{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }
//     info(){
//         console.log(this.firstName,this.lastName,this.age);
//     }
// }

//Note : we can use export default only once in a file

export class Person1{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    info(){
        console.log(this.firstName,this.lastName,this.age);
    }
}

export class Person2{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    info(){
        console.log(this.firstName,this.lastName,this.age);
    }
}

const hello="Hello World";
export default hello;

