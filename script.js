//PROMISES
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=> {
        if (request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            resolve(data) 
        }
        else if(request.readyState === 4){
            reject("coulnt fetch the data") 
        }
            
        
    })

    request.open('GET', resource);
    request.send();
    })
} 


/*getTodos('https://jsonplaceholder.typicode.com/todos',(err, data)=> { //convention böyle. önce error sonra data
    console.log("callback fired");
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
}) */

//PROMISES

getTodos('https://jsonplaceholder.typicode.com/todoss').then(data => {
    console.log("promise resolved", data)
}).catch(err => {
    console.log("promise rejected", err)
})