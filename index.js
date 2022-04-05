const myArray = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4]

const update = myArray.filter(function(value,index,array){
    return array.indexOf(value) !== index
})

console.log(update)
