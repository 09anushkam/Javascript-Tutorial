// 10:35:00 - 11:08:32

// Inheritance
// parent class/base class
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }
// const animal1=new Animal("tom",2);
// console.log(animal1);
// console.log(animal1.eat());

// // subclass/derived class
// class Dog extends Animal{
// }
// const tommy=new Dog("tommy",3);
// console.log(tommy.isCute());

// // Same method in subclass - confusing
// // super
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }
// const animal1=new Animal("tom",2);

// // object/instance
// class Dog extends Animal{
//     constructor(name,age,speed){
//         super(name,age);
//         this.speed=speed;
//     }
//     run(){
//         return `${this.name} is running at ${this.speed} kmph`;
//     }
//     eat(){
//         return `${this.name} is eati'n`;
//     }
// }
// const tommy=new Dog("tommy",3,45);
// console.log(tommy.run());
// console.log(tommy.eat());


// getters and setters
// method -> get -> property
// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }
//     // fullName(){
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1=new Person("anu","murade",19);
// // console.log(person1.fullName());
// console.log(person1.fullName);

// set
// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     // setName(firstName,lastName){
//     //     this.firstName=firstName;
//     //     this.lastName=lastName;
//     // }
//     set fullName(fullName){
//         const [firstName,lastName]=fullName.split(" ");
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// }
// const person1=new Person("anu","murade",19);
// console.log(person1.firstName);
// console.log(person1.lastName);
// // person1.setName("anushka","Murade"); //1
// // person1.firstName="anushka"; //2
// // person1.lastName="Murade"; //2
// person1.fullName="anushka Murade"; //3
// console.log(person1.firstName);
// console.log(person1.lastName);


// static methods and properties - can be access using class directly, there is no need of making objects
// class Person{
//         constructor(firstName,lastName,age){
//             this.firstName=firstName;
//             this.lastName=lastName;
//             this.age=age;
//         }
//         static classInfo(){
//             return 'this is person class';
//         }
//         static desc="static property";
//         get fullName(){
//             return `${this.firstName} ${this.lastName}`;
//         }
//         set fullName(fullName){
//             const [firstName,lastName]=fullName.split(" ");
//             this.firstName=firstName;
//             this.lastName=lastName;
//         }
//         eat(){
//             return `${this.firstName} is eating`;
//         }
//         isSuperCute(){
//             return this.age<=1;
//         }
//         isCute(){
//             return true;
//         }
//     }
//     const person1=new Person("anu","murade",19);
//     // console.log(person1.classInfo()); //error-since here we are using object to access the static method
//     const info=Person.classInfo();
//     console.log(Person.desc);
//     console.log(info);



