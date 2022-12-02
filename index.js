function writeCards(myarray, message){
    let newArray = [];

    for(let i = 0; i < myarray.length; i++){
        newArray[i] = `Thank you, ${myarray[i]}, for the wonderful ${message} gift!`;
    }
    return newArray
}


function countDown(start){
    for(let i = start; i >= 0; i--)
    {
        console.log(i);
    }
}
