let getdataone=async(url)=>{
    try {
        let make=await fetch(url);
        let take=await make.json();
        return take;
    } catch (error) {
        console.log(error)
    }
}


let onemore=(data,locations)=>{
    data.forEach((ele,index) => {
        let cre=document.createElement("div");

        let one=document.createElement("img");
        one.setAttribute("src",ele.image);
        
        let two=document.createElement("h2");
        two.innerText=ele.price;

        let three=document.createElement("h2");
        three.innerText=ele.id;

        let four=document.createElement("h2");
        four.innerText=ele.category;

        cre.append(one,two,three,four);
        
        locations.append(cre);
    });
}

export {getdataone,onemore};