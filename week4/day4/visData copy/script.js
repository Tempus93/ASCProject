// tracks the number of results and parses it into the web
function ParsedData(person) {
    return `
    <div class = "infomation">
        <img src = "${person.picture.medium}" id = "img">
        <h2 id = "name">${person.name.first} ${person.name.last}</h2>
        <h2 id = "Age">Age: ${person.dob.age}</h2>
        <h2 id = "email">${person.email}</h2>
        <h2 id = "phone">cell: ${person.phone}</h2>
    </div>
    `
}

document.getElementById("num").innerHTML = `${data.results.length}`

document.getElementById("containers").innerHTML = `
 ${data.results.map(ParsedData).join(" ")}
`





