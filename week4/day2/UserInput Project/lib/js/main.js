
const button = document.querySelector("#submit_button");

button.addEventListener("click",clicklistener);

function clicklistener(event){

    event.preventDefault();

    const input_title = document.querySelector("#title_input");
    let main_title = document.querySelector("#main_title")
    const input_noun = document.querySelector("#noun");
    const input_verb = document.querySelector("#verb");
    const input_adjective = document.querySelector("#adjective");

    main_title = input_title.value;
    console.log(main_title);

    if(input_noun.value == "" || input_title.value == "" || input_verb.value == ""||input_adjective.value == ""){
        alert("Please fill in all fields");
    }

    else{
        document.querySelector(".form_container").style.display = "none";
        let newT = document.querySelector("#story_result");
        newT.innerHTML = `Last night I ate a ${input_noun.value}, and today I just had to ${input_verb.value}. What a ${input_adjective.value} day!`
    }
    
}