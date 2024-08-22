



//Async js programing

//callbacks   Promise Async await


const datas = [ 
    {name: "Ajay", Profression : "softaware eng"},
    {name: "anug", Profression : "software eng"}


];

function getDatas () {
    setTimeout (() => {
        let output =" ";
        datas.forEach((date,index)=>{
            output+= `<li> ${data.name}</li>`;

        }) 
        document.body.innerHTML= output

    },1000);

}

function createdata (newdata,callbacks ) {

    setTimeout(() => {
     datas.push(newdata);
     callbacks();

    },2000);

}



createdata({name: "vivek",Profression: "software eng"},getDatas)



//output::::


//ajay
//anuj
//vivek



//this solve by callbacks funtion .........................