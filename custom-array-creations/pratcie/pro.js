
//=>Now we are disscusing about proto-type methods

//=>inheratance Object-creation

// object-Creation

// var person={
//     name:"praveen kumar yadav",
//     age:"23",
//     city:"bangalore",
//     town:"Electronic-City",
//     course:"full stack web development"
// };

// console.log(person);
// const person1=Object.create(person);
// person1.name="ganesh kumar yadav",
// person1.age="22",
// person1.city="Kalyandurgam";
// console.log(person1)

// function output(one,two,three){
//     this.name=one;
//     this.age=two;
//     this.city=three;
// }
// output.prototype.village=function(vil){
//     this.village=vil;
// }
// const come=new output("praveen kumar",23,"bangalore");
// come.village("Kalyandurg");
// const common=new output("ganesh",21,"kalyandurg")
// common.village("u-puram")

// console.log(come);
// console.log(common);

// var student={
//     name:"praveen",
//     age:23,
//     city:"bangalore",
//     town:"Electronic-City",
//     field:"full stack developer"
// };

// var student1=Object.create(student,{name:{value:"ganesh"},age:{value:24},city:{value:"Kalyandurg"},town:{value:"nuthimadugu"},field:{value:"stack-developer"}});
// console.log(student1)


//second-time

//=>Object-Method
// var one={
//     name:"praveen kuamr yadav",
//     age:23,
//     myname:function(){
//         console.log(this.name);
//     }
// }
// one.myname();

//=>constructor functions array
// let arr=[];
// function hello(one,two,three){
//     this.name=one;
//     this.age=two;
//     this.city=three;
//     arr.push(this);
// }
// const out=new hello("praveen",23,"Bangalore");
// const out1=new hello("ganesh",23,"kalyandurg");
// console.log(arr);

//=>Returning Objects
// function hello(one,two,three){
//     let obj={};
//     obj.name=one;
//     obj.age=two;
//     obj.city=three;
//     return obj;
// }
// const out=hello("praveen",23,"bangalore");
// console.log(out);


//=>Call, apply, bind

// let one={
//     name:"praveen kumar",
//     age:23,
// };

// let two={
//     name:"vankata ramana swamy",
//     age:42,
// };

// let three={
//     name:"vani sree",
//     age:35,
// };

// function bolloe(one,two){
//     console.log(`My name is ${this.name} my work is ${one} and staying in ${two}`);
// }
// //Call
// bolloe.call(two,"farmer","kalyandurg");
// //Apply
// let arr=["fullstack","bangalore"];
// bolloe.apply(one,arr);
// //Bind
// bolloe.bind(three,"house-wife","kalyandurg");

//=>Contuning on prototype methods
//=>Inheritance 

// let bike={
//     name:"yamaha",
//     model:"2021",
//     engine:"Bs6-new-vesion",
//     milage:"36 k/h",
//     price:"100000",
// }
// console.log(bike)
// let bikeone=Object.create(bike,{name:{value:"suziki"},model:{value:"2022"},engine:{value:"Bs4"},milage:{value:"45 k/h"},price:{value:"1 lakh 15 thousand"}});
// bikeone.name="ganesh";
// console.log(bikeone);

//=>Inheritance using constructor functions

// function constructor(one,two,three,four,five){
//     this.name=one;
//     this.model=two;
//     this.engine=three;
//     this.wheel=four;
//     this.price=five;
// }

// const boom=new constructor("Yamaha","2022","BS6","Ceat","1 lakh");
// const boomone=new constructor("suziki","2022","BS4","oleia","1 lakh 14 thousand");

// constructor.prototype.safety=function(safe){
//     this.safety=safe;
// }
// boom.safety="No-Safety";
// boomone.safety="Safety";
// console.log(boom);
// console.log(boomone)

//=>Custom Arrays in javascript

// let one=[1,2,3];
// console.log(one);
// console.log("_______________");

// let two=new Array(1,2,3,4,5);
// console.log(two);
// console.log("______________");





//=>custom array object
// function student(one,two,three,four,five){
//     this.name=one;
//     this.age=two;
//     this.city=three;
//     this.study=four;
//     this.field=five;
// }

// const output=new student("praveeen",23,"Bangalore","BCA","Full-saack");
// const output1=new student("praveeen",23,"Bangalore","BCA","Full-saack");
// const output2=new student("praveeen",23,"Bangalore","BCA","Full-saack");
// const output3=new student("praveeen",23,"Bangalore","BCA","Full-saack");
// const output4=new student("praveeen",23,"Bangalore","BCA","Full-saack");
// function customobject(){
//     Object.defineProperty(this,"length",{
//         value:0,
//         writable:true,
//         enumerable:false,
//     })
//     this.length=arguments.length;
// for(let i=0; i<arguments.length; i++){
//     this[i]=arguments[i];
// }
// }
// const outputone=new customobject(output,output1,output2,output3,output4);
// console.log(Object.values(outputone));

// customobject.prototype.push=function(ele){
//     this[this.length]=ele;
//     this.length++;
// }
// outputone.push(output);
// console.log(Object.values(outputone));

// customobject.prototype.pop=function(){
//     delete this[this.length-1];
//     this.length--;
// }
// outputone.pop();
// console.log(Object.values(outputone));

// customobject.prototype.print=function(){
//     console.log(Object.values(outputone));
// }
// outputone.print();

// var arr=[];
// function hello(one,two,three,four){
//     this.name=one;
//     this.age=two;
//     this.city=three;
//     this.field=four;
//     arr.push(this);
// }
// const boom=new hello("one","two","three","four");
// console.log(arr);

// function custom(){
//     Object.defineProperty(this,"length",{
//         value:0,
//         writable:true,
//         enumerable:false,
//     })
//     this.length=arguments.length;
//   for(var i=0; i<arguments.length; i++){
//     this[i]=arguments[i];
//   }
// }
// const one=new custom(1,2,3,4,5,6,7);
// console.log(Object.values(one));

// custom.prototype.pop=function(value){
//     this[this.length]=value;
//     this.length++;
// }
// one.pop(9);
// console.log(Object.values(one));

// custom.prototype.pop=function(){
//     delete this[this.length-1];
//     this.length--;
// }
// one.pop();
// console.log(Object.values(one));

// custom.prototype.print=function(){
//     console.log(Object.values(one));
// }
// one.print();

//=>Custom array object
// var array=[];
// function hello(one,two,three,four,five){
//     this.name=one;
//     this.age=two;
//     this.city=three;
//     this.study=four;
//     this.gender=five;
//     array.push(this);
// }
// const outone=new hello("praveen","23","bangalore","full-stack","male");
// const outone1=new hello("praveen","23","bangalore","full-stack","male");
// const outone2=new hello("praveen","23","bangalore","full-stack","male");
// const outone3=new hello("praveen","23","bangalore","full-stack","male");
// const outone4=new hello("praveen","23","bangalore","full-stack","male");

// console.log(array);
// function custom(){
//     Object.defineProperty(this,"length",{
//         value:0,
//         writable:true,
//         enumerable:false,
//     })
//     this.length=arguments.length;
// for(let i=0; i<arguments.length; i++){
//     this[i]=arguments[i];
// }
// }

// const boom=new custom(outone,outone1,outone2,outone3,outone4);

// console.log(Object.values(boom));

// custom.prototype.push=function(ele){
//     this[this.length]=ele;
//     this.length++;
// }
// boom.push(outone);
// console.log(Object.values(boom))

// custom.prototype.pop=function(){
//     delete this[this.length-1];
//     this.length--;
// }
// boom.pop();
// console.log(Object.values(boom));

// custom.prototype.print=function(){
//     console.log(Object.values(boom));
// }
// boom.print();

// function bollo(one,two,three,four,five){
//     this.name=one;
//     this.age=two;
//     this.city=three;
//     this.gender=four;
//     this.study=five;
// }
// const boom=new bollo("praveen","23","Bangalore","male","full-stack");
// const boom1=new bollo("praveen","23","Bangalore","male","full-stack");
// const boom2=new bollo("praveen","23","Bangalore","male","full-stack");
// const boom3=new bollo("praveen","23","Bangalore","male","full-stack");
// const boom4=new bollo("praveen","23","Bangalore","male","full-stack");
// console.log(boom);

// function hello(){
//     Object.defineProperty(this,"length",{
//         value:0,
//         writable:true,
//         enumerable:false,
//     })
//     this.length=arguments.length;
// for(let i=0;i<arguments.length;i++){
//     this[i]=arguments[i];
// }
// }

// const outone=new hello(boom,boom1,boom2,boom3,boom4);
// console.log(Object.values(outone));

// hello.prototype.push=function(value){
//     this[this.length]=value;
//     this.length++;
// }
// outone.push(boom);
// console.log(Object.values(outone));

// hello.prototype.pop=function(){
//     delete this[this.length-1];
//     this.length--;
// }
// outone.pop();
// console.log(Object.values(outone));

// hello.prototype.print=function(){
//     console.log(Object.values(outone));
// }
// outone.print();

// console.log("one");
// console.log("two");
// console.log("three");
// for(let i=0; i<=1000000000;i++){

// }
// console.log("four");

//settimeout

