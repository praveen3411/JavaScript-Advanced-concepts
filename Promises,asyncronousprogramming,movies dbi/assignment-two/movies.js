let movies=[
    //Oject-one
    {
        name:"Bahuballi-1",
        releasedate:"2018",
        poster:"https://i.pinimg.com/564x/cf/c1/b0/cfc1b006baf448b197da9b362b8ebfa4.jpg",
        idmb_rating:4,
    },
    {
        name:"Bahuballi-2",
        releasedate:"2020",
        poster:"https://i.pinimg.com/564x/9f/71/9e/9f719e15edc30e4c4d24efd5856c96f8.jpg",
        idmb_rating:5,
    },
    {
        name:"Garbar-Singh",
        releasedate:"2014",
        poster:"https://i.pinimg.com/564x/e5/86/80/e58680cb0597feffc91a8b236d11f522.jpg",
        idmb_rating:3,
    },
    {
        name:"Robo",
        releasedate:"2017",
        poster:"https://i.pinimg.com/564x/e2/aa/2e/e2aa2ed0b33fa121c09ec9e67b54b253.jpg",
        idmb_rating:3,
    },
    {
        name:"Dangal",
        releasedate:"2018",
        poster:"https://i.pinimg.com/564x/64/14/c9/6414c974a134e3d293ca06acb5be88b6.jpg",
        idmb_rating:5,
    },
    {
        name:"Shershaan",
        releasedate:"2021",
        poster:"https://i.pinimg.com/564x/88/69/cf/8869cf023da409bd835d87fcc9a8d021.jpg",
        idmb_rating:3,
    },
    {
        name:"Kgf",
        releasedate:"2020",
        poster:"https://i.pinimg.com/564x/74/99/72/7499726622b5067dc5cc678651a85638.jpg",
        idmb_rating:4,
    },
    {
        name:"RRR",
        releasedate:"2022",
        poster:"https://i.pinimg.com/564x/65/7b/40/657b406d276b6653f5aa4162433bc3f1.jpg",
        idmb_rating:5,
    },
    {
        name:"Archara",
        releasedate:"2022",
        poster:"https://i.pinimg.com/564x/f3/16/02/f3160267868f366a616ba48b43a19fe4.jpg",
        idmb_rating:2,
    }
]

thisdata(movies);
var array1=JSON.parse(localStorage.getItem("movies"))||[];
function thisdata(data){
    data.forEach(function(ele){
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
        five.innerText="Store-data",
        five.addEventListener("click",function(){
            hello(ele);
        })

        box.append(three,one,two,four,five);

        document.querySelector("#container").append(box);
    })

    function hello(ele){
        array1.push(ele);
        localStorage.setItem("movies",JSON.stringify(array1));
    }
}