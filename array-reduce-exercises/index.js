//1) Turn an array of numbers into a total of all the numbers

/* const total = [1, 2, 3]
const addNums = total.reduce(function(final, num){
    final += num
    return final
})

console.log(addNums) */

//2) Turn an array of numbers into a long string of all those numbers.

/* const easyAs = [1, 2, 3]
const stringConcat = easyAs.reduce(function(final, num){
    final.push(num)
    return final
}, [])
console.log(stringConcat) */

//3) Turn an array of voter objects into a count of how many people voted

/* const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const totalVotes = voters.reduce(function(final, voter){
    if(voter.voted === true){
        final++
    }
    return final
}, 0)
console.log(totalVotes) */

//4) Given an array of all your wishlist items, figure out how much it would 
//cost to just buy everything at once

/* const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const shoppingSpree = wishlist.reduce(function(final, cost){
    final+=cost.price
    return final
}, 0)
console.log(shoppingSpree) */

//5) Given an array of arrays, flatten them into a single array
//Note: Take a look at Array.concat() to help with this one

/* const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
const flatten = arrays.reduce(function(final, item){
    final.push(item)
    return final
}, [])

console.log(flatten) */

//6) Given an array of potential voters, return an object 
//representing the results of the vote

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const voterResults = voters.reduce(function(final, voter){
    if(voter.age <= 25){
        final.youngTotal++
    }
    if(voter.age <= 25 && voter.voted){
        final.youngVoted++
    }
    if(voter.age >= 26 && voter.age <= 35){
        final.midTotal++
    }
    if(voter.age >= 26 && voter.age <= 35 &&voter.voted){
        final.midVoted++
    }
    if (voter.age >= 36){
        final.olderTotal++
    }
    if (voter.age >= 36 && voter.voted){
        final.olderVoted++
    }
    return final
}, {youngTotal: 0, youngVoted:0, midTotal: 0, midVoted:0, olderTotal:0, olderVoted: 0})
console.log(voterResults)