document.querySelector("form").addEventListener("submit",myfunction);
function Studentdetails(one,two,three,four,five){
    this.name=one;
    this.course=two;
    this.unit=three;
    this.image=four;
    this.batch=five;
}
function myfunction(){
    event.preventDefault();
    let name=one.two.value;
    let course=one.three.value;
    let unit=one.four.value;
    let image=one.five.value;
    let batch=one.six.value;
    let out=new Studentdetails(name,course,unit,image,batch);
    let array=JSON.parse(localStorage.getItem("students"))||[];
    array.push(out);
   localStorage.setItem("students",JSON.stringify(array));
   window.location.reload();
}


// function calci(){
//     let tak=document.querySelector("#app");
//     let array=JSON.parse(localStorage.getItem("students"))||[];
//     var obj={};
//     for(var i=0; i<array.length; i++){
//         let char=array[i];
//         if(obj[char.batch]==undefined){
//             obj[char.batch]=1;
//         }
//         else{
//             obj[char.batch]=obj[char.batch]+1;
//         }
//     }
//     for(var key in obj){
//         tak.append(key+"----"+obj[key]);
//     }
// }
// calci();

function hellobro(){
    let tak=document.querySelector("#app");
     let array=JSON.parse(localStorage.getItem("students"))||[];
     let obj={};
     for(var i=0; i<array.length; i++){
        let char=array[i];
        if(obj[char.batch]==undefined){
            obj[char.batch]=1;
        }
        else{
            obj[char.batch]=obj[char.batch]+1;
        }
     }
     for(var key in obj){
        tak.append(key+"----"+obj[key])
        
     }
}
hellobro();