const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const alphaBetter = alphabet.split("")

function forception(people, alphaBetter){
for(i = 0; i < people.length;i++){
    console.log(people[i])
    for(j = 0; j < alphaBetter.length; j++){
        console.log(alphaBetter[j])
    }
}
}

forception (people, alphaBetter)