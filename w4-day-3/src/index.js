import navbar from "../components/navbar.js";
import '../styles/index.css';
import axios from "axios";

let one=document.querySelector("#one");
let bow=document.querySelector("#two");
one.innerHTML=navbar();

let boom=async ()=>{
    let bomma= await axios.get(`https://fakestoreapi.com/products/category/jewelery`);
    appendinghere(bomma.data);
}
boom();
let appendinghere=(dataone)=>{
dataone.forEach((ele,index) => {
    let one=document.createElement("div");

    let two=document.createElement("img");
    two.setAttribute("src",ele.image);

    let three=document.createElement("h2");
    three.innerText=ele.category;
    
    let four=document.createElement("h2")
    four.innerText=ele.price;

    one.append(two,three,four);

    bow.append(one);

});
}