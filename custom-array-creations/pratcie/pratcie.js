// var bro={
//     name:"praveen kumar",
//     age:23
// };
// var obj=Object.create(bro);
// console.log(obj.name+" "+obj.age);

// =>OBject-creation
// var one={
//     name:"praveen kumar",
//     age:23
// };
// var two=Object.create(one);
// console.log(two.name+" "+two.age);

// function person(one,two,three){
//     this.name=one;
//     this.age=two;
//     this.city=three;
// }

// person.prototype.village=function(om){
//     this.vill=om;
// }

// const output=new person("praveen",23,"bangalore");
// output.village("kld");
// console.log(output)


// =>Talking about inheretance
// const cat={
//     name:"cat",
//     legs:4,
//     fur:true,
//     tail:true,
//     type:"animal"
// };

// const tiger={
//     name:"tiger",
//     legs:4,
//     fur:true,
//     tail:true,
//     type:"animal"
// }
// const lion={
//     name:"lion",
//     legs:4,
//     fur:true,
//     tail:true,
//     type:"animal"
// }

// const tiger=Object.create(cat);
// tiger.name="tiger";
// console.log(tiger);

// const student={
//     batch:"web-18",
//     institute:"Masai-School",
//     unit:3,
//     course:"full stack"
// };

// const sl=Object.create(student,{name:{value:"ganesh"}});
// console.log(sl)

// const product={
//     name:"nike",
//     logo:"correct",
//     seller:"praveen"
// };

// const output=Object.create(product,{name:{value:"shoes"},logo:{value:"mohan"},seller:{value:"danny-bhai"}});

// console.log(output)

// =>Constructor function
// function Product(brand,logo,seller){
//     this.brand=brand;
//     this.logo=logo;
//     this.seller=seller;
// }
// Product.prototype.discount=function(disco){
//     this.discount=disco;
// }


// const output=new Product("nike","url","filpcart");
// output.discount("50%")
// const out1=new Product("nike","url","amazon");
// out1.discount("50%")

// console.log(output);
// console.log(out1)

// =>once.more

// function productone(name,brand,seller){
//     this.name=name;
//     this.brand=brand;
//     this.seller=seller;
// }

// productone.prototype.discount=function(disco){
//     this.discount=disco;
// }
// const output=new productone("formal","nike","flipcard");
// output.discount("50%")
// const out1=new productone("casual","roadstar","amazon");
// out1.discount("90%")

// console.log(output);
// console.log(out1);

// let arr=[1,2,3];

// let arr2=new Array(1,2,3);

// function myaray(a,b,c){
//     this[0]=a;
//     this[1]=b;
//     this[2]=c;
// }
// let boom=new myaray(3,4,5);
// console.log(boom);



// =>arrguments
// function check(){
//     console.log(arguments.length);
// }
// check(1,2,3,4,5);


// function myArray(){
//     Object.defineProperty(this,"length",{
//         value:0,
//         writable:true,
//         enumerable:false
//     })
//     this.length=arguments.length;
//     for(let i=0; i<arguments.length; i++){
//         this[i]=arguments[i];
//     }
// }
// let arr=new myArray(1,2,3,4,5);
// console.log(Object.values(arr));

// function bollo(){
//     this.length=arguments.length;
//     for(let i=0; i<arguments.length; i++){
//         this[i]=arguments[i]
//     }
// }
// var bomma=new bollo(1,2,3,6,7);
// console.log(Object.values(bomma));

// bollo.prototype.dis=function(rama){
//     this[this.length]=rama;
//     this.length++;
// }
// bomma.dis(9);
// console.log(Object.values(bomma));

// bollo.prototype.ra=function(){
//     delete this[this.length-1];
//     this.length--;
// }
// bomma.ra();
// console.log(Object.values(bomma));

