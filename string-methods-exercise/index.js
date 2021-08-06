//Write a function that takes a string as a parameter and returns the 
//same string in all capital letters followed by all lowercase letters.

const capilizeAndLowercase = ("HelLo")

function helloTwice(){
    const capital = capilizeAndLowercase.toUpperCase()
        console.log(capital)
    const lower = capilizeAndLowercase.toLowerCase()
        console.log(lower)
    const bigLittle = capital.concat(lower)
        console.log(bigLittle)
}
helloTwice()

//Write a function that takes a string as a parameter and returns a number that is 
//half the string's length, rounded down. 

var findMiddleIndex = "VSchool"

function halfTheSize (){
    for (i = 0; i < findMiddleIndex.length; i++){
        const halfIndex = (findMiddleIndex.length)/2
        const lastStep = Math.floor(halfIndex)
            console.log(lastStep)
    }
}

halfTheSize(findMiddleIndex)

//Write a function that uses slice() and the other functions you've 
//written to return the first half of the given string.

var sliceIt = "Lake Huron"

function chopInHalf (){
    const halfSize = Math.floor(sliceIt.length / 2)
    const leftOver = sliceIt.slice(0, halfSize)
        console.log(leftOver)
}

chopInHalf()

//Write a function that takes a string as a parameter and returns 
//that string where the first half is capitalized, and the second half is lowercase.

const bigLetters = "I slit a sheet, a sheet i slit, and on the slitted sheet i sit"

function combineTheTwo(){
const bigLittle = bigLetters.slice(0, Math.floor(bigLetters.length / 2))
    console.log(bigLittle)
const littleBig = bigLetters.slice(Math.floor(-bigLetters.length / 2)) 
    console.log(littleBig)
const firstBig = bigLittle.toUpperCase()
    console.log(firstBig)
const thenSmall = littleBig.toLowerCase()
    console.log(thenSmall)
const finalProduct = firstBig.concat(thenSmall)
    console.log(finalProduct)
}

combineTheTwo(bigLetters)