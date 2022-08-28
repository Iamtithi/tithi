console.clear();
console.log(window);
//how to create promise -pending,resolve,reject
const promise1=new Promise((resolve,reject)=>{
    let completePromise= true;
    if(completePromise){
        resolve("complete promise 1");
    }
    else{
        reject("compelete promise 1");
    }
});
console.log(promise);
promise1
.then((res)=>{
    console.log(err);
})
.catch((err)=>{
{
    console.log(err);

});