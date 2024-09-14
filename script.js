// fetch api

fetch("https://jsonplaceholder.typicode.com/todos").then((response)=> {
    console.log("resolved", response);
    return response.json();
}).then( data => {
    console.log(data);
}).catch((err)=> {
    console.log("rejected", err)
})

//const data = response.json() OLMUYOR ÇÜNKÜ RESPONSE.JSON BİR PROMISE.
//BU YÜZDEN DİREK ONU DA RETURNE BAĞLAYIP ÜSTÜNE THEN ÇAKIYORUZ(AS IN RESOLVED)