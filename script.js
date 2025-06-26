let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); // get all buttons

let string = ""; // to store input button values and also passed as a result of eval() to inputBox.
let arr = Array.from(buttons); // so we can apply event listner to all buttons by iterating through array.

arr.forEach((button) => {

    button.addEventListener('click', (e) =>{
        // for evaluation??
        if(e.target.innerHTML == '='){ 
            string = eval(string);
            input.value = string; // update inputBox
        }

        // All clear
        else if(e.target.innerHTML == 'AC'){ 
            string = "";
            input.value = string; // update inputBox
        }
        // Delete
        else if(e.target.innerHTML == 'DEL'){ 
            string = string.substring(0, string.length-1);
            input.value = string; // update inputBox
        }
        // User I/P 
        else{
            string += e.target.innerHTML;  //store user I/P values to string
            input.value = string;  // update inputBox
        }
        
    })
})