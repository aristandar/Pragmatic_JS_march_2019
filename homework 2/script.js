function minMaxSum() {

    // Get the user input values
    let a0 = Number(document.getElementsByClassName('input-task-5')[0].value);
    let a1 = Number(document.getElementsByClassName('input-task-5')[1].value);
    let a2 = Number(document.getElementsByClassName('input-task-5')[2].value);
    let a3 = Number(document.getElementsByClassName('input-task-5')[3].value);
    let a4 = Number(document.getElementsByClassName('input-task-5')[4].value);

    let array = [a0, a1, a2, a3, a4];


  function isPositiveInteger() {
    console.log(array);
    let status = true;
    for (var i = 0; i < array.length; i++) {
      if (Number.isInteger(array[i]) && array[i] > Number(0)) {
      status = true;    
      }
      else {
        console.log(array[i]);
        status = false;
        break;
      }
      return status;
    }
  }

if (isPositiveInteger()) {
console.log("positive");
let sortArray = array.sort((a, b) => a - b);
console.log(sortArray);
let min = sortArray[0] + sortArray[1] + sortArray[2] + sortArray[3];
let max = sortArray[1] + sortArray[2] + sortArray[3] + sortArray[4];
document.getElementById('results-five').innerHTML = min + ' ' + max;
}

  else {
  document.getElementById('results-five').innerHTML = 'Please enter positive integer numbers!';
  }
}
