/* Using the provided peopleArray (bottom of this article), write a function that:

    Returns a list of everyone older than 18, which is
    sorted alphabetically by last name, and where
    each name and age is embedded in a string that looks like an HTML <li> element.
 */
        const peopleArray = [
        {
            firstName: "Sarah",
            lastName: "Palin",
            age: 47
        },
        {
            firstName: "Frank",
            lastName: "Zappa",
            age: 12
        },
        {
            firstName: "Rick",
            lastName: "Sanchez",
            age: 78
        },
        {
            firstName: "Morty",
            lastName: "Smith",
            age: 29
        },
        {
            firstName: "Kyle",
            lastName: "Mooney",
            age: 27
        },
        {
            firstName: "Pasha",
            lastName: "Datsyuk",
            age: 13
        },
        {
            firstName: "Lev",
            lastName: "Tolstoy",
            age: 82
        }
    ]
const alphaBetter = peopleArray.sort(function(a, b){
    return a.lastName.localeCompare(b.lastName)
})
console.log(alphaBetter)

const oldEnough = alphaBetter.reduce(function(final,person){
            if(person.age >= 18){
                final.push("<li>" + person.firstName + " " + person.lastName + ", " + person.age + "</li>")
            }
            return final
    }, [])
console.log(oldEnough)
