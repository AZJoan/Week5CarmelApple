

var numberArray = [];

// button click - Add My Number
function AddNumber() {
    // retrieve value entered by user
    var inputNumber = document.getElementById("userNumber").value;
    // convert value to a number
    var iNumber = Number(inputNumber);
    // if not a number - warn user - clear value - reset number field to zero
    if (Number.isNaN(iNumber)) {
        alert("You must enter a number. Please try again");
        iNumber = 0;
        document.getElementById("userNumber").value = " ";
    } else {
        // add number to array - clear field on screen - call ShowTotal function
        numberArray.push(iNumber);
        document.getElementById("userNumber").value = " ";
        ShowTotal();
    }
}

// function to display out what is in number array & create total
function ShowTotal(){

    var total = 0;
    console.log("Numbers Entered: ");
    // retrieve each number from array and add for a total sum
    for(var i = 0; i < numberArray.length; i++){
        // console.log("numberArray[i] ", numberArray[i]);
        total += numberArray[i];
        // display each number
        console.log(numberArray[i]);
    }
    // display a total line and total sum
    console.log("____________________");
    console.log("Total of numbers: ", total);
}

// button click - Reset
function Reset(){
    // clear number array - display message on console
    numberArray.length = 0;
    console.log("Number Array Reset");
}
