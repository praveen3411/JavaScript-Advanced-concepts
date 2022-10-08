let array=JSON.parse(localStorage.getItem("user"))
  let take=document.querySelector("#wallet_balance").innerHTML=array.wallet;
  let make=document.querySelector("#voucher_list");
  let arrayone=JSON.parse(localStorage.getItem("purchase")) || [];

  let newfunction=async()=>{
    try {
      let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;
      let dataone=await fetch(url);
      let outdata=await dataone.json();
      appendinghere(outdata[0].vouchers);
    } catch (error) {
      console.log(error)
    }
  }
  newfunction();


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
    four.innerText="Buy";
    four.setAttribute("class","buy_voucher")
    four.addEventListener("click",function(){
      callingfunction(ele);
    })

    cre.append(first,second,third,four);
    make.append(cre);
  });
}

let callingfunction=(ele)=>{
  arrayone.push(ele);
  localStorage.setItem("purchase",JSON.stringify(arrayone));
  let hello=array.wallet;
  let money=ele.price;
  let hel=hello-money;
  if(hello>hel && hel>0){
    alert("Hurray! purchase successful");
    array.wallet=hel;
    take.innerHTML=array.wallet;
    localStorage.setItem("user",JSON.stringify(array));
    window.location.reload();
  }
  else{
    alert("Sorry! insufficient balance")
  }
}