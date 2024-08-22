



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

    return new Promise ((resolve ,reject) => {

        setTimeout(() => {
            datas.push(newdata);
            let error=false;
            if(!error){
                resolve();

            }else{
                reject("kuch sahi nhi hai..")

            }
    },2000);
})

    
}

async function start () {
    await createdata({name: "vivek",Profression: "software eng"})
    getDatas();

}
start();

//createdata({name: "vivek",Profression: "software eng"}).then (getDatas)



//output::::






//this solve by aysns await ............p funtion .........................