const getHistory = () => document.querySelector("#history-value").innerText;

const printHistory = (num) =>
  (document.querySelector("#history-value").innerText = num);

const getOutput = () => document.querySelector("#output-value").innerText;

const printOutput = (num) => {
  if (num) {
    document.getElementById("output-value").innerText = num == "00" ? 0 : num;
  } else {
    document.getElementById("output-value").innerText = getFormatedNumber(num);
  }
};

const getFormatedNumber = (num) => {
  if (num == "-") return "";
  const n = Number(num);
  let value = n.toLocaleString("en");
  return value;
};


const reverseNumberFormat = (num) => {
  return Number(num.replace(/,/g, ""));
};



const operator = document.getElementsByClassName("operator");
let output;
let history;
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        //if output has a value
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      output = getOutput();
      history = getHistory();
	  //if(history[history.length - 1] == this.id) return;
	  if(output == "0" && history =="") return;
      //if (output == "" && history != "") {
		//  console.log(45)
       // if (isNaN(history[history.length - 1])) {
       //   history = history.substr(0, history.length - 1);
       // }
     // }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          const result = isNaN(eval(history)) || eval(history) == "Infinity" ? 0 :  eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}



let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      //If output is not a number
      output = output + this.id;
      printOutput(output);
    }
  });
}
