const button = document.querySelector("#submitbutton");

button.addEventListener("click",clicklistener);

function clicklistener(event){
    event.preventDefault();
    const inputElement = document.querySelector("#username");
    const userInput = inputElement.value;
    alert(userInput);
    inputElement.value = "";
}