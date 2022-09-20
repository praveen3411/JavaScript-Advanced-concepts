

let array1=JSON.parse(localStorage.getItem("movies"))||[];

jollyboy(array1);

function jollyboy(data){
    data.forEach(function(ele,index){
        let box=document.createElement("div");

        let one=document.createElement("h2");
        one.innerText=ele.name;

        let two=document.createElement("h4");
        two.innerText=ele.releasedate;

        let three=document.createElement("img");
        three.setAttribute("src",ele.poster);

        let four=document.createElement("p");
        four.innerText=ele.idmb_rating+"⭐";

        let five=document.createElement("button");
        five.innerText="cancel-ticket";
        five.addEventListener("click",function(){
            bro(ele,index)
        })
    
        box.append(three,one,two,four,five);

        document.querySelector("#connect").append(box);
        
    })
}

function bro(ele,index){
    array1.splice(index,1);
    localStorage.setItem("movies",JSON.stringify(array1));
    window.location.reload();
}