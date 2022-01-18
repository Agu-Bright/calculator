//code for the toggle background color








//Variables

var display = document.getElementById('display');   //Calculator screen where result is shown
var sign = document.getElementById('opr');
var num = document.querySelectorAll(".num");    //list of numbers
var equal = document.getElementById('equals');
var ops = document.querySelectorAll(".opr");    //list of operators
var clear = document.getElementById('clear');
var theNum = "";    //current number
var oldNum = "";    //first number
var resultNum;      //result
var operators;         //batman




num.forEach(num => {    //looping through each of the number elements
    
    num.addEventListener('click', function(e){ //Add an event listener to each number elements
        var targetElement = e.target;                   //store the element clicked in a va
        var digit = targetElement.innerHTML;            //get and store the value of the element clicked
        theNum += digit;                                //add the digit var into the the number variable individually
        display.textContent = theNum;                   //display on the screen
        
    }); 

});

ops.forEach(ops => {    //looping through each of the operator elements
    
    ops.addEventListener('click', function(e){
        oldNum = theNum;
        theNum = "";
        display.textContent = theNum;
        var operator = e.target.textContent;
        operators = operator;
        sign.textContent = operators;
        console.log(operators);

        

    }); 
});




equal.addEventListener('click', function(){

    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);   
    if(operators == "/"){
        resultNum = oldNum/theNum;
    }     

    if(operators == "X"){
        resultNum = oldNum*theNum;
    } 

    if(operators == "-"){
        resultNum = oldNum-theNum;
    } 

    if(operators == "+"){
        resultNum = oldNum+theNum;
    } 
    
    display.textContent = resultNum;   
}) 

clear.addEventListener('click', function(){
   theNum = "";
   oldNum = "";
   operators = "";
   resultNum = "";
   display.textContent = "0";
   sign.textContent = "";
})







