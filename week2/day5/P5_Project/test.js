function outer() { 

    function inner() {
        console.log("hi");
    }
    inner(); // call it
}

outer();