//1) Sort an array from smallest number to largest

/* const nums = [1, 3, 5, 2, 90, 20]
const leastToGreatest = nums.sort(function(a,b){
    return a - b
})
console.log(leastToGreatest) */

//2) Sort an array from largest number to smallest

/* const nums = [1, 3, 5, 2, 90, 20]
const greatestToLeast = nums.sort(function(a,b){
    return b - a
})
console.log(greatestToLeast) */

//3)Sort an array from shortest string to longest

/* const dogCamp = ["dog", "wolf", "by", "family", "eaten"]
const lengthSort = dogCamp.sort(function(a,b){
    return a.length - b.length
})
console.log(lengthSort) */

//4)Sort an array alphabetically

/* const alphaDog = ["dog", "wolf", "by", "family", "eaten"]
const alphabetically = alphaDog.sort()
console.log(alphabetically) */

//5) Sort the objects in the array by age

/* const people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

const byAge = people.sort(function(a,b){
    return a.age - b.age
})
console.log(byAge) */