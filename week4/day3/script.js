const john = {
    "fullname": "John Doe",
    "FavColor": "blue",
    "sayName": function(){
        console.log(`my name is ${this.fullname}`);
    }
}

console.log(john.fullname);
john.sayName();   
