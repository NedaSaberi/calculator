function addToCal(value) {
  document.getElementById("screen").value += value;
}
function clearScreen() {
  document.getElementById("screen").value = "";
}
function finalize() {
    var val = document.getElementById("screen").value;
    if (powFlag) {
      var numbers = document.getElementById("screen").value.split("^");
      document.getElementById("screen").value = Math.pow(
        numbers[0],
        numbers[1]
      );
      powFlag = false;
    }else{
  document.getElementById("screen").value = eval(val);
    }
}

var powFlag = false;
function mathCalc(mathFunc) {
  if (mathFunc == "^") {
    powFlag = true;
    document.getElementById("screen").value += mathFunc;
  } else {
    document.getElementById("screen").value = Math[mathFunc](
      document.getElementById("screen").value
    );
  }
}
