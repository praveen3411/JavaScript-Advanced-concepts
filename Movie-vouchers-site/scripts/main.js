function hello(name,email,address,wallet){
    this.name=name;
    this.email=email;
    this.address=address;
    this.wallet=wallet;
   }
   let array=JSON.parse(localStorage.getItem("user"))
    let submit=()=>{
      let name=document.querySelector("#name").value;
      let email=document.querySelector("#email").value;
      let address=document.querySelector("#address").value;
      let wallet=document.querySelector("#amount").value;
      let sum=0;
      sum=sum+Number(wallet)+Number(array);
      let newone=new hello(name,email,address,wallet);
      localStorage.setItem("user",JSON.stringify(newone));
      window.location.reload();
    }