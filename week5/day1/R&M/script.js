// Fetching API Data
const url = 'https://randomuser.me/api/?results=50';
let Data =[];
fetch(url)
 .then(function(response){
     return response.json();
 })
 .then(function(myJson){
     const {results} = myJson;
     Data.push(results);
});

 console.log(Data);


// Function Returning JSON data into HTML format.
function ParsedData(Person) {
    
    return `
    <div id = info>
        <img src ="${project.image}"id ="img">
        <div id = "text">
            <div id = "name">${project.name}</div>
            <div id = "description_title">Description</div>
            <div id = "description_text">${project.description}</div>
            <div id = "experience_title">Experience Gained?</div>
            <div id = "experience_text">${project.experience}</div>
        </div>
        
    </div>
    `
}

document.querySelector("#project_containers").innerHTML = `
 ${Data.results.map(ParsedData).join(" ")}
`