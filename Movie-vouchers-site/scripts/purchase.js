let array=JSON.parse(localStorage.getItem("user"))
let take=document.querySelector("#wallet_balance").innerHTML=array.wallet;
let make=document.querySelector("#voucher_list");
let brave=document.querySelector("#purchased_vouchers");
let arrayone=JSON.parse(localStorage.getItem("purchase")) || [];


  let appendinghere=(data)=>{
  data.forEach((ele,index) => {
    let cre=document.createElement("div");
    cre.setAttribute("class","voucher");

    let first=document.createElement("img");
    first.src=ele.image;

    let second=document.createElement("h2");
    second.innerText=ele.name;

    let third=document.createElement("p");
    third.innerText=ele.price;

    let four=document.createElement("button");
    four.innerText="Remove";
    four.setAttribute("class","buy_voucher")
    four.addEventListener("click",function(){
      callingfunction(ele,index);
    })
    cre.append(first,second,third,four);
    brave.append(cre);
  });
}
appendinghere(arrayone)

let callingfunction=(ele,index)=>{
  arrayone.splice(index,1)
  localStorage.setItem("purchase",JSON.stringify(arrayone));
  window.location.reload();
}