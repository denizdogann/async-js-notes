//CALLBACK FUNCTIONS
const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=> {
        if (request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data) // ilk parametre error.error olmadığı için undefined.
        }
        else if(request.readyState === 4){
            callback("coulnt fetch the data", undefined) //ikinci parametre data ama burda error var o yüzden return undefined
        }
            
        
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
} 


getTodos( (err, data)=> { //convention böyle. önce error sonra data
    console.log("callback fired");
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})


