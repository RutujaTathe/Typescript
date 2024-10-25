var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var userUtils;
(function (userUtils) {
    var Parent = /** @class */ (function () {
        function Parent() {
            this.name = " "; // Specify the type of 'name'
        }
        Parent.prototype.setname = function (Name) {
            this.name = Name;
            return this.name;
        };
        return Parent;
    }());
    userUtils.Parent = Parent;
})(userUtils || (userUtils = {}));
// import { classicNameResolver } from "typescript";
// export {};
// class App {
//   test() {
//     console.warn("Test Function ");
//   }
// }
// let x = new App();
// x.test();
// var a: string = "rutuja";
// var b: boolean = true;
// console.warn(b);
// console.warn(a);
//****Array in typescript***********
// let users: string[] = ["anil", "jolly", "peter", "mario"];
//accept any type of variable
// let user: any[] = ["rutuja", 1, 2, 3];
// user.push(true);
// users.push("bruce");
// users[3] = "tony";
// console.warn(user);
// console.warn(users);
//objects in typescript //any is use to define any types of data
// let employee: any = {
//   name: "rutuja",
//   age: 30,
//   address: "usa",
// };
//change the value of name variable
// employee.name = "nikita";
//adding new properties in object
// employee.email = "rutuja@gmail.com";
// console.warn(employee);
//Interface
// interface employeetype {
//   name: string;
//   age: number;
//   address: string;
//   email: string;
//we can add any value also instead of datatype
// }
// let emp: employeetype = {
//   name: "ankita",
//   age: 18,
//   address: "pune",
//   email: "ankita@gmail.com",
// };
// console.warn(emp);
//union types :if we wanted to assign two different types of value to one variable we use | symbol
// let data: number | string = 100;
// data = "anil";
// console.warn(data);
///------------------------------------------------------
//interface:
// interface studentdata {
//   name: string;
//   age: number;
//   mobile_no: number;
//   //declaration of function inside interface
//   getname: () => string;
// }
// let student: studentdata = {
//   name: "rutuja",
//   age: 24,
//   mobile_no: 7066905814,
//   getname: function () {
//     // return "anil";
//     return this.name;
//   },
// };
// console.warn(student.getname());
// console.warn(student);
// ----------------------------------------------------------------
// function in typescript:
// function calc(a: number, b?: number): number {
//   return b ? a + b : a;
// }
// console.warn(calc(20, 30));
// ----------------------------------------------------------
// class in typescript:
// class App {
//   name;
//   address;
//   //whenever we make object ,constructor called automatically
//   constructor(name: string, address: string) {
//     this.name = name;
//     this.address = address;
//     console.warn("constructor called automatically");
//   }
//   //function that not return anything
//   getname(): void {
//     console.warn(this.name);
//   }
//   //function return string type variable
//   getaddress(): string {
//     return this.address;
//   }
// }
// //instance of aap class
// let a1 = new App("peter parkar", "pune");
// // console.warn(a1.getname());
// a1.getname();
// console.warn(a1.getaddress());
//---------------Inheritance-------------------
// class parent {
//   name = " ";
//   setname(name: string): void {
//     this.name = name;
//   }
// }
// class child extends parent {
//   getname(): string {
//     return this.name;
//   }
// }
// let c1 = new child();
// c1.setname("peter");
// console.warn(c1.getname());
//---------------Namespace(inter-realated code is their)----------------------
// if we want to create namespace in another file and want to access that then we add referance of that file
/// <reference path="./utils.ts"/>
var userUtils;
(function (userUtils) {
    var student = /** @class */ (function (_super) {
        __extends(student, _super);
        function student() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        student.prototype.getName = function () {
            return this.name;
        };
        return student;
    }(userUtils.Parent));
    userUtils.student = student;
    // getName(){
    //   return "anil";
    // }
})(userUtils || (userUtils = {}));
var s = new userUtils.student();
s.setname("tonny");
console.warn(s.getName());
