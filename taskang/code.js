url = "https://jsonplaceholder.typicode.com/posts";
async function getPostsFromApi(){
    await fetch(url)
    .then((Response)=> Response.json(Response)) 
    .then((data)=> console.log(data))
    .catch((err)=>console.log(err.message)) 
          //takes function as a parameter(callbackfunction):is a parameter for antoher function 
}
getPostsFromApi();