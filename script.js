const getTodos = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    
    if(response.status !== 200){
        throw new Error("cannot fetch the data")
    }
    
    const data = await response.json() //response.json bir data değil promise return eder
    return data
}

getTodos()
.then( data => console.log(data))
.catch(err => console.log(err.message))