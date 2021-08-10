//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

/* const numbers = [3,6,8,2]
const fiveAndGreaterOnly = numbers.filter(function(num){
    if(num >= 5){
        return true
    }
})
console.log(fiveAndGreaterOnly) */


//2) Given an array of numbers, return a new array that 
//only includes the even numbers.

/* const numbers = [3,6,8,2]
const evensOnly = numbers.filter(function(num){
    if (num % 2 === 0){
        return true
    }
}) */

//3) Given an array of strings, return a new array that only includes 
///those that are 5 characters or fewer in length

/* const randomWords = ["dog", "wolf", "by", "family", "eaten", "camping"]
const fiveCharactersOrFewerOnly = randomWords.filter(function(words){
    if (words.length <= 5){
        return true
    }
})
console.log(fiveCharactersOrFewerOnly) */

//4) Given an array of people objects, return a new array that has filtered 
//out all those who don't belong to the club.

/* const ilummiHopefuls = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const peopleWhoBelongToTheIlluminati = ilummiHopefuls.filter(function(person){
    if (person.member === true){
        return true
    }
})
console.log(peopleWhoBelongToTheIlluminati) */

//5) Make a filtered list of all the people who are old enough to see The Matrix 
//(older than 18)

const wantMovie = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const ofAge = wantMovie.filter(function(adult){
    if (adult.age >= 21){
        return true
    }
})
console.log(ofAge)