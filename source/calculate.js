CalculateIt();




function CalculateIt() {


    var calculator = document.calculator;

    calculator.addEventListener("click", function(evt) {

        if (evt.target.type = "button") {


            switch (evt.target.value) {

                case "0":

                    NumPressed(0);

                    break;


                case "1":

                    NumPressed(1);

                    break;

                case "2":

                    NumPressed(2);

                    break;

                case "3":

                    NumPressed(3);

                    break;

                case "4":

                    NumPressed(4);

                    break;

                case "5":

                    NumPressed(5);

                    break;

                case "6":

                    NumPressed(6);

                    break;

                case "7":

                    NumPressed(7);

                    break;

                case "8":

                    NumPressed(8);

                    break;

                case "9":

                    NumPressed(9);

                    break;

                case "C":

                    Clear();

                    break;

                case "CE":

                    ClearEntry();

                    break;

                case "+":

                    Operation('+');

                    break;

                case "*":

                    Operation('*');

                    break;

                case "-":

                    Operation('-');

                    break;

                case " / ":

                    Operation('/');

                    break;

                case "%":

                    Percent();

                    break;

                case "√":

                    Sqrt();

                    break;

                case ".":

                    Decimal();

                    break;

                case "+/-":

                    Neg();

                    break;

                case "=":

                    Operation('=');

                    break;

                case "1/x":

                    del();

                    break;

            }


        }
    });


}







var Calculator = document.calculator;
var Currents = 0;
var FlagNewNum = false;
var MathOperation = "";



// Handler of digital buttons
//
function NumPressed(Num) {

    if (FlagNewNum) {
        Calculator.ReadOut.value = Num;
        FlagNewNum = false;
    } else {
        if (Calculator.ReadOut.value == "0" || Calculator.ReadOut.value === "It is very large number")
            Calculator.ReadOut.value = Num;
        else if (Calculator.ReadOut.value.length < 28) {
            Calculator.ReadOut.value += Num;
        } else {
            Calculator.ReadOut.value = "It is very large number";



        }

    }

}

// Handler of math operation
//
function Operation(Op) {
    var Readout = Calculator.ReadOut.value;

    FlagNewNum = true;
    if ('+' == MathOperation)
        Currents += parseFloat(Readout);
    else if ('-' == MathOperation)
        Currents -= parseFloat(Readout);
    else if ('/' == MathOperation)
        Currents /= parseFloat(Readout);
    else if ('*' == MathOperation)
        Currents *= parseFloat(Readout);
    else
        Currents = parseFloat(Readout);
    Calculator.ReadOut.value = Currents;

    MathOperation = Op;

}

// Adding a decimal point with the number
//
function Decimal() {
    var curReadOut = Calculator.ReadOut.value;
    if (FlagNewNum) {
        curReadOut = "0.";
        FlagNewNum = false;
    } else {
        if (curReadOut.indexOf(".") == -1)
            curReadOut += ".";
    }
    Calculator.ReadOut.value = curReadOut;
}

// Clear current result
//
function ClearEntry() {
    Calculator.ReadOut.value = "0";
    FlagNewNum = true;
}

// Clear all results
function Clear() {
    Currents = 0;
    MathOperation = "";
    ClearEntry();

}



// Change sign of current result
//
function Neg() {
    Calculator.ReadOut.value =
        parseFloat(Calculator.ReadOut.value) * -1;
}

// Calculate with percents
//
function Percent() {

    // Calculator.ReadOut.value =
    // parseFloat(parseFloat(Calculator.ReadOut.value) / 100) *
    // parseFloat(Currents)+ parseFloat(Currents);

    Calculator.ReadOut.value = parseFloat(parseFloat(Calculator.ReadOut.value) / 100);

}

function Sqrt() {

    Calculator.ReadOut.value = parseFloat(Math.sqrt(Calculator.ReadOut.value));

}

function del() {

    Calculator.ReadOut.value = 1 / parseFloat(Calculator.ReadOut.value);

}