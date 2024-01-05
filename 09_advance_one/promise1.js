//creation of promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography related, network calls
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() //to connect to .then while consumption otherwise .then won't be executed
    }, 1000)
})

//consumption of promises
promiseOne.then(function(){
    console.log("Promise consumed");
})

// creating and consuming a promise without storing it in a variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

//WKT, resolve is connected to .then, so if we need to do any operation on the data recieved through the async task 
//then we can do so in the .then by passing the data to it using resolve function as shown below
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})
//consumption and retrievel of values from resolve 
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        //if suppose we have an async task it's result will decide the next operation to be performed
        let error = false
        // no error
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {// there's an error
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//consumption of promiseFour for resolve and reject i.e. .then and .catch respectively 
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username //this will be passed to the next .then function 
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


//creationg of promiseFive
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
//consuming promiseFive using async await
async function consumePromiseFive(){
    try {
        const response = await promiseFive //wait untill promiseFive gives response 
        console.log(response);//if response is got from resolve() function which means data is successfully got
    } catch (error) {
        console.log(error);//this will be executed when reject() is calledin promiseFive
    }
}
// this function call will execute above code of function
consumePromiseFive()

//handling promise of fetch using async await 
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')//wait untill you get the response from fetch
        const data = await response.json()//wait untill response is converted to a JSON object from string type, because it also takes time for conversion
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()

// handling promise of fetch using .then .catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()//will pass it to next then
})
.then((data) => {
    console.log(data);//print json object
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.