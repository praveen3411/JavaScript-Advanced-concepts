let taktwo=document.querySelector("#attach");
let takthree=document.querySelector("#attachone")
let takefour=document.querySelector("#ra");

function boom(){
    return true;
}


let take=document.querySelector("#done");
take.addEventListener("click",hellobro);
function hellobro(){
    let takeone=document.querySelector("#selall").value;

    let output=new Promise(function(resolve,reject){
        let here=boom();
        let time=Math.random()*4000;
        if(here==true){
            setTimeout(function(){
                resolve(takeone);
            },time)
        }
        else{
            setTimeout(function(){
                reject("Your order is not avaliable");
            },time);
        }
    })
    output.then(function(val){
        if(val=="Chicken"){
            taktwo.src="https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8&auto=format&fit=crop&w=600";
            takthree.innerHTML=Math.floor(Math.random()*3223554)+"CHIKBOOK";
            takefour.innerHTML="Item-Booked"

        }
        if(val=="Burger"){
            taktwo.src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyJTIwa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600";
            takthree.innerHTML=Math.floor(Math.random()*2324542)+"BURGBOOK";
            takefour.innerHTML="Item-Booked"
        }
        if(val=="Pizza"){
            taktwo.src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600";
            takthree.innerHTML=Math.floor(Math.random()*2345334)+"PIZZBOOK";
            takefour.innerHTML="Item-Booked"
        }
        if(val=="Better-guard-fry"){
            taktwo.src="https://media.istockphoto.com/photos/pot-of-bitter-gourd-or-karela-curry-on-wooden-background-picture-id832544392?k=20&m=832544392&s=612x612&w=0&h=72KzlRDk_f3eZCxvhoqPx-ljpS_tlWwyU6dCOpS26to=";
            takthree.innerHTML=Math.floor(Math.random()*23343432)+"BETTbOOK";
            takefour.innerHTML="Item-Booked"
        }
        if(val=="Chat-Puri"){
            taktwo.src="https://images.unsplash.com/photo-1596450512748-2dae774fc38a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhdCUyMHB1cml8ZW58MHx8MHx8&auto=format&fit=crop&w=600";
            takthree.innerHTML=Math.floor(Math.random()*32454543)+"KUTTBOOK";
            takefour.innerHTML="Item-Booked"
        }
    }).catch(function(ele){
        taktwo.src="https://images.unsplash.com/photo-1531928351158-2f736078e0a1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1wdHklMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600";
        takthree.innerHTML=Math.floor(Math.random()*2424324)+"NOTBOOK";
        takefour.innerHTML="Swory item not avaliable";
    })

}